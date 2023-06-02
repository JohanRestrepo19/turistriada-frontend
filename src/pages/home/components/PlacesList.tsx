import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { PlaceCard, Loader } from '@/common/components'
import {
  fetchLatestPlaces,
  selectFilteredPlaces,
  selectPlacesStatus
} from '@/store/slices/recommendationSlice'

export const PlacesList = () => {
  const places = useAppSelector(selectFilteredPlaces)
  const placesStatus = useAppSelector(selectPlacesStatus)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchLatestPlaces())
  }, [dispatch])

  if (placesStatus === 'pending') return <Loader />

  return (
    <div className="flex flex-wrap justify-center items-start gap-x-4 gap-y-8 py-4">
      {places.map(place => (
        <PlaceCard place={place} key={place._id} />
      ))}
    </div>
  )
}
