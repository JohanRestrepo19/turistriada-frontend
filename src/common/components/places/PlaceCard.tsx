import { useNavigate } from 'react-router-dom'
import { Avatar, Button } from '../'

import type { Place } from '@/common/types'
import { useAppDispatch } from '@/common/hooks'
import { setPlace } from '@/store/slices/placesSlice'

interface PlaceCardProps {
  place: Place
}

export const PlaceCard = ({ place }: PlaceCardProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleClickDetails = () => {
    dispatch(setPlace(place))
    navigate(`/places/${place._id}`)
  }

  return (
    <div className="card rounded-lg w-64 bg-white text-secondary-text shadow-xl border-2 border-primary-light hover:scale-105 hover:border-accent ease-in-out duration-300">
      <figure>
        <img className="w-full h-52" src={place.imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body flex flex-col justify-evenly">
        {/* CardTitle */}
        <div className="card-title h-24 mb-4">
          <Avatar imgSrc={place.createdBy?.profileImgUrl} />
          <div className="ml-8">
            <p className="text-primary-text">{place.name}</p>
            <p className="font-light">{place.createdBy?.username}</p>
          </div>
        </div>

        {/* Card description */}
        <div>
          <p className="h-32 text-justify overflow-hidden">
            {place.description}
          </p>
        </div>

        <div className="card-actions justify-center gap-y-4">
          <Button styleType="primary" rounded onClick={handleClickDetails}>
            Ver detalles
          </Button>
        </div>
      </div>
    </div>
  )
}
