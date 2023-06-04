import { Button, Input } from '@/common/components'
import { Customer } from '@/common/types'
import { useForm } from 'react-hook-form'
import {
  EditProfileCustomer,
  EditProfileCustomerResolver
} from '../validations/editProfileCustomer'
import { updateCustomerInfo } from '@/services/firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/common/hooks'
import { setAuthUser } from '@/store/slices/authSlice'

interface EditProfileCustomerFormProps {
  customer: Customer
}

export const EditProfileCustomerForm = ({
  customer
}: EditProfileCustomerFormProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<EditProfileCustomer>({
    resolver: EditProfileCustomerResolver,
    mode: 'all',
    defaultValues: {
      username: customer.username,
      companyName: customer.companyName,
      commercialRegistration: customer.commercialRegistration,
      location: customer.location as string,
      email: customer.email,
      nit: customer.nit
    }
  })

  const handleSubmitForm = async (data: EditProfileCustomer) => {
    console.log('Data para editar: ', data)
    const response = await updateCustomerInfo(customer._id, { ...data })
    if (response.hasError) return toast.error(response.errorMsg)
    dispatch(setAuthUser(response.customer as Customer))
    toast.success('Información actualizada exitosamente')
    navigate(`/customers/${customer._id}`)
  }

  return (
    <>
      <div className="max-w-2xl py-4 px-8 bg-primary-light shadow-lg rounded-lg my-24">
        <div className="flex justify-center md:justify-center -mt-20">
          <img
            className="w-32 h-32 object-cover rounded-full border-4 border-primary"
            src={
              customer.profileImgUrl
                ? customer.profileImgUrl
                : 'https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png'
            }
          />
        </div>

        <p className="py-2 text-2xl font-bold text-primary text-center">
          Editar perfil
        </p>
        <div className="h-0.5 w-3/3 bg-primary mb-2"></div>

        <form
          className="grid grid-cols-2 gap-5"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <Input title="Email" disabled {...register('email')} />

          <Input title="NIT" {...register('nit')} error={errors.nit?.message} />

          <Input
            title="Nombre compañía"
            {...register('companyName')}
            error={errors.companyName?.message}
          />

          <Input
            title="Dirección"
            {...register('location')}
            error={errors.location?.message}
          />

          <Input
            title="Nombre usuario"
            {...register('username')}
            error={errors.username?.message}
          />

          <Input
            title="Registro mercantil"
            {...register('commercialRegistration')}
            error={errors.commercialRegistration?.message}
          />

          <Button type="submit" styleType="primary" className="col-span-2">
            EDITAR
          </Button>
        </form>
      </div>
    </>
  )
}
