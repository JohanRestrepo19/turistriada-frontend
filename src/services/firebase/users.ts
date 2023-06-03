import { FirestoreError, doc, getDoc } from 'firebase/firestore'
import { FirestoreDB } from '@/setup/firebase'
import type { User } from '@/common/types'

interface BaseResponse {
  hasError: boolean
  errorMsg?: string
}

interface UserResponse extends BaseResponse {
  user?: User
}
export const getUserById = async (userId: string): Promise<UserResponse> => {
  try {
    console.log('Servicio para traer información de usuarios.', { userId })
    const userRef = doc(FirestoreDB, 'users', userId)
    const userSnapshot = await getDoc(userRef)

    if (userSnapshot.exists()) {
      console.log('Id del usuario: ', userSnapshot.id)
      const userData = userSnapshot.data()
      const { password, confirmPassword, ...userPayload } = userData //eslint-disable-line
      const user = { _id: userId, ...userPayload } as User
      return { hasError: false, user }
    } else {
      return {
        hasError: true,
        errorMsg: `El usuario con ID: ${userId}, no existe`
      }
    }
  } catch (error) {
    const firestoreError = error as FirestoreError
    return { hasError: true, errorMsg: firestoreError.message }
  }
}
