import { forwardRef, ReactNode, SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string
  error?: string
  children: ReactNode | ReactNode[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, error, title, ...props }, ref) => {
    return (
      <div className="w-full text-form-text">
        <label className="text-form-text capitalize font-semibold">
          {title}
        </label>
        <select
          className="select select-bordered w-full mt-1 capitalize"
          {...props}
          ref={ref}
        >
          <option disabled>Selecciona una opción</option>
          {children}
        </select>
        {error && (
          <div className="label">
            <span className="label-text-alt text-accent text-sm">{error}</span>
          </div>
        )}
      </div>
    )
  }
)
