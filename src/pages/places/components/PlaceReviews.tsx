import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getPlaceReviews, getUserById } from '@/services/firebase'
import type { Review as IReview, User } from '@/common/types'
import { Loader } from '@/common/components'

interface ReviewProps {
  review: IReview
}
const Review = ({ review }: ReviewProps) => {
  const [author, setAuthor] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    getUserById(review.authorId).then(response => {
      setIsLoading(false)
      if (response.hasError)
        return toast.error(`No se pudo cargar la información de usuario`)
      setAuthor(response.user as User)
    })
  }, [review])

  if (isLoading) return <Loader />

  return (
    <div className="grid grid-cols-12 gap-x-4 border-b border-secondary-text py-4">
      <div className="col-span-3 flex flex-col items-center justify-center">
        <h3 className="text-center text-accent font-semibold">
          {author?.username}
        </h3>
        <h3 className="font-semibold text-primary">{review.rating}/5</h3>
      </div>
      <p className="col-span-9 text-primary-text self-center">
        {review.comment}
      </p>
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
