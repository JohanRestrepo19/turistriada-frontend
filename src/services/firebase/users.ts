import { FirestoreError, doc, getDoc, updateDoc } from 'firebase/firestore'
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
    const userRef = doc(FirestoreDB, 'users', userId)
    const userSnapshot = await getDoc(userRef)
    if (userSnapshot.exists()) {
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
    console.error(firestoreError.message)
    return { hasError: true, errorMsg: firestoreError.message }
  }
}

interface UpdateUserResponse extends BaseResponse {
  user?: User
}
export const updateUserInfo = async (
  userId: string,
  userInfo: Omit<
    User,
    '_id' | 'documentType' | 'email' | 'profileImgUrl' | 'role'
  >
): Promise<UpdateUserResponse> => {
  try {
    const userRef = doc(FirestoreDB, 'users', userId)
    await updateDoc(userRef, {
      documentNumber: userInfo.documentNumber,
      username: userInfo.username,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName
    })
    const response = await getUserById(userId)
    return { hasError: false, user: response.user }
  } catch (error) {
    const firestoreError = error as FirestoreError
    console.error(firestoreError.message)
    return { hasError: true, errorMsg: firestoreError.message }
  }
}
