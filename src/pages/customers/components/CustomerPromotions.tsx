import { Place } from '@/common/types'
import { useEffect, useState } from 'react'

export const CustomerPromotions = () => {
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
      <h2 className="text-xl my-4 text-primary font-bold text-center">
        Promociones y descuentos activos
      </h2>
      <div className="h-1 w-3/3 bg-primary"></div>
      <div className="max-h-[700px] overflow-y-auto">
        {places.map(place => (
          <div className="card w-96 bg-primary-content my-4 shadow-xl mr-6">
            <div className="flex items-center justify-around pt-6 px-4">
              <p className="card-title mr-2 text-lg font-bold">{place.name}</p>
            </div>
            <figure className="pt-6">
              <img
                src={place.imgUrl}
                alt="place"
                className="rounded-sm w-full h-60"
              />
            </figure>
            <div className="card-body text-justify text-sm">
              <div className="items-center">
                <p className="font-extrabold text-base">Descripción: </p>
                <p className="text-base overflow-hidden line-clamp-3">
                  {place.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
