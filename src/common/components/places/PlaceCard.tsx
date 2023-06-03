import { useNavigate } from 'react-router-dom'
import { Button } from '../'

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
    <div className="card rounded-lg w-64 pb-4 bg-white text-secondary-text shadow-xl border-2 border-primary-light hover:scale-105 hover:border-accent ease-in-out duration-300">
      <figure className="w-full h-52 border rounded-sm border-b-accent shadow-lg">
        <img className="object-cover h-full" src={place.imgUrl} alt="Place" />
      </figure>

      <div className="px-2 py-4 flex flex-col overflow-clip hover:overflow-y-scroll leading-relaxed">
        {/* CardTitle */}
        <div className="card-title mb-4">
          <div className="text-start">
            <p className="text-primary-text">{place.name}</p>
          </div>
        </div>

        <p className="mb-2 font-light">
          <span className="font-semibold">Dirección: </span>
          {place.location}
        </p>

        {/* Card description */}
        <div>
          <p className="h-32 text-justify">
            <span className="font-semibold">Descripción: </span>
            {place.description}
          </p>
        </div>
      </div>

      <div className="card-actions justify-center mt-2">
        <Button styleType="primary" rounded onClick={handleClickDetails}>
          Ver detalles
        </Button>
      </div>
    </div>
  )
}
