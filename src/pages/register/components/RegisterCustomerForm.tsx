import { Link } from 'react-router-dom'
import { Input, Button, TuristriadaHeading } from '@/common/components'
import { useForm } from 'react-hook-form'
import {
  RegisterCustomer,
  registerCustomerResolver
} from '../validations/registerCustomer'
/* import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { selectAuthLoading } from '@/store/slices/authSlice'
import { registerUser } from '@/services/firebase'
import { toast } from 'react-toastify' */

export const RegisterCustomerForm = () => {
  /* const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const registerStatus = useAppSelector(selectAuthLoading) */

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterCustomer>({
    resolver: registerCustomerResolver
  })
  const handleSubmitForm = (data: RegisterCustomer) => {
    /* dispatch(registerUser({ ...data }))
      .unwrap()
      .then(() => {
        navigate('/login')
      })
      .catch(rejectedValue => {
        toast.error(rejectedValue)
      }) */
    console.log(data)
  }
  return (
    <>
      <div className="flex flex-wrap justify-between items-center gap-x-4 ">
        <TuristriadaHeading width={120} height={120} />
        <b className="mt-5 font-semibold hidden sm:inline">
          Registro de empresa
        </b>
      </div>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {/* Nit */}
        <Input
          type="number"
          title="NIT *"
          {...register('nit')}
          error={errors.nit?.message}
        />
        {/* Registro mercantil */}
        <Input
          title="Registro mercantil"
          {...register('commercialRegistration')}
          error={errors.commercialRegistration?.message}
        />
        {/* Nombre de compañía */}
        <Input
          className="col-span-2"
          title="Nombre de la compañía"
          {...register('companyName')}
          error={errors.companyName?.message}
        />
        {/* Direccion */}
        <Input
          title="Dirección"
          {...register('address')}
          error={errors.address?.message}
        />
        {/* Numero de telefono */}
        <Input
          type="number"
          title="Número de teléfono"
          {...register('phoneNumber')}
          error={errors.phoneNumber?.message}
        />
        {/* Correo electronico */}
        <Input
          title="Email"
          {...register('email')}
          error={errors.email?.message}
        />
        {/* Nombre de usuario */}
        <Input
          title="Nombre usuario"
          {...register('username')}
          error={errors.username?.message}
        />
        {/* Contraseña */}
        <Input
          type="password"
          title="Contraseña"
          {...register('password')}
          error={errors.password?.message}
        />
        {/* Confirmar contraseña */}
        <Input
          type="password"
          title="Confirmar contraseña"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
        <div className="sm:col-span-2 w-full flex flex-col items-center gap-y-4">
          <Button
            type="submit"
            styleType="primary"
            className="col-span-2 w-1/2"
            // disabled={registerStatus === 'pending'}
          >
            INGRESAR
          </Button>

          <div>
            <b className="text-center text-black block">¿Ya tienes cuenta?</b>
            <Link to={'/login'} className="text-center text-primary block">
              Ingresa aquí
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}
