import { Promo } from '@/common/types'
import { PromoCard } from './PromoCard'

interface PromosListProps {
  promos: Promo[]
}

export const PromosList = ({ promos }: PromosListProps) => {
  if (promos.length === 0) return <h1>Aun no hay promociones disponibles 🙁</h1>

  return (
    <div className="flex flex-wrap justify-center items-start gap-x-4 gap-y-8 py-4">
      {promos.map(promo => (
        <PromoCard promo={promo} key={promo._id} />
      ))}
    </div>
  )
}
