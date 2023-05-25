import { Place } from '@/common/types'

interface UserPostsGridProps {
  placeList: Place
}

export const UserPostsGrid = ({ placeList }: UserPostsGridProps) => {
  return (
    <div className="card card-compact w-48 bg-primary-content shadow-xl mx-2">
      <div className="card-body text-center">
        <h2 className="text-base font-semibold">{placeList.name}</h2>
      </div>
      <figure>
        <img className="w-full h-36" src={placeList.imgUrl} alt="Places" />
      </figure>
    </div>
  )
}
