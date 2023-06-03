import { InferType, object, ref, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const registerCustomerSchema = object({
  nit: string()
    .min(8, 'El NIT debe tener minimo 8 digitos')
    .required('El campo "NIT" es obligatorio.'),
  commercialRegistration: string().required(
    'El campo "Registro mercantil" es obligatorio.'
  ),
  companyName: string().required('Por favor ingresa el nombre de tu compañía.'),
  location: string().required('Por favor ingresa la direccion de tu compañía.'),
  phone: string()
    .min(7, 'Tu telefono debe ser de al menos 7 digitos.')
    .required('Por favor ingresa tu numero de celular.'),
  email: string().email().required('Por favor ingresa tu correo'),
  username: string().required('Por favor ingresa tu username.'),
  password: string()
    .min(8, 'Tu contraseña debe tener al menos 8 digitos')
    .required('La contraseña es requerida'),
  confirmPassword: string().oneOf(
    [ref('password')],
    'Las constraseñas no coinciden'
  )
})

export type RegisterCustomer = InferType<typeof registerCustomerSchema>
export const registerCustomerResolver = yupResolver(registerCustomerSchema)
