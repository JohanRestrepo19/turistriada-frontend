import type { Customer } from '@/common/types'
import { FirestoreDB } from '@/setup/firebase'
import { FirestoreError, doc, getDoc, updateDoc } from 'firebase/firestore'

interface BaseResponse {
  hasError: boolean
  errorMsg?: string
}

interface CustomerResponse extends BaseResponse {
  customer?: Customer
}

export const getCustomerById = async (
  customerId: string
): Promise<CustomerResponse> => {
  try {
    const customerRef = doc(FirestoreDB, 'customers', customerId)
    const customerSnapshot = await getDoc(customerRef)
    if (customerSnapshot.exists()) {
      const customerData = customerSnapshot.data()
      const { password, confirmPassword, ...userPayload } = customerData //eslint-disable-line
      const customer = { _id: customerId, ...userPayload } as Customer
      return { hasError: false, customer: customer }
    } else {
      return {
        hasError: true,
        errorMsg: `El usuario con ID: ${customerId}, no existe`
      }
    }
  } catch (error) {
    const firestoreError = error as FirestoreError
    console.error(firestoreError.message)
    return { hasError: true, errorMsg: firestoreError.message }
  }
}

interface UpdateCustomerResponse extends BaseResponse {
  customer?: Customer
}
export const updateCustomerInfo = async (
  customerId: string,
  customerInfo: Omit<
    Customer,
    '_id' | 'email' | 'phone' | 'profileImgUrl' | 'role'
  >
): Promise<UpdateCustomerResponse> => {
  try {
    const customerRef = doc(FirestoreDB, 'customers', customerId)
    await updateDoc(customerRef, {
      nit: customerInfo.nit,
      companyName: customerInfo.companyName,
      location: customerInfo.location,
      username: customerInfo.username,
      commercialRegistration: customerInfo.commercialRegistration
    })
    const response = await getCustomerById(customerId)
    return { hasError: false, customer: response.customer }
  } catch (error) {
    const firestoreError = error as FirestoreError
    console.error(firestoreError.message)
    return { hasError: true, errorMsg: firestoreError.message }
  }
}
