import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Button, Rating, TextArea } from '@/common/components'
import { MakeReview, makeReviewResolver } from '../validations/MakeReview'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export const MakePlaceReview = () => {
  const [rate, setRate] = useState<number>(5)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MakeReview>({
    resolver: makeReviewResolver
  })

  const handleSubmitReview = (data: MakeReview) => {
    console.log('Datos para enviar en el formulario: ', { ...data, rate })
  }

  const handleChageRate = (value: number) => {
    setRate(value)
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
            className="w-1/3 self-center"
          >
            Publicar
          </Button>
        </div>
      </div>
    </form>
  )
}
