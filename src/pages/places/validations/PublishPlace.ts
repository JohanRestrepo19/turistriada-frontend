import { mixed, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
// const FILE_SIZE = 1000000 * 5

export interface PublishPlace {
  city: string
  category: string
  placeName: string
  aboutExperience: string
  image: FileList
}

const publishPlaceSchema = object<PublishPlace>({
  city: string().required('Por favor, ingresa la ciudad.'),
  category: string().required('Por favor, ingresa una categoría.'),
  placeName: string().required('Por favor, ingresa el nombre del sitio.'),
  aboutExperience: string().required('Este campo es obligatorio.'),
  image: mixed().test(
    "required",
   "Por favor selecciona un archivo", 
  (files: any) => files?.length > 0) //HACK: Change any type to its repective type
})


export const publishPlaceResolver = yupResolver(publishPlaceSchema)
