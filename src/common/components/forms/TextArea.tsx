import classNames from 'classnames'
import { TextareaHTMLAttributes, forwardRef } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string
  error?: string
}
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, title, ...props }, ref) => {
    const containerStyles = classNames({
      'form-control text-form-text': true,
      [`${className}`]: className
    })

    return (
      <div className={containerStyles}>
        <label className="label">
          <span className="font-semibold">{title}</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24 text-form-text"
          ref={ref}
          {...props}
        ></textarea>
        {error && (
          <label className="label">
            <span className="label-text-alt text-accent text-sm">{error}</span>
          </label>
        )}
      </div>
    )
  }
)
