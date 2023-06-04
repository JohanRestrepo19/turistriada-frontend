import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Input, Button, TuristriadaHeading } from '@/common/components'
import { Select } from '@/common/components/forms/Select'
import { RegisterUser, registerUserResolver } from '../validations/registerUser'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { registerUser, selectAuthLoading } from '@/store/slices/authSlice'

export const RegisterUserForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const registerStatus = useAppSelector(selectAuthLoading)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterUser>({
    resolver: registerUserResolver
  })

  const handleSubmitForm = (data: RegisterUser) => {
    dispatch(registerUser({ ...data }))
      .unwrap()
      .then(() => {
        navigate('/login')
      })
      .catch(rejectedValue => {
        toast.error(rejectedValue)
      })
  }

  return (
    <>
      <div className="flex flex-wrap justify-between items-center gap-x-4 ">
        <TuristriadaHeading width={120} height={120} />
        <b className="-mt-5 font-semibold hidden sm:inline">
          Registro de usuario
        </b>
      </div>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {/* <Input title="Tipo documento" /> */}
        <Select
          title="Tipo documento *"
          {...register('documentType')}
          error={errors.documentType?.message}
        >
          <option value="CC">Cedula de ciudadanía</option>
          <option value="CE">Cedula de extranjería</option>
          <option value="PA">Pasaporte</option>
        </Select>

        <Input
          type="number"
          title="Numero documento *"
          {...register('documentNumber')}
          error={errors.documentNumber?.message}
        />

        <Input
          title="Nombre *"
          {...register('firstName')}
          error={errors.firstName?.message}
        />

        <Input
          title="Apellido *"
          {...register('lastName')}
          error={errors.lastName?.message}
        />

        <Input
          title="Correo electrónico *"
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          title="Nombre usuario *"
          {...register('username')}
          error={errors.username?.message}
        />

        <Input
          type="password"
          title="Contraseña *"
          {...register('password')}
          error={errors.password?.message}
        />

        <Input
          type="password"
          title="Confirmar contraseña *"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />

        <div className="sm:col-span-2 w-full flex flex-col items-center gap-y-4">
          <Button
            type="submit"
            styleType="primary"
            className="col-span-2 w-1/2"
            disabled={registerStatus === 'pending'}
          >
            Registrarse
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
