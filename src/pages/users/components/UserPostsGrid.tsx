import { Place } from '@/common/types'

interface UserPostsGridProps {
  placeList: Place
}

export const UserPostsGrid = ({ placeList }: UserPostsGridProps) => {
  return (
    <div className="flex flex-row items-start justify-center mt-4">
      <div className="card rounded-lg w-36 bg-white text-secondary-text shadow-xl border-2 border-primary-light hover:scale-105 hover:border-accent ease-in-out duration-300">
        <h2 className="font-normal text-center mx-auto justify-center py-2">
          {placeList.name}
        </h2>
        <img src={placeList.imgUrl} className="w-full h-auto" alt="place" />
      </div>
    </div>
  )
}
