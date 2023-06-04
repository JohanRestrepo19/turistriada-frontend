import { Customer } from '@/common/types'
import { EditProfileCustomerForm } from './components/EditProfileCustomerForm'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'

export const EditProfileCustomer = () => {

  const authUser = useAppSelector(selectAuthUser) as Customer

  return <EditProfileCustomerForm customer={authUser} />
}
