interface PlaceImageSliderProps {
  imgSrc: string
}

export const PlaceImageSlider = ({ imgSrc }: PlaceImageSliderProps) => {
  return (
    <div className="carousel carousel-center p-4 h-[300px] space-x-2 bg-neutral rounded-box shadow-xl">
      <div className="carousel-item">
        <img src={imgSrc} className="rounded-box" />
      </div>
    </div>
  )
}
