import { useAppSelector } from '@/common/hooks'
import { PlaceImageSlider } from './components/PlaceImageSlider'
import { selectPlace } from '@/store/slices/placesSlice'
import { PlaceDescription } from './components/PlaceDescription'
import { MakePlaceReview } from './components/MakePlaceReview'

export const PlaceDetails = () => {
  const place = useAppSelector(selectPlace)

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4 py-8 w-10/12">
      {/*TODO:*/}
      {/* 1. Navbar */}
      {/* 2. Images slider */}
      <PlaceImageSlider imgSrc={place?.imgUrl || ''} />
      {/* 3. Description panel */}
      <PlaceDescription />
      {/* 4. Make a Review */}
      <MakePlaceReview />

      {/* 5. Show reviews. */}
    </div>
  )
}
