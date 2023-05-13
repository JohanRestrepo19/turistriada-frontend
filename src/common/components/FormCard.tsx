import { ReactNode } from 'react'

interface FormCardProps {
  title?: string
  children: ReactNode
}

export const FormCard = ({ title, children }: FormCardProps) => {
  return (
    <div className="card bg-primary-light text-primary shadow-xl px-12 py-4">
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </div>
  )
}
