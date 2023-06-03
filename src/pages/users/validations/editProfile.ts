import { InferType, object, ref, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const editProfileSchema = object({
    username: string().required('Por favor ingresa tu username'),
  firstName: string().required('Por favor ingresa tu nombre'),
  lastName: string().required('Por favor ingresa tu apellido'),
  email: string().email().required('Por favor ingresa tu correo'),
  password: string()
    .min(8, 'Tu contraseña debe tener al menos 8 digitos')
    .required('La contraseña es requerida'),
  confirmPassword: string().oneOf(
    [ref('password')],
    'Las constraseñas no coinciden'
  )
})

export type EditProfile = InferType<typeof editProfileSchema>

export const editProfileResolver = yupResolver(editProfileSchema)