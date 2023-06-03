import {
  faComments,
  faContactBook,
  faRectangleList,
  faUser
} from '@fortawesome/free-regular-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { PlaceField } from './PlaceField'
import { Place, User } from '@/common/types'
import { useEffect, useState } from 'react'
import { getUserById } from '@/services/firebase'
import { toast } from 'react-toastify'
import { Loader } from '@/common/components'

interface PlaceDescriptionProps {
  place: Place
}

export const PlaceDescription = ({ place }: PlaceDescriptionProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [authorUser, setAuthorUser] = useState<User | null>(null)

  useEffect(() => {
    setIsLoading(true)
    getUserById(place.createdByUserId).then(response => {
      if (response.hasError) return toast.error(response.errorMsg)
      setAuthorUser(response.user as User)
      setIsLoading(false)
    })
  }, [place.createdByUserId])

  if (isLoading) return <Loader />

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

        <PlaceField
          name="Publicado por: "
          content={authorUser?.username || ''}
          icon={faUser}
        />
      </div>
    </div>
  )
}
