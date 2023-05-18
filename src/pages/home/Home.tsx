import { CategoriesFilter } from './components/CategoriesFilter'
import { CitiesCarousel } from './components/CitiesCarousel'
import { PlacesList } from './components/PlacesList'

export const Home = () => {
  return (
    <div className="flex flex-col gap-y-12">
      <CitiesCarousel />
      <CategoriesFilter />
      <PlacesList />
    </div>
  )
}
