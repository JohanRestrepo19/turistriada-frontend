import { Link, useNavigate } from 'react-router-dom'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Input, Button, TuristriadaHeading } from '@/common/components'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { loginUser, selectAuthLoading } from '@/store/slices/authSlice'

interface LoginFormFields {
  email: string
  password: string
}

export const LoginForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const loginStatus = useAppSelector(selectAuthLoading)

  const { register, handleSubmit } = useForm<LoginFormFields>()

  const handleSubmitLogin = (data: LoginFormFields) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(authUser => {
        if (authUser?.role === 'user') navigate('/')
        if (authUser?.role === 'customer')
          navigate(`/customers/${authUser._id}`)
      })
      .catch(rejectedValue => {
        toast.error(rejectedValue)
      })
  }

  return (
    <>
      <TuristriadaHeading />
      <form
        className="flex flex-col gap-y-8"
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
