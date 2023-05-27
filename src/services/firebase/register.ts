import { FirebaseAuth } from '@/setup/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

/* const registerUserFirestore = async () => {} */

export const registerUser = async (userInfo: {
  email: string
  password: string
}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      FirebaseAuth,
      userInfo.email,
      userInfo.password
    )
    console.log('userCredential: ', userCredential.user)
  } catch (error) {
    return {
      status: false,
      msg: error
    }
  }
}
