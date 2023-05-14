import { InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconProp
  title: string
}

export const Input = ({ className, icon, title, ...props }: InputProps) => {
  const inputStyles = classNames(
    'input input-bordered w-full max-w-full mt-1 bh-white/75 shadow-inner',
    { 'pl-14': icon }
  )

  const containerStyles = classNames({
    [`${className}`]: className,
    'text-form-text': true
  })

  return (
    <div className={containerStyles}>
      <label className="ml-1 capitalize font-semibold">{title}</label>
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
