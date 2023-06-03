interface PlaceImageSliderProps {
  imgSrc: string
}

export const PlaceImageSlider = ({ imgSrc }: PlaceImageSliderProps) => {
  return (
    <div className="bg-transparent rounded-box shadow-xl bg-red-200">
      <img src={imgSrc} className="rounded-box object-cover w-full h-full" />
    </div>
  )
}
