import { CategoriesFilter } from './components/CategoriesFilter'
import { CitiesCarousel } from './components/CitiesCarousel'
import { PlacesList } from './components/PlacesList'

//TODO: Remove fake data.
import places from '@/common/data/places.json'

export const Home = () => {
  return (
    <div className="flex flex-col gap-y-9">
      <CitiesCarousel />
      <CategoriesFilter />
      <PlacesList places={places} />
    </div>
  )
}
