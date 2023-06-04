import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Input } from '@/common/components'
import { EditProfile, editProfileResolver } from '../validations/editProfile'
import { updateUserInfo } from '@/services/firebase'
import { useAppDispatch } from '@/common/hooks'
import type { User } from '@/common/types'
import { setAuthUser } from '@/store/slices/authSlice'

interface EditProfileFormProps {
  user: User
}

export const EditProfileForm = ({ user }: EditProfileFormProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
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
      documentNumber: user.documentNumber as string,
      email: user.email
    }
  })

  const handleSubmitForm = async (data: EditProfile) => {
    const response = await updateUserInfo(user._id, { ...data })
    if (response.hasError) return toast.error(response.errorMsg)
    dispatch(setAuthUser(response.user as User))
    toast.success('Información actualizada exitosamente')
    navigate(`/users/${user._id}`)
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
          <Input title="Email" {...register('email')} disabled />

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
