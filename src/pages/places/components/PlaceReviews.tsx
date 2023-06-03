import { Avatar } from '@/common/components'
import { Review as IReview } from '@/common/types'
import { getPlaceReviews } from '@/services/firebase'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface ReviewProps {
  review: IReview
}
const Review = ({ review }: ReviewProps) => {
  return (
    <div className="grid grid-cols-12 gap-x-4 border-b border-secondary-text py-4">
      <div className="col-span-3 flex flex-col items-center justify-center">
        <Avatar />
        <h3 className="text-center">Nombre de la persona</h3>
      </div>
      <p className="col-span-9 text-primary-text">{review.comment}</p>
    </div>
  )
}

interface PlaceReviewsProps {
  placeId: string
}

export const PlaceReviews = ({ placeId }: PlaceReviewsProps) => {
  const [reviews, setReviews] = useState<IReview[]>([])
  useEffect(() => {
    getPlaceReviews(placeId).then(response => {
      if (response.hasError) return toast.error(response.errorMsg)
      setReviews(response.reviews as IReview[])
    })
  }, [placeId])
  return (
    <div className="card bg-white shadow-xl h-[300px]">
      <div className="card-body overflow-y-scroll">
        <h1 className="card-title self-center text-primary">Comentarios</h1>
        {reviews.length > 0 ? (
          reviews.map(review => <Review key={review._id} review={review} />)
        ) : (
          <div className="w-full text-center">Aun no ha comentarios... 🙁</div>
        )}
      </div>
    </div>
  )
}
