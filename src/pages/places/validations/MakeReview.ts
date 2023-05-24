import { yupResolver } from '@hookform/resolvers/yup'
import { InferType, object, string } from 'yup'

const makeReviewSchema = object({
  comment: string()
    .min(20, 'Tu comentario debe tener al menos 20 caracteres')
    .required('Por favor deja tu comentario')
})

export type MakeReview = InferType<typeof makeReviewSchema>
export const makeReviewResolver = yupResolver(makeReviewSchema)
