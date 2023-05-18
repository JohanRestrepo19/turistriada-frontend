import { Button, FormCard, TuristriadaHeading } from '@/common/components'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate()
  const handleUserButton = (route: string) => {
    navigate(route)
  }

  return (
    <FormCard>
    <TuristriadaHeading />
      <Button
        styleType="primary"
        className='my-4'
        onClick={() => handleUserButton('user')}
        >
        ¿Eres usuario?
      </Button>
      <Button
        styleType="primary"
        className='mb-4'
        onClick={() => handleUserButton('customer')}
      >
        ¿Eres empresa?
      </Button>
    </FormCard>
  )
}
