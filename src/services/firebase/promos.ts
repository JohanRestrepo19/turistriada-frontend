import {
  FirestoreError,
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  setDoc,
  where
} from 'firebase/firestore'
import {
  StorageError,
  getDownloadURL,
  ref,
  uploadBytes
} from 'firebase/storage'
import { FirebaseStorage, FirestoreDB } from '@/setup/firebase'
import { convertFirestoreTimeStampToDate } from '@/common/utils'
import type { Promo } from '@/common/types'

interface BaseResponse {
  hasError: boolean
  errorMsg?: string
}

const savePromoImg = async (file: File, promoId: string): Promise<string> => {
  try {
    await uploadBytes(ref(FirebaseStorage, `promos/${promoId}`), file)
    const imageUrl = await getDownloadURL(
      ref(FirebaseStorage, `promos/${promoId}`)
    )
    return imageUrl
  } catch (error) {
    const storageError = error as StorageError
    throw new Error(storageError.message)
  }
}

export const createPromo = async (
  promoData: Omit<Promo, '_id' | 'createdAt'> & { image: FileList }
): Promise<BaseResponse> => {
  try {
    const promoRef = await addDoc(collection(FirestoreDB, 'promos'), {})

    const promoImgUrl = await savePromoImg(
      promoData.image.item(0) as File,
      promoRef.id
    )

    await setDoc(promoRef, {
      promoImgUrl,
      createdByUserId: promoData.createdByUserId,
      title: promoData.title,
      description: promoData.description,
      createdAt: new Date()
    })

    return { hasError: false }
  } catch (error) {
    const firestoreError = error as FirestoreError
    console.error('Hubo un error: ', firestoreError.message)
    return { hasError: true, errorMsg: firestoreError.message }
  }
}

interface PromosResponse extends BaseResponse {
  promos?: Promo[]
}
export const getAllPromos = async (): Promise<PromosResponse> => {
  try {
    const promos: Promo[] = []
    const promosQuery = query(
      collection(FirestoreDB, 'promos'),
      orderBy('createdAt', 'desc')
    )
    const promosSnapshot = await getDocs(promosQuery)

    for (const promo of promosSnapshot.docs) {
      const result: Promo = {
        _id: promo.id,
        createdAt: convertFirestoreTimeStampToDate(
          promo.get('createdAt')
        ).toString(),
        createdByUserId: promo.get('createdByUserId'),
        description: promo.get('description'),
        promoImgUrl: promo.get('promoImgUrl'),
        title: promo.get('title')
      }
      promos.push(result)
    }

    return { hasError: false, promos }
  } catch (error) {
    const firestoreError = error as FirestoreError
    console.error(firestoreError.message)
    return { hasError: true, errorMsg: firestoreError.message }
  }
}

export const getPromosByCustomerId = async (
  customerId: string
): Promise<PromosResponse> => {
  try {
    const promos: Promo[] = []
    const promosQuery = query(
      collection(FirestoreDB, 'promos'),
      where('createdByUserId', '==', customerId),
      orderBy('createdAt', 'desc')
    )
    const promosSnapshot = await getDocs(promosQuery)

    for (const promo of promosSnapshot.docs) {
      const result: Promo = {
        _id: promo.id,
        createdAt: convertFirestoreTimeStampToDate(
          promo.get('createdAt')
        ).toString(),
        createdByUserId: promo.get('createdByUserId'),
        description: promo.get('description'),
        promoImgUrl: promo.get('promoImgUrl'),
        title: promo.get('title')
      }
      promos.push(result)
    }

    return { hasError: false, promos }
  } catch (error) {
    const firestoreError = error as FirestoreError
    console.error(firestoreError.message)
    return { hasError: true, errorMsg: firestoreError.message }
  }
}
