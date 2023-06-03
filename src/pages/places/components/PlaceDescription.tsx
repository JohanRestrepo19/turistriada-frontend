import {
  faComments,
  faContactBook,
  faRectangleList
} from '@fortawesome/free-regular-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { PlaceField } from './PlaceField'
import { Place } from '@/common/types'
import { useEffect } from 'react'
import { getUserById } from '@/services/firebase'

interface PlaceDescriptionProps {
  place: Place
}

export const PlaceDescription = ({ place }: PlaceDescriptionProps) => {
  useEffect(() => {
    getUserById(place.createdByUserId).then(response =>
      console.log('respuesta del servicio', response)
    )
  }, [place.createdByUserId])

  return (
    <div className="card bg-white shadow-xl h-[300px]">
      <div className="card-body gap-y-8 overflow-y-scroll">
        <PlaceField name="Nombre" content={place.name} icon={faComments} />

        <PlaceField
          name="Descripción"
          content={place.description}
          icon={faContactBook}
        />

        <PlaceField name="Dirección" content={place.location} icon={faGlobe} />

        <PlaceField
          name="Actividades"
          content={place.activities || []}
          icon={faRectangleList}
        />
      </div>
    </div>
  )
}
