import { InferType, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const editProfileSchema = object({
  email: string(),
  document: string()
    .min(10, 'Tu documento debe tener mínimo 10 digitos')
    .required('Documento no puede quedar vacío.'),
  username: string().required('Por favor ingresa tu username'),
  firstName: string().required('Por favor ingresa tu nombre'),
  lastName: string().required('Por favor ingresa tu apellido')
})

export type EditProfile = InferType<typeof editProfileSchema>

export const editProfileResolver = yupResolver(editProfileSchema)
