import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  allowChars?: string | RegExp
  allowOnlyNumber?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, allowChars, allowOnlyNumber, ...props }, ref) => {
    const allowedChars = (char: string) => {
      if (allowChars) {
        const regExp =
          typeof allowChars === 'string' ? new RegExp(allowChars) : allowChars

        return regExp.test(char)
      }

      if (allowOnlyNumber) return /\d/.test(char)

      return true
    }

    const handlePreventChars = (e: InputEvent) => {
      const { data } = e

      if (!allowedChars(String(data))) e.preventDefault()
    }

    return (
      <input
        ref={ref}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        type={type}
        onBeforeInput={handlePreventChars}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
