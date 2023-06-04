import { Customer } from '@/common/types'
import { PersonalInformationCard } from './components/PersonalInformationCard'
import { CustomerPromotions } from './components/CustomerPromotions'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'

export const CustomerProfile = () => {
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
    role: authUser.role,
    profileImgUrl: authUser.profileImgUrl
  }

  return (
    <>
      <div className="flex">
        <div className="mx-4">
          <PersonalInformationCard customer={customer} />
        </div>
        <div className="mx-4 w-auto">
          <CustomerPromotions key={customer._id} />
        </div>
      </div>
    </>
  )
}
