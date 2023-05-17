import classNames from 'classnames'
import { BaseHTMLAttributes } from 'react'

interface AvartarProps extends BaseHTMLAttributes<HTMLDivElement> {
  imgSrc?: string
  height?: number
  width?: number
}

export const Avatar = ({
  className,
  imgSrc,
  height = 75,
  width = 75
}: AvartarProps) => {
  const avatarStyles = classNames({
    avatar: true,
    [`${className}`]: className,
    placeholder: !imgSrc
  })

  if (imgSrc)
    return (
      <div className={avatarStyles}>
        <div className="rounded-full">
          <img src={imgSrc} height={height} width={width} />
        </div>
      </div>
    )

  return (
    <div className={avatarStyles}>
      <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
        <span>DA</span>
      </div>
    </div>
  )
}
