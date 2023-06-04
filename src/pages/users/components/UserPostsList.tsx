import { Place } from '@/common/types'

interface UserPostsListProps {
  placeList: Place
}

export const UserPostsList = ({ placeList }: UserPostsListProps) => {
  return (
    <div className="card w-96 bg-primary-content my-4 shadow-xl mx-7">
      <div className="flex items-center justify-around pt-6 px-4">
        <p className="card-title mr-2">Nombre del sitio:</p>
        <p className="text-lg font-light">{placeList.name}</p>
      </div>
      <figure className="pt-6">
        <img
          src={placeList.imgUrl}
          alt="place"
          className="rounded-sm w-full h-60"
        />
      </figure>
      <div className="card-body text-justify text-sm">
        <div className="flex items-center">
          <p className="font-extrabold text-base">Localización: </p>
          <p className="text-base overflow-hidden line-clamp-3">
            {placeList.location}
          </p>
        </div>
        <div className="items-center">
          <p className="font-extrabold text-base">Descripción: </p>
          <p className="text-base overflow-hidden line-clamp-3">
            {placeList.description}
          </p>
        </div>
      </div>
    </div>
  )
}
