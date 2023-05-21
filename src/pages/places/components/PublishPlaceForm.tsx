import { Button, FileInput, Input, TextArea } from '@/common/components'
import { useForm } from 'react-hook-form'
import { PublishPlace, publishPlaceResolver } from '../validations/PublishPlace'
import { Select } from '@/common/components/forms/Select'
import { Category, City } from '@/common/types'

const cities: City[] = ['pereira', 'dosquebradas', 'santa rosa']
const categories: Category[] = [
  'comida',
  'hospedaje',
  'instituciones culturales'
]

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
        <Select
          title="Ciudad"
          {...register('city')}
          error={errors.city?.message}
        >
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </Select>

        {/* Categoría */}
        <Select
          title="Categoría"
          {...register('category')}
          error={errors.category?.message}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Select>

        {/* Nombre del sitio */}
        <Input
          title="Nombre del sitio que visitaste"
          className="col-span-2"
          {...register('placeName')}
          error={errors.placeName?.message}
        />

        {/* Mas sobre el sitio */}
        <TextArea
          title="Cuentanos mas sobre tu experiencia"
          className="col-span-2 w-full"
          {...register('aboutExperience')}
          error={errors.aboutExperience?.message}
        />

        {/* Fotos */}
        <FileInput
          title="Subir imagenes"
          className="col-span-2"
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
