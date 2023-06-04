import { Button, Input } from '@/common/components'
import { User } from '@/common/types'
import { EditProfile, editProfileResolver } from '../validations/editProfile'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface EditProfileFormProps {
  user: User
}

export const EditProfileForm = ({ user }: EditProfileFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<EditProfile>({
    resolver: editProfileResolver
  })

  const handleSubmitForm = (data: EditProfile) => {
    console.log('Data para editar: ', data)
  }

  //FIXME: El estado del formulario lo manera el hook useForm, no hay necesidad de que lo maneje con el handleInputChange
  const [userData, setUserData] = useState({
    username: user.username,
    document: user.documentNumber,
    name: user.firstName,
    lastname: user.lastName,
  })

  // FIXME: Encontrar tipo para el evento...
  const handleInputChange = e => {
    const { name, value } = e.target
    console.log(e.target.value)
    setUserData(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

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
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <Input title="Email" value={user.email} disabled />

          <Input
            type="number"
            title="Numero documento"
            disabled
            value={user.documentNumber}
          />

          <Input
            title="Primer nombre"
            value={user.firstName}
            {...register('firstName')}
            error={errors.firstName?.message}
            onChange={handleInputChange}
          />

          <Input
            title="Apellido"
            value={user.lastName}
            {...register('lastName')}
            error={errors.lastName?.message}
            onChange={handleInputChange}
          />

          <Input
            title="Nombre usuario"
            value={userData.username}
            {...register('username')}
            error={errors.username?.message}
            onChange={handleInputChange}
          />
          <Input type="date" title="Fecha de nacimiento" />

          <Input
            type="password"
            title="Contraseña"
            placeholder="********"
            {...register('password')}
            error={errors.password?.message}
          />

          <Input
            type="password"
            title="Confirmar contraseña"
            placeholder="********"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <Button type="submit" styleType="primary" className="w-full">
            EDITAR
          </Button>
          <Button type="submit" styleType="secondary" className="w-full">
            ELIMINAR
          </Button>
        </form>
      </div>
    </>
  )
}
