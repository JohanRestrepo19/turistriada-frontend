import { FirestoreError, addDoc, collection } from 'firebase/firestore'
import { FirestoreDB } from '@/setup/firebase'
import { PublishPlace } from '@/pages/places/validations/PublishPlace'

interface BaseResponse {
  hasError: boolean
  errorMsg?: string
}

export const createPlace = async (
  placeData: PublishPlace
): Promise<BaseResponse> => {
  try {
    //1. Tengo que crear almacenar la información del lugar

    await addDoc(collection(FirestoreDB, 'places'), {
      city: placeData.city,
      category: placeData.category,
      name: placeData.name,
      description: placeData.description,
      imgUrl: '',
      location: placeData.location
    })

    return { hasError: false }
  } catch (error) {
    const firebaseError = error as FirestoreError
    console.warn('Hubo un error: ', firebaseError.message)
    return { hasError: true, errorMsg: firebaseError.message }
  }
}
