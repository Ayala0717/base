import { RouteObject } from 'react-router'
import Login from '@/views/login'
import NotFound from '@/views/not-found'
import Home from '@/views/home'
import Index from '@/views'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'home',
        element: <Home />
      }
    ]
  },
  { path: '*', element: <NotFound /> }
]
