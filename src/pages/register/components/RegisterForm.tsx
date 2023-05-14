import { Link } from 'react-router-dom'
import { TuristriadaHeading } from '@/common/components'
import { Input, Button } from '@/common/components'

export const RegisterForm = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center gap-x-4 ">
        <TuristriadaHeading width={120} height={1200} />
        <b className="-mt-5 font-semibold hidden sm:inline">
          Registro de usuario
        </b>
      </div>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Input title="Tipo documento" />
        <Input title="Numero documento" />
        <Input title="Primer nombre" />
        <Input title="Apellido" />
        <Input title="Email" />
        <Input title="Nombre usuario" />
        <Input title="Contraseña" />
        <Input title="Confirmar contraseña" />
        <div className="sm:col-span-2 w-full flex flex-col items-center gap-y-4">
          <Button styleType="primary" className="col-span-2 w-1/2">
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
