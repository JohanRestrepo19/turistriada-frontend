import { mixed, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const FILE_SIZE = 1000000 * 5
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

export interface PublishPromo {
  title: string
  description: string
  image: FileList
}

//Custom validation functions
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

const checkIfIsValidFileType = (files: unknown): boolean => {
  const validationFiles = files as FileList
  return SUPPORTED_FORMATS.includes(validationFiles.item(0)?.type as string)
}

const publishPromoSchema = object<PublishPromo>({
  title: string().required('Por favor, ingrese el título de la promoción.'),
  description: string().required(
    'Por favor, ingrese la descripción de la promoción.'
  ),
  image: mixed()
    .test('required', 'La imagen es requerida', checkIfThereIsFile)
    .test(
      'fileSize',
      'La imagen es muy grande (máximo 5MB)',
      checkIfFilesAreTooBig
    )
    .test(
      'filetype',
      'El formato del archivo no es soportado (solo es permitido jpg, jpeg, png)',
      checkIfIsValidFileType
    )
})

export const publishPromoResolver = yupResolver(publishPromoSchema)
