import { FormCard } from '@/common/components'
import { PublishPromoForm } from './components/PublishPromoForm'


export const PublishPromo = () => {
  return (
    <>
      <div>
        <h3 className="text-primary my-9 text-4xl font-medium leading-tight text-center">
          ¡Publica tu promoción!
        </h3>
        <FormCard>
          <PublishPromoForm/>
        </FormCard>
      </div>
    </>
  )
}