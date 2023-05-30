import { createUserWithEmailAndPassword, AuthError } from 'firebase/auth'
import { doc, setDoc, FirestoreError } from 'firebase/firestore'
import { FirebaseAuth, FirestoreDB } from '@/setup/firebase'
import { User, DocumentType } from '@/common/types'

export interface RegisterUserFirestore {
  documentType: DocumentType
  documentNumber: string
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
}

interface RegisterResponse {
  hasError: boolean
  errorMsg?: string
}

const makeUserResposne = (
  userInfo: RegisterUserFirestore & { id: string }
): User => {
  return {
    _id: userInfo.id,
    name: userInfo.firstName,
    lastName: userInfo.lastName,
    username: userInfo.username,
    role: 'user',
    profileImgUrl: '',
    documentType: userInfo.documentType,
    documentNumber: userInfo.documentNumber,
    email: userInfo.email
  }
}

const createUserInFirestore = async (
  userInfo: RegisterUserFirestore & { id: string }
) => {
  try {
    const { id, ...userFields } = userInfo
    await setDoc(doc(FirestoreDB, 'users', id), {
      ...userFields,
      role: 'user',
      profileImgUrl: ''
    })
    return makeUserResposne(userInfo)
  } catch (error) {
    const firestoreError = error as FirestoreError
    throw new Error(firestoreError.message)
  }
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

    await createUserInFirestore({
      id: userCredential.user.uid,
      ...userInfo
    })

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
