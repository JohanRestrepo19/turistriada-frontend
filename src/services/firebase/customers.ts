import type { Customer } from '@/common/types'
import { FirestoreDB } from '@/setup/firebase'
import { FirestoreError, doc, getDoc } from 'firebase/firestore'

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
    return { hasError: true, errorMsg: firestoreError.message }
  }
}
