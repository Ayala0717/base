import { useEffect, useState, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallBack?: ReactNode
  onErrorHandler?: (error: Error, errorInfo?: React.ErrorInfo) => void
}

function ErrorBoundary({ children, fallBack, onErrorHandler }: Props) {
  const [hasError, setHasError] = useState(false)

  const handleError = (error: Error, errorInfo?: React.ErrorInfo) => {
    if (onErrorHandler) onErrorHandler(error, errorInfo)
    setHasError(true)
  }

  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      handleError(event.error || new Error('unknwon error0'))
    }
    window.addEventListener('error', handleGlobalError)

    return () => {
      window.removeEventListener('error', handleGlobalError)
    }
  }, [])

  if (hasError && fallBack) return fallBack
  else if (hasError && !fallBack)
    return <h1>{'Huston, tenemos un problema'}</h1>

  return children
}

export default ErrorBoundary
