import { faImage, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { UserPostsGrid } from './UserPostsGrid'
import { UserPostsList } from './UserPostsList'
import { Place } from '@/common/types'
import { Loader } from '@/common/components'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'
import { getPlacesByUserId } from '@/services/firebase'
import { toast } from 'react-toastify'

export const LastestPostsCard = () => {
  const authUser = useAppSelector(selectAuthUser)

  const [activeTab, setActiveTab] = useState(1)
  const handleTab = (tabNumber: number) => {
    setActiveTab(tabNumber)
  }

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [places, setPlaces] = useState<Place[]>([]) // Estado para almacenar el arreglo de places

  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await getPlacesByUserId(authUser?._id as string)
      if (response.hasError) return toast.error(response.errorMsg)
      setPlaces(response.places as Place[])
      setIsLoading(false)
    }

    fetchPlaces()
  }, [authUser?._id])

  if (isLoading) return <Loader />

  return (
    <>
      <div className="tabs mt-4 items-center justify-around">
        <button
          onClick={() => handleTab(1)}
          className={`tab tab-lg tab-bordered ${
            activeTab === 1
              ? 'text-primary-focus border-primary-focus'
              : 'text-primary-light border-primary-light'
          }`}
        >
          <FontAwesomeIcon icon={faTableCellsLarge} />
        </button>
        <button
          onClick={() => handleTab(2)}
          className={`tab tab-lg tab-bordered ${
            activeTab === 2
              ? 'text-primary-focus border-primary-focus'
              : 'text-primary-light border-primary-light'
          }`}
        >
          <FontAwesomeIcon icon={faImage} />
        </button>
      </div>
      <h2 className="text-2xl my-4 text-primary font-bold text-center">
        Tus últimas publicaciones
      </h2>
      <div className="max-h-[700px] overflow-y-auto">
        <div className="text-center items-center">
          <div className="grid grid-cols-2 gap-4">
            {activeTab === 1 &&
              places.map(place => (
                <UserPostsGrid placeList={place} key={place._id} />
              ))}
          </div>
        </div>
      </div>

      <div className="max-h-[700px] overflow-y-auto">
        {activeTab === 2 &&
          places.map(place => (
            <UserPostsList placeList={place} key={place._id} />
          ))}
      </div>
    </>
  )
}
