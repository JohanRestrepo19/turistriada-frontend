import { createUserWithEmailAndPassword, AuthError } from 'firebase/auth'
import { doc, setDoc, FirestoreError } from 'firebase/firestore'
import { FirebaseAuth, FirestoreDB } from '@/setup/firebase'
import { User, DocumentType, Customer } from '@/common/types'

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
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    username: userInfo.username,
    role: 'user',
    profileImgUrl: '',
    documentType: userInfo.documentType,
    documentNumber: userInfo.documentNumber,
    email: userInfo.email
  }
}

const makeCustomerResponse = (
  customerInfo: Omit<Customer, '_id'> & { id: string }
): Customer => {
  return {
    _id: customerInfo.id,
    location: customerInfo.location,
    commercialRegistration: customerInfo.commercialRegistration,
    companyName: customerInfo.companyName,
    email: customerInfo.email,
    nit: customerInfo.nit,
    phone: customerInfo.phone,
    profileImgUrl: customerInfo.profileImgUrl,
    role: 'customer'
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

const createCustomerInFirestore = async (
  customerInfo: Omit<Customer, '_id'> & { id: string }
) => {
  try {
    const { id, ...customerFields } = customerInfo
    await setDoc(doc(FirestoreDB, 'customers', id), {
      ...customerFields,
      role: 'customer',
      profileImgUrl: ''
    })
    return makeCustomerResponse(customerInfo)
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

export const registerCustomer = async (
  customerInfo: Omit<Customer, '_id' | 'role'> & { password: string }
): Promise<RegisterResponse> => {
  try {
    const customerCredential = await createUserWithEmailAndPassword(
      FirebaseAuth,
      customerInfo.email,
      customerInfo.password
    )
    await createCustomerInFirestore({
      id: customerCredential.user.uid,
      role: 'customer',
      ...customerInfo
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
