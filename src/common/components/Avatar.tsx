import classNames from 'classnames'
import { BaseHTMLAttributes } from 'react'
import avatar from '/public/avatar/avatar.png'

interface AvartarProps extends BaseHTMLAttributes<HTMLDivElement> {
  imgSrc?: string
  height?: number
  width?: number
}

export const Avatar = ({
  className,
  imgSrc,
  height = 12,
  width = 12
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
    
  console.log('llego a este punto')

  return (
    <div className='w-12 h-12'>
      <img src={avatar}/>
    </div>
  )
}
