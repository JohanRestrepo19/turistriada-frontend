import { Link } from 'react-router-dom'
import { Input, Button, TuristriadaHeading } from '@/common/components'
import { useForm } from 'react-hook-form'
import {
  RegisterFormValues,
  registerResolver
} from '../validations/registerValidations'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormValues>({
    resolver: registerResolver
  })
  const handleSubmitForm = (data: RegisterFormValues) => {
    console.log('FieldValues: ', data)
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
        <Input title="Tipo documento" />
        <Input
          type="number"
          title="Numero documento"
          {...register('documentNumber')}
          error={errors.documentNumber?.message}
        />
        <Input
          title="Primer nombre"
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <Input
          title="Apellido"
          {...register('lastName')}
          error={errors.lastName?.message}
        />

        <Input
          title="Email"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          title="Nombre usuario"
          {...register('username')}
          error={errors.username?.message}
        />
        <Input
          type="password"
          title="Contraseña"
          {...register('password')}
          error={errors.password?.message}
        />
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
          >
            INGRESAR
          </Button>

          <div>
            <b className="text-center text-black block">¿Ya tienes cuenta?</b>
            <Link to={'/auth/'} className="text-center text-primary block">
              Ingresa aquí
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}
