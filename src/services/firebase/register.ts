import { createUserWithEmailAndPassword, AuthError } from 'firebase/auth'
import { doc, setDoc, FirestoreError } from 'firebase/firestore'
import { FirebaseAuth, FirestoreDB } from '@/setup/firebase'
import { User, DocumentType } from '@/common/types'

interface RegisterResponse {
  user?: User
  hasError: boolean
  errorMsg?: string
}

interface RegisterUserFirestore {
  documentType: DocumentType
  documentNumber: string
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
}

//TODO: Make Firestore UserCreation Function.
const createUserInFirestore = async (
  userInfo: RegisterUserFirestore & { id: string }
) => {
  try {
    const { id, ...userFields } = userInfo
    await setDoc(doc(FirestoreDB, 'users', id), { ...userFields, role: 'user' })
  } catch (error) {
    const firestoreError = error as FirestoreError
    throw new Error(firestoreError.message)
  }
  console.log(userInfo)
}

export const registerUser = async (
  userInfo: RegisterUserFirestore
): Promise<RegisterResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      FirebaseAuth,
      userInfo.email,
      userInfo.password
    )
    console.log('userCredential: ', userCredential.user.uid)
    // En este punto ya se sabe que el correo está disponible.
    // con lo cual ya se puede guardar la información extra en firestore
    await createUserInFirestore({ id: userCredential.user.uid, ...userInfo })

    return { hasError: false }
  } catch (error) {
    const authError = error as AuthError

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
