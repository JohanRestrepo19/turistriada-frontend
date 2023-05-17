import type { Place } from '@/common/types'
import { Button } from '..'

interface PlaceCardProps {
  place: Place
}

const imgPath2 = '/src/assets/mock/fake-255-150.jpg'

export const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <div className="card w-96 bg-white shadow-xl border-2 border-primary-light hover:scale-105 hover:border-accent ease-in-out duration-300">
      <figure>
        <img className="w-full" src={imgPath2} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title h-12">{place.name}</h2>
        <div className="card-actions justify-center">
          <p className="h-32 text-ellipsis overflow-hidden">
            {place.description}
          </p>
          <Button styleType="primary">Ver detalles</Button>
        </div>
      </div>
    </div>
  )
}
