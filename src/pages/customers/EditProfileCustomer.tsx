import { Customer } from '@/common/types'
import { EditProfileCustomerForm } from './components/EditProfileCustomerForm'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'

export const EditProfileCustomer = () => {

  const authUser = useAppSelector(selectAuthUser) as Customer

  const customer: Customer = {
    commercialRegistration: authUser.commercialRegistration,
    nit: authUser.nit,
    companyName: authUser.companyName,
    location: authUser.location,
    email: authUser.email,
    username: authUser.username,
    _id: authUser._id,
    phone: authUser.phone,
    role: authUser.role
  }

  return <EditProfileCustomerForm customer={customer} />
}
