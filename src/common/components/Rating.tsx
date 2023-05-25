import { useEffect, useState } from 'react'

interface RatingProps {
  onChangeRate: (value: number) => void
}

export const Rating = ({ onChangeRate }: RatingProps) => {
  const [rate, setRate] = useState<number>(5)

  const handleClickStar = (value: number) => {
    setRate(value)
  }

  useEffect(() => {
    onChangeRate(rate)
  }, [rate, onChangeRate])

  return (
    <div className="rating">
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
        onChange={() => handleClickStar(1)}
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
        onChange={() => handleClickStar(2)}
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
        onChange={() => handleClickStar(3)}
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
        onChange={() => handleClickStar(4)}
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
        onChange={() => handleClickStar(5)}
      />
    </div>
  )
}
