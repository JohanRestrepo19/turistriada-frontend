import { useNavigate } from 'react-router-dom'
import { Avatar, Button } from '../'

import type { Place } from '@/common/types'
import { useAppDispatch } from '@/common/hooks'
import { setPlace } from '@/store/slices/placesSlice'

interface PlaceCardProps {
  place: Place
}

export const PlaceCard = ({ place }: PlaceCardProps) => {
  //TODO: Fetch the user who created this place
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleClickDetails = () => {
    dispatch(setPlace(place))
    navigate(`/places/${place._id}`)
  }

  return (
    <div className="card card-compact rounded-lg w-64 bg-white text-secondary-text shadow-xl border-2 border-primary-light hover:scale-105 hover:border-accent ease-in-out duration-300">
      <figure className="w-full h-52 border rounded-sm border-b-accent shadow-lg">
        <img className="object-scale-down" src={place.imgUrl} alt="Shoes" />
      </figure>
      {/* <div className="divider"></div> */}
      <div className="card-body flex flex-col justify-evenly">
        {/* CardTitle */}

        <div className="card-title h-24">
          <Avatar imgSrc={''} />

          <div className="ml-8 text-start">
            <p className="text-primary-text">{place.name}</p>
          </div>
        </div>

        <p className="mb-2 font-light">
          <span className="font-semibold">Pulibcado por: </span>
          {'Nombre de usuario'}
        </p>

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
