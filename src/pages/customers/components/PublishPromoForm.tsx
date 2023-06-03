import { Button, FileInput, Input, TextArea } from '@/common/components'
import { useForm } from 'react-hook-form'
import { PublishPromo, publishPromoResolver } from '../validations/PublishPromo'

export const PublishPromoForm = () => {

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<PublishPromo>({
    resolver: publishPromoResolver
  })

  const handleSubmitForm = async (data: PublishPromo) => {
    console.log('EStoy funcionando', data)
  }

  return (
    <>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-8" onSubmit={handleSubmit(handleSubmitForm)}>
        
        {/* */}
        <Input
          title="Título de la promoción *"
          className="sm:col-span-2"
          {...register('title')}
          error={errors.title?.message}
        />

        {/* */}
        <TextArea
          title="Descripción *"
          className="sm:col-span-2 w-full"
          {...register('description')}
          error={errors.description?.message}
        />

        {/*  */}
        <FileInput
          title="Subir imagenes *"
          className="sm:col-span-2"
          {...register('image')}
          error={errors.image?.message}
        />

        <div className="sm:col-span-2 w-full flex flex-col items-center gap-y-4">
          <Button
            type="submit"
            styleType="primary"
            className="sm:col-span-2 w-1/2"
            disabled={isSubmitting}
          >
            PUBLICAR
          </Button>
        </div>
      </form>
    </>
  )
}