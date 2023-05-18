import { useAppSelector } from '@/common/hooks'
import { PlaceCard } from '@/common/components'

export const PlacesList = () => {
  const { filteredPlaces: places } = useAppSelector(
    state => state.recommendations
  )
  return (
    <div className="flex flex-wrap justify-center items-start gap-x-4 gap-y-8 py-4">
      {places.map(place => (
        <PlaceCard place={place} key={place._id} />
      ))}
    </div>
  )
}
