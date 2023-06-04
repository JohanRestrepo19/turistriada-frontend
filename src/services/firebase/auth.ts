import { AuthError, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { FirestoreError, doc, getDoc } from 'firebase/firestore'
import { FirebaseAuth, FirestoreDB } from '@/setup/firebase'
import { Customer, User } from '@/common/types'

export interface LoginFirebase {
  email: string
  password: string
}

interface BaseRespone {
  hasError: boolean
  errorMsg?: string
}

interface LoginResponse extends BaseRespone {
  user?: User | Customer
}

const fetchUserFromFirestore = async (
  userId: string,
  collection: 'users' | 'customers'
): Promise<User | Customer | void> => {
  try {
    const userRef = doc(FirestoreDB, collection, userId)
    const userSnap = await getDoc(userRef)
    if (userSnap.exists()) {
      const userData = userSnap.data()
      const { password, confirmPassword, ...userPayload } = userData //eslint-disable-line
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

    const user = (await fetchUserFromFirestore(
      userCredential.user.uid,
      'users'
    )) as User

    if (user === undefined) {
      const customer = (await fetchUserFromFirestore(
        userCredential.user.uid,
        'customers'
      )) as Customer

      return { user: customer, hasError: false }
    }

    return { user, hasError: false }
  } catch (error) {
    const authError = error as AuthError
    console.warn('Hubo un error: ', authError.message)
    return { hasError: true, errorMsg: authError.message }
  }
}

export const logoutFromFirebase = async (): Promise<BaseRespone> => {
  try {
    await signOut(FirebaseAuth)
    return { hasError: false }
  } catch (error) {
    const authError = error as AuthError
    return { hasError: true, errorMsg: authError.message }
  }
}
