import classNames from 'classnames'
import { InputHTMLAttributes, forwardRef } from 'react'

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  error?: string
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ title, error, className, ...props }, ref) => {
    const containerStyles = classNames({
      [`${className}`]: className,
      'form-control w-full text-form-text': true
    })
    return (
      <div className={containerStyles}>
        <label className="label">
          <span className="capitalize font-semibold">{title}</span>
        </label>
        <input
          type="file"
          multiple
          className="file-input file-input-bordered w-full"
          {...props}
          ref={ref}
        />
        {error && (
          <div className="label">
            <span className="label-text-alt text-accent text-sm">{error}</span>
          </div>
        )}
      </div>
    )
  }
)
