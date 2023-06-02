import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { currencyFormater } from '@/common/utils'
import type { Activity } from '@/common/types'

interface PlaceFieldProps {
  name: string
  content: string | Activity[]
  icon: IconProp
}

export const PlaceField = ({ content, name, icon }: PlaceFieldProps) => {
  return (
    <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-12">
      {/* Icon follow by field description */}

      <div className="sm:col-span-5">
        <span className="text-primary mr-2">
          <FontAwesomeIcon icon={icon} size="xl" />
        </span>
        <h3 className="text-primary-text font-semibold inline">{name}</h3>
      </div>

      <span className="sm:col-span-7 text-start border-b border-secondary-text">
        {typeof content === 'string'
          ? content
          : content && (
              <ul>
                {content.map((activity, index) => (
                  <li key={index}>
                    <span className="font-bold">&#8226;</span> {activity.name}:{' '}
                    {currencyFormater.format(activity.price)}
                  </li>
                ))}
              </ul>
            )}
      </span>
    </div>
  )
}
