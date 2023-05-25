import { Button } from '@/common/components'
import { useNavigate } from 'react-router-dom'
import { User } from '@/common/types'

interface PersonalInformationCardProps {
  user: User
}

export const PersonalInformationCard = ({
  user
}: PersonalInformationCardProps) => {
  const navigate = useNavigate()
  const handleButton = (route: string) => {
    navigate(route)
  }

  return (
    <div className="card w-60 bg-primary-content shadow-xl my-4 py-5">
      <figure className="px-12 pt-12">
        <img
          src={user.profileImgUrl}
          alt="profile-pic"
          className="rounded-full"
        />
      </figure>
      <p className="text-center my-2 font-serif">@{user.username}</p>
      <h2 className="text-primary text-xl font-bold text-center">
        Información personal
      </h2>
      <div className="card-body text-justify text-sm">
        <div className="flex items-center">
          <p className="font-semibold mr-1">Documento:</p>
          <p className="text-base overflow-hidden line-clamp-3">
            {user.documentNumber}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold mr-1">Nombre:</p>
          <p className="text-base overflow-hidden line-clamp-3">{user.name}</p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold mr-1">Apellido:</p>
          <p className="text-base overflow-hidden line-clamp-3">
            {user.lastName}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold mr-1">Correo:</p>
          <p className="overflow-hidden line-clamp-3">{user.email}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-10">
        <Button
          styleType="primary"
          rounded
          className="mb-2 w-full btn-sm"
          onClick={() => handleButton('edit')}
        >
          Editar
        </Button>
        <Button
          styleType="secondary"
          rounded
          className="w-full btn-sm btn-outline"
          onClick={() => handleButton('/places/new-place')}
        >
          Publicar lugar
        </Button>
      </div>
    </div>
  )
}
