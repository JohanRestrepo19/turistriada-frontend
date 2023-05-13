import { FormCard } from '@/common/components/FormCard'
import { AuthLayout } from '@/layouts/AuthLayout'
import { LoginForm } from './components/LoginForm'

export const LoginPage = () => {
  return (
    <AuthLayout>
      <FormCard>
        <LoginForm />
      </FormCard>
    </AuthLayout>
  )
}
