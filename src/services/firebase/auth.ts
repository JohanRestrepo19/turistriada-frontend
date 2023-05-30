import { AuthError, signInWithEmailAndPassword } from 'firebase/auth'
import { FirestoreError, doc, getDoc } from 'firebase/firestore'
import { FirebaseAuth, FirestoreDB } from '@/setup/firebase'
import { User } from '@/common/types'

export interface LoginFirebase {
  email: string
  password: string
}

interface LoginResponse {
  user?: User
  hasError: boolean
  errorMsg?: string
}

const fetchUserFromFirestore = async (userId: string): Promise<User | void> => {
  try {
    const userRef = doc(FirestoreDB, 'users', userId)
    const userSnap = await getDoc(userRef)
    if (userSnap.exists()) {
      const userData = userSnap.data()
      const { password, confirmPassword, ...userPayload } = userData //eslint-disable-line
      console.log('Info user from firestore: ', userPayload)
      const user = { _id: userId, ...userPayload } as User
      return user
    }
  } catch (error) {
    const firestoreError = error as FirestoreError
    throw new Error(firestoreError.message)
  }
}

export const loginToFirebase = async ({
  email,
  password
}: LoginFirebase): Promise<LoginResponse> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    )
    const user = (await fetchUserFromFirestore(userCredential.user.uid)) as User
    return { user, hasError: false }
  } catch (error) {
    const authError = error as AuthError
    console.warn('Hubo un error: ', authError.message)
    return { hasError: true, errorMsg: authError.message }
  }
}
