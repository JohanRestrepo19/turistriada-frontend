import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: IconProp
  iconSize?: SizeProp
  styleType: 'primary' | 'secondary'
  rounded?: boolean
}

export const Button = ({
  children,
  className,
  icon,
  iconSize,
  styleType,
  ...props
}: ButtonProps) => {
  const buttonStyles = classNames({
    [`${className}`]: className,
    btn: true,
    'btn-primary': styleType === 'primary',
    'btn-accent': styleType === 'secondary',
    disabled: props.disabled
  })

  return (
    <button className={buttonStyles} {...props}>
      {icon && (
        <span className="mr-2">
          <FontAwesomeIcon icon={icon} size={iconSize} />
        </span>
      )}
      {children}
    </button>
  )
}
