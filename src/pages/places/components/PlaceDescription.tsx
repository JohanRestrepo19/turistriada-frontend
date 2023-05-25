import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faContactBook } from '@fortawesome/free-regular-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Place } from '@/common/types'

interface PlaceFieldProps {
  name: string
  content: string
  icon: IconProp
}
const PlaceField = ({ content, name, icon }: PlaceFieldProps) => {
  return (
    <div className="grid grid-cols-12">
      {/* Icon follow by field description */}

      <div className="col-span-4">
        <span className="text-primary">
          <FontAwesomeIcon icon={icon} size="xl" />
        </span>
        <h3 className="text-primary-text font-semibold inline ml-4">{name}</h3>
      </div>
      <span className="col-span-8 text-center border-b border-secondary-text">
        {content}
      </span>
    </div>
  )
}

interface PlaceDescriptionProps {
  place: Place
}

export const PlaceDescription = ({ place }: PlaceDescriptionProps) => {
  return (
    <div className="card bg-white shadow-xl h-[300px]">
      <div className="card-body gap-y-4 overflow-y-scroll">
        {/*Place field*/}
        <PlaceField name="Nombre" content={place.name} icon={faComments} />
        <PlaceField
          name="Descripción"
          content={place.description}
          icon={faContactBook}
        />
        <PlaceField
          name="Descripción"
          content={place.description}
          icon={faContactBook}
        />
        <PlaceField
          name="Descripción"
          content={place.description}
          icon={faContactBook}
        />
        <PlaceField name="Dirección" content={place.location} icon={faGlobe} />
      </div>
    </div>
  )
}
