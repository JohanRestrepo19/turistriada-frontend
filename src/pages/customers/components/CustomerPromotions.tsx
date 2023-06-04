import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getPromosByCustomerId } from '@/services/firebase'
import { selectAuthUser } from '@/store/slices/authSlice'
import { useAppSelector } from '@/common/hooks'
import { Loader } from '@/common/components'
import type { Customer, Promo } from '@/common/types'

export const CustomerPromotions = () => {
  const authUser = useAppSelector(selectAuthUser) as Customer
  const [promos, setPromos] = useState<Promo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsLoading(true)
      const response = await getPromosByCustomerId(authUser._id)
      if (response.hasError) return toast.error(response.errorMsg)
      setPromos(response.promos as Promo[])
      setIsLoading(false)
    }
    fetchPlaces()
  }, [authUser._id])

  if (isLoading) return <Loader />

  return (
    <>
      <h2 className="text-xl my-4 text-primary font-bold text-center">
        Promociones y descuentos activos
      </h2>
      <div className="h-1 w-3/3 bg-primary"></div>
      <div className="max-h-[700px] overflow-y-auto">
        {promos.map(promo => (
          <div
            key={promo._id}
            className="card w-96 bg-primary-content my-4 shadow-xl mr-6"
          >
            <div className="flex items-center justify-around pt-6 px-4">
              <p className="card-title mr-2 text-lg font-bold">{promo.title}</p>
            </div>
            <figure className="pt-6">
              <img
                src={promo.promoImgUrl}
                alt="place"
                className="rounded-sm w-full h-60"
              />
            </figure>
            <div className="card-body text-justify text-sm">
              <div className="items-center">
                <p className="font-extrabold text-base">Descripción: </p>
                <p className="text-base overflow-hidden line-clamp-3">
                  {promo.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
