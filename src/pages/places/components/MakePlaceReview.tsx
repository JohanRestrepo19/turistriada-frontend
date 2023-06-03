import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Button, Rating, TextArea } from '@/common/components'
import { MakeReview, makeReviewResolver } from '../validations/MakeReview'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { createPlaceReview } from '@/services/firebase'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'
import { toast } from 'react-toastify'

interface MakePlaceReviewProps {
  placeId: string
}

export const MakePlaceReview = ({ placeId }: MakePlaceReviewProps) => {
  const [rating, setRating] = useState<number>(5)
  const authUser = useAppSelector(selectAuthUser)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<MakeReview>({
    resolver: makeReviewResolver
  })

  const handleSubmitReview = async (data: MakeReview) => {
    const response = await createPlaceReview(placeId, {
      ...data,
      rating,
      authorId: authUser?._id as string,
      createdAt: new Date()
    })
    if (response.hasError) return toast.error(response.errorMsg)
    toast.success('Review creada exitosamente')
    reset()
  }

  const handleChageRate = (value: number) => {
    setRating(value)
  }

  return (
    <form
      className="card bg-white h-[300px] shadow-xl overflow-hidden"
      onSubmit={handleSubmit(handleSubmitReview)}
    >
      <div className="card-body">
        <div className="card-title text-primary mb-2 flex justify-between">
          <div>
            <span className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCircleCheck} size="2x" />
              Deja tu comentario!
            </span>
          </div>
          <Rating onChangeRate={handleChageRate} />
        </div>
        <div className="flex flex-col gap-2">
          <TextArea
            title="Cómo fue tu experiencia?"
            className="text-primary"
            {...register('comment')}
            error={errors.comment?.message}
          />
          <Button
            styleType="primary"
            rounded
            icon={faPaperPlane}
            disabled={isSubmitting}
            className="w-1/3 self-center"
          >
            Publicar
          </Button>
        </div>
      </div>
    </form>
  )
}
