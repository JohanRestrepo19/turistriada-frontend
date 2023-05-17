import { Place } from '@/common/types'
import { CategoriesFilter } from './components/CategoriesFilter'
import { CitiesCarousel } from './components/CitiesCarousel'
import { PlacesList } from './components/PlacesList'

//TODO: Remove fake data.
import places from '@/common/data/places.json'

export const Home = () => {
  return (
    <div className="flex flex-col gap-y-12">
      <CitiesCarousel />
      <CategoriesFilter />
      <PlacesList places={places as Place[]} />
    </div>
  )
}
