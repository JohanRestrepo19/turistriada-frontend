import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMemo, ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: IconProp
  iconSize?: SizeProp
  styleType: 'primary' | 'secondary'
  rounded?: boolean
}

export const Button = ({
  children,
  icon,
  iconSize,
  styleType,
  ...props
}: ButtonProps) => {
  //
  const buttonStyles = useMemo(() => {
    const buttonStyle = styleType === 'primary' ? 'btn-primary' : 'btn-accent'
    const disabled = props.disabled ? 'disabled' : ''
    return `btn ${buttonStyle} ${disabled}`
  }, [styleType, props.disabled])

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
