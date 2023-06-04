import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { CustomerPromotions } from './components/CustomerPromotions'
import { Loader } from '@/common/components'
import { PersonalInformationCard } from './components/PersonalInformationCard'
import { getCustomerById } from '@/services/firebase'
import { selectAuthUser } from '@/store/slices/authSlice'
import { useAppSelector } from '@/common/hooks'
import type { Customer } from '@/common/types'

export const CustomerProfile = () => {
  const authUser = useAppSelector(selectAuthUser) as Customer
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [customer, setCustomer] = useState<Customer | null>(null)

  useEffect(() => {
    const fetchCustomerInfo = async () => {
      const response = await getCustomerById(authUser._id)
      if (response.hasError) return toast.error(response.errorMsg)
      setCustomer(response.customer as Customer)
      setIsLoading(false)
    }
    fetchCustomerInfo()
  }, [authUser._id])

  if (isLoading) return <Loader />
  return (
    <>
      <div className="flex">
        <div className="mx-4">
          <PersonalInformationCard customer={customer as Customer} />
        </div>
        <div className="mx-4 w-auto">
          <CustomerPromotions />
        </div>
      </div>
    </>
  )
}
