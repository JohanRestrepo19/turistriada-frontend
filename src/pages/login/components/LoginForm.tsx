import { Link } from 'react-router-dom'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Input, Button, TuristriadaHeading } from '@/common/components'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { login, selectLoadingAuth } from '@/store/slices/authSlice'

interface LoginFormFields {
  email: string
  password: string
}

export const LoginForm = () => {
  const dispatch = useAppDispatch()
  const loginStatus = useAppSelector(selectLoadingAuth)
  const { register, handleSubmit } = useForm<LoginFormFields>()
  const handleSubmitLogin = (data: LoginFormFields) => {
    dispatch(login(data))
  }

  return (
    <>
      <TuristriadaHeading />
      <form
        className="flex flex-col  gap-y-8"
        onSubmit={handleSubmit(handleSubmitLogin)}
      >
        <Input title="email" icon={faUser} {...register('email')} />
        <Input
          title="password"
          type="password"
          icon={faLock}
          {...register('password')}
        />
        <Button styleType="primary" disabled={loginStatus === 'pending'}>
          INGRESAR
        </Button>
        <div>
          <b className="text-center text-black block">¿No tienes una cuenta?</b>
          <Link to={'/register'} className="text-center text-primary block">
            Registrate aquí
          </Link>
        </div>
      </form>
    </>
  )
}
