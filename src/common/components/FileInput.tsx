import { InputHTMLAttributes, forwardRef } from 'react'

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  error?: string
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ title, error, ...props }, ref) => {
    return (
      <div className="form-control w-full max-w-xs text-form-text">
        <label className="label">
          <span className="capitalize font-semibold">{title}</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
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
