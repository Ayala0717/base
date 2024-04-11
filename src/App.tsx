import { useNavigate, useRoutes } from 'react-router'
import { Suspense, useEffect } from 'react'
import { useAppDataStore } from './store'
import { routes } from './routes/route'
import ErrorPage from './views/error-page'
import ErrorBoundary from '@/components/error-boundary'

function App() {
  const navigate = useNavigate()
  const isAuth = useAppDataStore((state) => state.isAuthenticated)

  useEffect(() => {
    if (!isAuth) navigate('/login', { replace: true })
    if (
      isAuth &&
      (window.location.pathname === '/' ||
        window.location.pathname === '/login')
    )
      navigate('/home')
  }, [isAuth])

  const route = useRoutes(routes)
  return (
    <ErrorBoundary fallBack={<ErrorPage />}>
      <Suspense fallback={<p>{'Loading'}</p>}>
        <main>{route}</main>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
