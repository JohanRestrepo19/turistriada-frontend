import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputHTMLAttributes, useMemo } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconProp
  title: string
}

export const Input = ({ icon, title, ...props }: InputProps) => {
  const inputStyles = useMemo(() => {
    const hasIcon = icon ? true : false
    return `input input-bordered w-full max-w-xs mt-1 bh-white/75 shadow-inner ${hasIcon ? 'pl-14' : ''
      }`
  }, [icon])

  return (
    <div className="text-form-text">
      <label className="ml-1 capitalize">{title}</label>
      <div className="relative">
        {icon && (
          <span className="absolute top-3 left-3">
            <FontAwesomeIcon icon={icon} size="2x" />
          </span>
        )}
        <input {...props} className={inputStyles} />
      </div>
    </div>
  )
}
