import { FormCard } from '@/common/components'
import { PublishPlaceForm } from './components/PublishPlaceForm'

export const PublishPlace = () => {
  return (
    <>
      <div>
        <h3 className="text-primary my-9 text-4xl font-medium leading-tight text-center">
          ¡Publica tu experiencia!
        </h3>
        <FormCard>
          <PublishPlaceForm />
        </FormCard>
      </div>
    </>
  )
}
