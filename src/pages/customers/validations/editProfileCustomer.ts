import { InferType, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const editProfileCustomerSchema = object({
  username: string(),
  email: string(),
  nit: string().required('El campo "NIT" no puede estar vacio.'),
  commercialRegistration: string().required(
    'El campo "Registro mercantil" no puede estar vacío.'
  ),
  companyName: string().required('Por favor ingresa el nombre de tu compañía.'),
  location: string().required('Por favor ingresa la direccion de tu compañía.')
})

export type EditProfileCustomer = InferType<typeof editProfileCustomerSchema>
export const EditProfileCustomerResolver = yupResolver(
  editProfileCustomerSchema
)
