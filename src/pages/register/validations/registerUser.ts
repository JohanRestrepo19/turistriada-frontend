import { InferType, object, ref, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { DocumentType } from '@/common/types'

const registerUserSchema = object({
  documentType: string()
    .oneOf<DocumentType>(
      ['CC', 'CE', 'PA', 'NIT'],
      'El tipo de documento debe ser: ${values}'
    )
    .required(),
  documentNumber: string()
    .min(10, 'Tu documento debe tener mínimo 10 digitos')
    .required('Necesita un documento!'),
  firstName: string().required('Por favor ingresa tu nombre'),
  lastName: string().required('Por favor ingresa tu apellido'),
  email: string().email().required('Por favor ingresa tu correo'),
  username: string().required('Por favor ingresa tu nombre de usuario'),
  password: string()
    .min(8, 'Tu contraseña debe tener mínimo 8 digitos')
    .required('La contraseña es requerida'),
  confirmPassword: string().oneOf(
    [ref('password')],
    'Las constraseñas no coinciden'
  )
})

export type RegisterUser = InferType<typeof registerUserSchema>

export const registerUserResolver = yupResolver(registerUserSchema)
