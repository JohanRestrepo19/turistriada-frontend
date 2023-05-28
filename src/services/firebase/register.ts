import { createUserWithEmailAndPassword, AuthError } from 'firebase/auth'
import { FirebaseAuth } from '@/setup/firebase'
import { User } from '@/common/types'

//TODO: Make Firestore UserCreation Function.
/* const createUserFirestore = async () => {} */

interface RegisterResponse {
  user?: User
  hasError: boolean
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
    return { hasError: false }
  } catch (error) {
    const authError = error as AuthError
    console.log('Error de firebase', { ...authError })

    if (authError.code === 'auth/email-already-in-use')
      return {
        hasError: true,
        errorMsg: 'El correo electronico ya está en uso'
      }

    return {
      hasError: true,
      errorMsg: authError.message
    }
  }
}
