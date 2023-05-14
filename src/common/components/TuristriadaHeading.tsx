import turistriadaLogo from '@/assets/brand/turistriada.png'

interface TuristriadaHeadingProps {
  width?: number
  height?: number
}

export const TuristriadaHeading = ({
  width = 165,
  height = 140
}: TuristriadaHeadingProps) => {
  return (
    <div className="flex flex-wrap justify-around items-center mb-6 ">
      <img
        src={turistriadaLogo}
        alt="logo de Turistriada"
        width={width}
        height={height}
      />
      <h1 className="text-2xl font-semibold">Turistriada</h1>
    </div>
  )
}
