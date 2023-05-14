import { InferType, object, ref, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const registerFormSchema = object({
  documentNumber: string()
    .min(10, 'Tu documento debe tener 10 digitos')
    .required('Necesita un documento!'),
  firstName: string().required('Por favor ingresa tu nombre'),
  lastName: string().required('Por favor ingresa tu apellido'),
  email: string().email().required('Por favor ingresa tu correo'),
  username: string().required('Por favor ingresa tu username'),
  password: string()
    .min(8, 'Tu contraseña debe tener al menos 8 digitos')
    .required('La contraseña es requerida'),
  confirmPassword: string().oneOf(
    [ref('password')],
    'Las constraseñas no coinciden'
  )
})

export type RegisterFormValues = InferType<typeof registerFormSchema>

export const registerResolver = yupResolver(registerFormSchema)
