import { Button, Input } from '@/common/components'
import { useForm } from 'react-hook-form'
import { PublishPlace, publishPlaceResolver } from '../validations/PublishPlace'

export const PublishPlaceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PublishPlace>({
    resolver: publishPlaceResolver
  })
  const handleSubmitForm = (data: PublishPlace) => {
    console.log('Place Object: ', data)
  }

  return (
    <>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {/* Ciudad */}
        <Input
          title="Ciudad"
          {...register('city')}
          error={errors.city?.message}
        />
        {/* Categoría */}
        <Input
          title="Categoría"
          {...register('category')}
          error={errors.category?.message}
        />
        {/* Nombre del sitio */}
        <Input
          title="Nombre del sitio que visitaste"
          className="col-span-2"
          {...register('placeName')}
          error={errors.placeName?.message}
        />
        {/* Mas sobre el sitio */}
        <Input
          title="Cuentanos un poco más sobre tu experiencia"
          type="text"
          className="col-span-2 w-full"
          {...register('aboutExperience')}
          error={errors.aboutExperience?.message}
        />
        {/* Fotos */}
        {/* TODO: Cambiar estilos para la subida de archivos */}
        <Input
          type="file"
          className="col-span-2 "
          title="Subir imagenes"
          {...register('image')}
          error={errors.image?.message}
        />
        <div className="sm:col-span-2 w-full flex flex-col items-center gap-y-4">
          <Button
            type="submit"
            styleType="primary"
            className="col-span-2 w-1/2"
          >
            PUBLICAR
          </Button>
        </div>
      </form>
    </>
  )
}
