import { Button } from '@/common/components'
import { useNavigate } from 'react-router-dom'
import { Customer } from '@/common/types'

interface PersonalInformationCardProps {
  customer: Customer
}

export const PersonalInformationCard = ({
  customer
}: PersonalInformationCardProps) => {
  const navigate = useNavigate()
  const handleButton = (route: string) => {
    navigate(route)
  }

  return (
    <div className="card w-60 bg-primary-content shadow-xl my-4 py-5">
      <figure className="px-12 pt-12">
        <img
          src={
            customer.profileImgUrl
              ? customer.profileImgUrl
              : 'https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png'
          }
          alt="profile-pic"
          className="rounded-full"
        />
      </figure>
      <p className="text-center my-2 font-serif">@{customer.username}</p>
      <h2 className="text-primary text-xl font-bold text-center">
        Información compañía
      </h2>
      <div className="card-body text-justify text-sm">
        <div className="flex items-center">
          <p className="font-semibold mr-1">NIT:</p>
          <p className="text-base overflow-hidden line-clamp-3">
            {customer.nit}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold mr-1">C.C:</p>
          <p className="text-base overflow-hidden line-clamp-3">
            {customer.commercialRegistration}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold mr-1">Nombre:</p>
          <p className="text-base overflow-hidden line-clamp-3">
            {customer.companyName}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold mr-1">Dirección:</p>
          <p className="overflow-hidden line-clamp-3">{customer.location}</p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold mr-1">Telefono:</p>
          <p className="overflow-hidden line-clamp-3">{customer.phone}</p>
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
          onClick={() => handleButton('/customers/promos/new-promo')}
        >
          Publicar
        </Button>
      </div>
    </div>
  )
}
