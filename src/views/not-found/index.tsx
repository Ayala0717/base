import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'

function NotFound() {
  return (
    <div className='flex h-dvh flex-col items-center justify-center space-y-5'>
      <h1 className='text-4xl font-bold'>{'404 - Página no encontrada'}</h1>
      <hr className='w-full' />
      <p className='text-lg'>
        {'Lo sentimos, la página que estás buscando no existe.'}
      </p>
      <Link replace className={buttonVariants()} to='/home'>
        {'Ir al inicio'}
      </Link>
    </div>
  )
}

export default NotFound
