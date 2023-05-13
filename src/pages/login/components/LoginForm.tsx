import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import turistriadaLogo from '@/assets/brand/turistriada.png'
import { Input } from '@/common/components/Input'
import { Button } from '@/common/components/Button'

export const LoginForm = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around items-center mb-6">
        <img
          src={turistriadaLogo}
          alt="logo de Turistriada"
          width={165}
          height={140}
        />
        <h1 className="text-2xl font-semibold">Turistriada</h1>
      </div>
      <form className="flex flex-col  gap-y-8">
        <Input title="username" icon={faUser} />
        <Input title="password" icon={faLock} />
        <Button styleType="primary">INGRESAR</Button>
        <div>
          <b className="text-center text-black block">¿No tienes una cuenta?</b>
          <b className="text-center text-primary block">Registrate aquí</b>
        </div>
      </form>
    </>
  )
}
