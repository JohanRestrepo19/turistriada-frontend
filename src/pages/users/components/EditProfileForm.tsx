import { Button, Input } from '@/common/components'
import { User } from '@/common/types'

interface EditProfileFormProps {
  user: User
}

export default function EditProfileForm({ user }: EditProfileFormProps) {
  return (
    <>
      <div className="max-w-2xl py-4 px-8 bg-primary-light shadow-lg rounded-lg my-24">
        <div className="flex justify-center md:justify-center -mt-20">
          <img
            className="w-32 h-32 object-cover rounded-full border-4 border-primary"
            src={user.profileImgUrl}
          />
        </div>
        <p className="py-2 text-2xl font-bold text-primary text-center">
          Editar perfil
        </p>
        <div className="h-0.5 w-3/3 bg-primary mb-2"></div>
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          // onSubmit={handleSubmit(handleSubmitForm)}
        >
          <Input
            title="Nombre usuario"
            value={user.username}
            /* {...register('username')}
          error={errors.username?.message} */
          />

          <Input
            type="number"
            title="Numero documento"
            disabled
            value={user.documentNumber}
            /* {...register('documentNumber')}
          error={errors.documentNumber?.message} */
          />

          <Input
            title="Primer nombre"
            value={user.name}
            /* {...register('firstName')}
          error={errors.firstName?.message} */
          />

          <Input
            title="Apellido"
            value={user.lastName}
            /* {...register('lastName')}
          error={errors.lastName?.message} */
          />

          <Input
            title="Email"
            value={user.email}
            /* {...register('email')}
          error={errors.email?.message} */
          />

          <Input type="date" title="Fecha de nacimiento" />

          <Input
            type="password"
            title="Contraseña"
            placeholder="********"
            /* {...register('password')}
          error={errors.password?.message} */
          />

          <Input
            type="password"
            title="Confirmar contraseña"
            placeholder="********"
            /* {...register('confirmPassword')}
          error={errors.confirmPassword?.message} */
          />
        </form>

        <div className="flex justify-center text-center mt-8">
          <Button
            type="submit"
            styleType="primary"
            className="w-52 mr-4"
            // disabled={registerStatus === 'pending'}
          >
            EDITAR
          </Button>
          <Button
            type="submit"
            styleType="secondary"
            className="w-52"
            // disabled={registerStatus === 'pending'}
          >
            ELIMINAR
          </Button>
        </div>
      </div>
    </>
  )
}
