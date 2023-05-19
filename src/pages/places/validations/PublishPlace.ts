import { InferType, mixed, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const publishPlaceSchema = object({
  city: string().required('Por favor, ingresa la ciudad.'),
  category: string().required('Por favor, ingresa una categoría.'),
  placeName: string().required('Por favor, ingresa el nombre del sitio.'),
  aboutExperience: string().required('Este campo es obligatorio.'),
  // TODO: Validar bien la imagen
  image: mixed().test('required', 'You need to provide a file', file => {
    if (file) return true
    return false
  })
})

export type PublishPlace = InferType<typeof publishPlaceSchema>

export const publishPlaceResolver = yupResolver(publishPlaceSchema)
