import { BaseHTMLAttributes } from 'react'
import classNames from 'classnames'
import turistriadaLogo from '@/assets/brand/turistriada.png'

interface TuristriadaHeadingProps extends BaseHTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  textColor?: string
}

export const TuristriadaHeading = ({
  height = 140,
  textColor,
  width = 165,
  ...props
}: TuristriadaHeadingProps) => {
  const textStyle = classNames({
    'text-2xl font-semibold': true,
    [`${textColor}`]: textColor
  })

  return (
    <div
      className="flex flex-wrap justify-around items-center hover:cursor-pointer"
      {...props}
    >
      <img
        src={turistriadaLogo}
        alt="logo de Turistriada"
        width={width}
        height={height}
      />
      <h1 className={textStyle}>Turistriada</h1>
    </div>
  )
}
