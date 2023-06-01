import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { currencyFormater } from '@/common/utils'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Activity } from '@/common/types'

interface PlaceFieldProps {
  name: string
  content: string | Activity[]
  icon: IconProp
}

export const PlaceField = ({ content, name, icon }: PlaceFieldProps) => {
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
        {typeof content === 'string'
          ? content
          : content &&
            content.map((activity, index) => (
              <li key={index} className="list-disc">
                {activity.name}: {currencyFormater.format(activity.price)}
              </li>
            ))}
      </span>
    </div>
  )
}
