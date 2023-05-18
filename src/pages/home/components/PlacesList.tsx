import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { PlaceCard } from '@/common/components'
import {
  fetchRecommendedPlaces,
  selectFilteredPlaces
} from '@/store/slices/recommendationSlice'

export const PlacesList = () => {
  const places = useAppSelector(selectFilteredPlaces)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRecommendedPlaces())
  }, [dispatch])

  if (places.length === 0) return <h1>Aun no hay recomendaciones</h1>

  return (
    <div className="flex flex-wrap justify-center items-start gap-x-4 gap-y-8 py-4">
      {places.map(place => (
        <PlaceCard place={place} key={place._id} />
      ))}
    </div>
  )
}
