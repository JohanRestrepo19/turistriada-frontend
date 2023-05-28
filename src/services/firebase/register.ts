import { createUserWithEmailAndPassword, AuthError } from 'firebase/auth'
import { FirebaseAuth } from '@/setup/firebase'
import { User } from '@/common/types'

//TODO: Make Firestore UserCreation Function.
/* const registerUserFirestore = async () => {} */

interface RegisterResponse {
  user?: User
  error: boolean
  errorMsg?: string
}
export const registerUser = async (userInfo: {
  email: string
  password: string
}): Promise<RegisterResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      FirebaseAuth,
      userInfo.email,
      userInfo.password
    )
    console.log('userCredential: ', userCredential.user)
    return { error: false }
  } catch (error) {
    const authError = error as AuthError
    return {
      error: true,
      errorMsg: authError.message
    }
  }
}
