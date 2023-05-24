import { Place } from '@/common/types'

interface UserPostsListProps {
  placeList: Place
}

export const UserPostsList = ({ placeList }: UserPostsListProps) => {
  return (
    <div className="card w-96 bg-primary-content my-4 shadow-xl">
      <div className="flex items-center justify-around pt-6 px-4">
        <p className="card-title mr-2">Nombre del sitio:</p>
        <p className="text-lg font-light">{placeList.name}</p>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="text-lg font-extrabold">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-primary-light rounded-box w-52"
          >
            <li>
              <a>Editar</a>
            </li>
            <li>
              <a>Eliminar</a>
            </li>
          </ul>
        </div>
      </div>
      <figure className="pt-6">
        <img src={placeList.imgUrl} alt="place" className="rounded-sm" />
      </figure>
      <div className="card-body text-justify text-sm">
        <div className='flex items-center'>
          <p className="font-extrabold text-base">Localización: </p>
          <p className="text-base overflow-hidden line-clamp-3">{placeList.location}</p>
        </div>
        <div className='items-center'>
          <p className="font-extrabold text-base">Descripción: </p>
          <p className="text-base overflow-hidden line-clamp-3">{placeList.description}</p>
        </div>
      </div>
    </div>
  )
}
