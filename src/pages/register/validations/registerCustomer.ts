import { InferType, object, ref, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const registerCustomerSchema = object({
  nit: string()
    .min(8, 'El NIT debe tener mínimo 8 dígitos.')
    .required('El campo "NIT" es obligatorio.'),
  commercialRegistration: string().required(
    'Por favor ingresa el registro mercantil de tu empresa.'
  ),
  companyName: string().required('Por favor ingresa el nombre de tu empresa.'),
  location: string().required('Por favor ingresa la direccion de tu empresa.'),
  phone: string()
    .min(7, 'Tu teléfono debe tener al menos 7 dígitos.')
    .required('Por favor ingresa tu numero de celular.'),
  email: string().email().required('Por favor ingresa tu correo electrónico.'),
  username: string().required('Por favor ingresa tu nombre de usuario.'),
  password: string()
    .min(8, 'Tu contraseña debe tener al menos 8 dígitos.')
    .required('La contraseña es requerida.'),
  confirmPassword: string().oneOf(
    [ref('password')],
    'Las constraseñas no coinciden.'
  )
})

export type RegisterCustomer = InferType<typeof registerCustomerSchema>
export const registerCustomerResolver = yupResolver(registerCustomerSchema)
