import { Customer } from '@/common/types'
import { PersonalInformationCard } from './components/PersonalInformationCard'
import { CustomerPromotions } from './components/CustomerPromotions'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'

export const CustomerProfile = () => {
  const authUser = useAppSelector(selectAuthUser) as Customer

  return (
    <>
      <div className="flex">
        <div className="mx-4">
          <PersonalInformationCard customer={authUser} />
        </div>
        <div className="mx-4 w-auto">
          <CustomerPromotions key={authUser._id} />
        </div>
      </div>
    </>
  )
}
