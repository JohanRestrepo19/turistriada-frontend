import { PlaceCard } from '@/common/components'
import type { Place } from '@/common/types'

interface PlacesListProps {
  places: Place[]
}
export const PlacesList = ({ places }: PlacesListProps) => {
  return (
    <div className="flex flex-wrap justify-center items-start gap-x-4 gap-y-8 py-4">
      {places.map(place => (
        <PlaceCard place={place} key={place._id} />
      ))}
    </div>
  )
}
