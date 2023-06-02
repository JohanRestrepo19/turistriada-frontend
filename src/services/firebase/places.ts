import { FirestoreError, addDoc, collection, setDoc } from 'firebase/firestore'
import { FirebaseStorage, FirestoreDB } from '@/setup/firebase'
import { PublishPlace } from '@/pages/places/validations/PublishPlace'
import {
  StorageError,
  getDownloadURL,
  ref,
  uploadBytes
} from 'firebase/storage'

interface BaseResponse {
  hasError: boolean
  errorMsg?: string
}

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
    const firebaseError = error as FirestoreError
    console.warn('Hubo un error: ', firebaseError.message)
    return { hasError: true, errorMsg: firebaseError.message }
  }
}
