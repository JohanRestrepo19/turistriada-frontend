import { ReactNode } from 'react'

interface FormCardProps {
  title?: string
  children: ReactNode
}

export const FormCard = ({ title, children }: FormCardProps) => {
  return (
    <div className="card w-96 bg-primary-light text-primary shadow-xl">
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </div>
  )
}
