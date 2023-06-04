import { Promo } from '@/common/types'
import { PromosList } from './components/PromosList'
import { useEffect, useState } from 'react'
import { getAllPromos } from '@/services/firebase'
import { toast } from 'react-toastify'
import { Loader } from '@/common/components'

export const ViewPromos = () => {
  const [promos, setPromos] = useState<Promo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getPromos = async () => {
      setIsLoading(true)
      const response = await getAllPromos()
      if (response.hasError) return toast.error(response.errorMsg)
      setPromos(response.promos as Promo[])
      setIsLoading(false)
    }

    console.log('El componente fue montado ✋')
    getPromos()
  }, [])

  if (isLoading) return <Loader />

  return (
    <div>
      <h3 className="text-primary my-9 text-4xl font-medium leading-tight text-center">
        Promociones
      </h3>
      <PromosList promos={promos} />
    </div>
  )
}
