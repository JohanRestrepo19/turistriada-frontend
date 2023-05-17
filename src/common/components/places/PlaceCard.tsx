import type { Place } from '@/common/types'
import { Avatar, Button } from '../'

interface PlaceCardProps {
  place: Place
}

export const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <div className="card rounded-lg w-96 bg-white text-secondary-text shadow-xl border-2 border-primary-light hover:scale-105 hover:border-accent ease-in-out duration-300">
      <figure>
        <img className="w-full h-52" src={place.imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body flex flex-col justify-evenly">
        <div className="card-title h-24">
          <Avatar imgSrc={place.createdBy?.profileImgUrl} />
          <div className="ml-8">
            <p className="font-semibold">{place.name}</p>
            <p className="font-light">{place.createdBy?.username}</p>
          </div>
        </div>

        <div className="card-actions justify-center">
          <p className="h-32 text-justify overflow-hidden">
            {place.description}
          </p>
          <Button styleType="primary" rounded className="px-10">
            Ver detalles
          </Button>
        </div>
      </div>
    </div>
  )
}
