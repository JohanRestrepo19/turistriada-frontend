import { mixed, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
const FILE_SIZE = 1000000 * 5

export interface PublishPlace {
  city: string
  category: string
  name: string
  location: string
  description: string
  image: FileList
}

//Custom validation functions.
const checkIfThereIsFile = (files: unknown): boolean => {
  const validationFiles = files as FileList
  return validationFiles.length > 0
}

const checkIfFilesAreTooBig = (files: unknown): boolean => {
  const validationFiles = files as FileList
  if (validationFiles.item(0)?.size) {
    return validationFiles[0].size <= FILE_SIZE
  }
  return false
}

const publishPlaceSchema = object<PublishPlace>({
  city: string().required('Por favor, ingresa la ciudad.'),
  category: string().required('Por favor, ingresa una categoría.'),
  name: string().required('Por favor, ingresa el nombre del sitio.'),
  location: string().required('Por favor, ingresa la dirección'),
  description: string().required('Este campo es obligatorio.'),
  image: mixed()
    .test('required', 'La imagen es requerida', checkIfThereIsFile)
    .test('fileSize', 'La imagen es muy grande', checkIfFilesAreTooBig)
})

export const publishPlaceResolver = yupResolver(publishPlaceSchema)
