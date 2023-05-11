import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}
export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="container mx-auto min-h-screen p-4 bg-[#C8E6C9]/20 flex flex-col gap-4">
      <div className="flex-grow">{children}</div>
    </div>
  )
}
