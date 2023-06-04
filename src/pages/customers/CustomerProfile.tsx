import { CustomerPromotions } from './components/CustomerPromotions'
import { PersonalInformationCard } from './components/PersonalInformationCard'
import { selectAuthUser } from '@/store/slices/authSlice'
import { useAppSelector } from '@/common/hooks'
import type { Customer } from '@/common/types'

export const CustomerProfile = () => {
  const authUser = useAppSelector(selectAuthUser) as Customer
  return (
    <>
      <div className="flex">
        <div className="mx-4">
          <PersonalInformationCard customer={authUser as Customer} />
        </div>
        <div className="mx-4 w-auto">
          <CustomerPromotions />
        </div>
      </div>
    </>
  )
}
