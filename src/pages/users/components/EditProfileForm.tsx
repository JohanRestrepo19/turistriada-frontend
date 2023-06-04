import { Button, Input } from '@/common/components'
import { User } from '@/common/types'
import { EditProfile, editProfileResolver } from '../validations/editProfile'
import { useForm } from 'react-hook-form'

interface EditProfileFormProps {
  user: User
}

export const EditProfileForm = ({ user }: EditProfileFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<EditProfile>({
    resolver: editProfileResolver,
    defaultValues: {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      document: user.documentNumber as string,
      email: user.email
    }
  })

  const handleSubmitForm = (data: EditProfile) => {
    console.log('Data para editar: ', data)
  }

  return (
    <>
      <div className="max-w-2xl py-4 px-8 bg-primary-light shadow-lg rounded-lg my-24">
        <div className="flex justify-center md:justify-center -mt-20">
          <img
            className="w-32 h-32 object-cover rounded-full border-4 border-primary"
            src={
              user.profileImgUrl
                ? user.profileImgUrl
                : 'https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png'
            }
          />
        </div>
        <p className="py-2 text-2xl font-bold text-primary text-center">
          Editar perfil
        </p>
        <div className="h-0.5 w-3/3 bg-primary mb-2"></div>
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <Input
            title="Email"
            {...register('email')}
            disabled
          />

          <Input
            type="number"
            title="Numero documento"
            {...register('document')}
            error={errors.document?.message}
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
            title="Nombre usuario"
            {...register('username')}
            className="col-span-2"
            error={errors.username?.message}
          />
          
          <Button type="submit" styleType="primary" className="col-span-2">
            EDITAR
          </Button>
        </form>
      </div>
    </>
  )
}
