import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

const ErrorPage = ({ className }: Props) => {
  return (
    <div
      className={cn('flex min-h-screen items-center justify-center', className)}
    >
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Ocurrió un error inesperado</h1>
        <p className='mt-4'>Lo sentimos, algo salió mal.</p>
      </div>
    </div>
  )
}

export default ErrorPage
