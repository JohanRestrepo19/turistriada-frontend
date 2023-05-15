interface AvartarProps {
  imgSrc?: string
  height?: number
  width?: number
}

export const Avatar = ({ imgSrc, height = 75, width = 75 }: AvartarProps) => {
  if (imgSrc)
    return (
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={imgSrc} />
        </div>
      </div>
    )

  return (
    <div className="avatar placeholder">
      <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
        <span>MX</span>
      </div>
    </div>
  )
}
