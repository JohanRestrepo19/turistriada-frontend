import { faImage, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { UserPostsGrid } from './UserPostsGrid'
import { UserPostsList } from './UserPostsList'
import { Place } from '@/common/types'

export const LastestPostsCard = () => {
  const [activeTab, setActiveTab] = useState(1)
  const handleTab = (tabNumber: number) => {
    setActiveTab(tabNumber)
  }

  const [places, setPlaces] = useState<Place[]>([]) // Estado para almacenar el arreglo de places

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch('/src/common/data/places.json') // Ruta al archivo JSON
        const data = await response.json()
        setPlaces(data)
      } catch (error) {
        console.error('Error al obtener los places:', error)
      }
    }

    fetchPlaces()
  }, [])

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
      {activeTab === 1 &&
        places.map(place => (
          <UserPostsGrid placeList={place} key={place._id} />
        ))}

      {activeTab === 2 &&
        places.map(place => (
          <UserPostsList placeList={place} key={place._id} />
        ))}
    </>
  )
}
