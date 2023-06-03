import { toast } from 'react-toastify'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { Button, FileInput, Input, TextArea } from '@/common/components'
import { Select } from '@/common/components/forms/Select'
import { createPlace } from '@/services/firebase'
import { PublishPlace, publishPlaceResolver } from '../validations/PublishPlace'
import type { Category, City } from '@/common/types'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'

const MAX_ACTIVITIES_FIELDS = 5

const cities: City[] = ['pereira', 'dosquebradas', 'santa rosa']
const categories: Category[] = [
  'lugares de interes',
  'comida',
  'hospedaje',
  'instituciones culturales'
]

export const PublishPlaceForm = () => {
  const authUser = useAppSelector(selectAuthUser)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset
  } = useForm<PublishPlace>({
    resolver: publishPlaceResolver
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'activities'
  })

  const handleSubmitForm = async (data: PublishPlace) => {
    const response = await createPlace({
      ...data,
      createdByUserId: authUser?._id as string
    })
    if (response.hasError) return toast.error(response.errorMsg)
    toast.success('Lugar creado correctamente')
    reset()
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
          className="sm:col-span-2"
          {...register('name')}
          error={errors.name?.message}
        />

        {/* Direccion */}
        <Input
          title="Dirección"
          className="sm:col-span-2"
          {...register('location')}
          error={errors.location?.message}
        />

        {/* Mas sobre el sitio */}
        <TextArea
          title="Cuentanos mas sobre tu experiencia"
          className="sm:col-span-2 w-full"
          {...register('description')}
          error={errors.description?.message}
        />

        {/*Actividades*/}
        <ul className="sm:col-span-2">
          {fields.map((item, index) => (
            <li key={item.id} className="grid grid-cols-12 gap-2">
              <Input
                title={`Servicio/Producto #${index + 1}`}
                {...register(`activities.${index}.name`)}
                className="col-span-5"
              />
              <Controller
                render={({ field }) => (
                  <Input
                    type="number"
                    title="Precio"
                    className="col-span-5"
                    {...field}
                  />
                )}
                name={`activities.${index}.price`}
                control={control}
              />
              <Button
                className="col-span-2 self-end"
                onClick={() => remove(index)}
              >
                Eliminar
              </Button>
            </li>
          ))}
        </ul>

        {/*Boton para añadir actividades*/}
        <Button
          styleType="secondary"
          className="sm:col-span-2"
          type="button"
          disabled={isSubmitting}
          onClick={() => {
            if (fields.length < MAX_ACTIVITIES_FIELDS)
              append({ name: '', price: 0 })
          }}
        >
          Añadir actividad
        </Button>

        {/* Fotos */}
        <FileInput
          title="Subir imagenes"
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
