import { FormCard } from '@/common/components'
import { AuthLayout } from '@/layouts/AuthLayout'
import { RegisterForm } from './components/RegisterForm'

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <FormCard>
        <RegisterForm />
      </FormCard>
    </AuthLayout>
  )
}
