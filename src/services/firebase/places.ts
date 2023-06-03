import {
  FirestoreError,
  addDoc,
  collection,
  getDocs,
  query,
  setDoc
} from 'firebase/firestore'
import { FirebaseStorage, FirestoreDB } from '@/setup/firebase'
import { PublishPlace } from '@/pages/places/validations/PublishPlace' //FIX: Remove this dependency.
import {
  StorageError,
  getDownloadURL,
  ref,
  uploadBytes
} from 'firebase/storage'
import type { Review } from '@/common/types'
import { convertFirestoreTimeStampToDate } from '@/common/utils'

interface BaseResponse {
  hasError: boolean
  errorMsg?: string
}

//Reviews
export const createPlaceReview = async (
  placeId: string,
  reviewData: Omit<Review, '_id'>
): Promise<BaseResponse> => {
  try {
    await addDoc(
      collection(FirestoreDB, 'places', placeId, 'reviews'),
      reviewData
    )
    return { hasError: false }
  } catch (error) {
    const firestoreError = error as FirestoreError
    return { hasError: true, errorMsg: firestoreError.message }
  }
}

interface PlaceReviewsResponse extends BaseResponse {
  reviews?: Review[]
}
export const getPlaceReviews = async (
  placeId: string
): Promise<PlaceReviewsResponse> => {
  try {
    const placeReviewsQuery = query(
      collection(FirestoreDB, 'places', placeId, 'reviews')
    )
    const placeReviewsSnapshot = await getDocs(placeReviewsQuery)
    const placeReviews: Review[] = placeReviewsSnapshot.docs.map(doc => {
      return {
        _id: doc.id,
        createdAt: convertFirestoreTimeStampToDate(
          doc.get('createdAt')
        ).toString(),
        authorId: doc.get('authorId'),
        rating: doc.get('rating'),
        comment: doc.get('comment')
      }
    })
    return { hasError: false, reviews: placeReviews }
  } catch (error) {
    const firestoreError = error as FirestoreError
    return { hasError: true, errorMsg: firestoreError.message }
  }
}

//Places
const savePlaceImg = async (file: File, placeId: string): Promise<string> => {
  try {
    await uploadBytes(ref(FirebaseStorage, `places/${placeId}`), file)
    const imageUrl = await getDownloadURL(
      ref(FirebaseStorage, `places/${placeId}`)
    )
    return imageUrl
  } catch (error) {
    const storageError = error as StorageError
    throw new Error(storageError.message)
  }
}

export const createPlace = async (
  placeData: PublishPlace & { createdByUserId: string }
): Promise<BaseResponse> => {
  try {
    const placeRef = await addDoc(collection(FirestoreDB, 'places'), {})

    const imgUrl = await savePlaceImg(
      placeData.image.item(0) as File,
      placeRef.id
    )

    await setDoc(placeRef, {
      city: placeData.city,
      category: placeData.category,
      name: placeData.name,
      description: placeData.description,
      imgUrl,
      location: placeData.location,
      activities: placeData.activities,
      createdAt: new Date(),
      createdByUserId: placeData.createdByUserId
    })

    return { hasError: false }
  } catch (error) {
    const firestoreError = error as FirestoreError
    console.warn('Hubo un error: ', firestoreError.message)
    return { hasError: true, errorMsg: firestoreError.message }
  }
}
