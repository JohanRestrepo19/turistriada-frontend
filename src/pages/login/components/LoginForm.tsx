import { Link } from 'react-router-dom'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Input, Button, TuristriadaHeading } from '@/common/components'

export const LoginForm = () => {
  return (
    <>
      <TuristriadaHeading />
      <form className="flex flex-col  gap-y-8">
        <Input title="username" icon={faUser} />
        <Input title="password" icon={faLock} />
        <Button styleType="primary">INGRESAR</Button>
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
