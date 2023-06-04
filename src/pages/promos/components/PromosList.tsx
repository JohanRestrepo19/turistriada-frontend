
import { Promo } from '@/common/types'
import { PromoCard } from './PromoCard'


export const PromosList = () => {

  const promos: Promo[] = [
    {_id: '1', title: 'Frisby 2x1', description: 'Lleva dos pollos Frisby por el precio de uno.', promoImgUrl: 'https://cazaofertas.com.co/wp-content/uploads/2015/05/oferta-57.png'},
    {_id: '1', title: 'Frisby 2x1', description: 'Lleva dos pollos Frisby por el precio de uno.', promoImgUrl: 'https://cazaofertas.com.co/wp-content/uploads/2015/05/oferta-57.png'},
    {_id: '1', title: 'Frisby 2x1', description: 'Lleva dos pollos Frisby por el precio de uno.', promoImgUrl: 'https://cazaofertas.com.co/wp-content/uploads/2015/05/oferta-57.png'},
    {_id: '1', title: 'Frisby 2x1', description: 'Lleva dos pollos Frisby por el precio de uno.', promoImgUrl: 'https://cazaofertas.com.co/wp-content/uploads/2015/05/oferta-57.png'}
  ]

  return (
    <div className="flex flex-wrap justify-center items-start gap-x-4 gap-y-8 py-4">
      {promos.map(promo => (
        <PromoCard promo={promo} key={promo._id} />
      ))}
    </div>
  )
}
