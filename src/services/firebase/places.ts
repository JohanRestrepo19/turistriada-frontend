import { FirestoreError, addDoc, collection } from 'firebase/firestore'
import { FirestoreDB } from '@/setup/firebase'
import { PublishPlace } from '@/pages/places/validations/PublishPlace'

interface BaseResponse {
  hasError: boolean
  errorMsg?: string
}

export const createPlace = async (
  placeData: PublishPlace & { createdByUserId: string }
): Promise<BaseResponse> => {
  try {
    //1. Tengo que crear almacenar la información del lugar

    console.log('Datos a ser enviados a firestore: ', placeData)

    await addDoc(collection(FirestoreDB, 'places'), {
      city: placeData.city,
      category: placeData.category,
      name: placeData.name,
      description: placeData.description,
      imgUrl: '',
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
