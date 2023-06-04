import type { Promo } from '@/common/types'

interface PromoCardProps {
  promo: Promo
}

export const PromoCard = ({ promo }: PromoCardProps) => {
  return (
    <div className="card rounded-lg w-64 pb-2 bg-white text-secondary-text shadow-xl border-2 border-primary-light hover:scale-105 hover:border-accent ease-in-out duration-300">
      <figure className="w-full h-52 border rounded-sm border-b-accent shadow-lg">
        <img className="object-cover h-full" src={promo.promoImgUrl} alt="Promo" />
      </figure>

      <div className="px-2 py-2 flex flex-col overflow-clip hover:overflow-y-scroll leading-relaxed">
        {/* Promo Title */}
        <div className="card-title mb-4">
          <div className="text-start">
            <p className="text-primary-text">{promo.title}</p>
          </div>
        </div>

        {/* Promo Description */}
        <div>
          <p className="mb-2 text-justify">
            <span className="font-semibold">Descripción: </span>
            {promo.description}
          </p>
        </div>

        {/* Promo Published by */}
        <div>
          <p className="mb-2 text-justify">
            <span className="font-semibold">Publicada por: </span>
            {/* {promo.description} */}
          </p>
        </div>

        {/* Promo Location */}
        <div>
          <p className="mb-2 text-justify">
            <span className="font-semibold">Dirección: </span>
            {/* {promo.description} */}
          </p>
        </div>
      </div>

    </div>
  )
}
