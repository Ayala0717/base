import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ErrorPage from '../error-page'
import { index as getPageInfo } from '@/api/common'
import { AppModel } from '@/types/models/app'
import { isEmptyObject } from '@/utils/obj'

function Home() {
  const [appInfo, setAppInfo] = useState<AppModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPageInfo()
      if (response) setAppInfo(response)
    }

    fetchData()
  }, [])

  return (
    <main>
      {isEmptyObject(appInfo) && <ErrorPage />}
      {!isEmptyObject(appInfo?.header) && (
        <header>
          <section className='flex flex-row items-center justify-between p-5'>
            <h3 className='text-xl font-bold'>{appInfo?.header?.nombre}</h3>
            <Link
              target={appInfo?.header?.newWindowLogo ? '_blank' : '_self'}
              to={String(appInfo?.header?.logoURL)}
            >
              <img
                alt={`header ${appInfo?.header?.bannerUrl}`}
                className='w-24 rounded-md'
                src={appInfo?.header?.logoURL}
              />
            </Link>
          </section>
          <section>
            <Link
              target={appInfo?.header?.newWindowBanner ? '_blank' : '_self'}
              to={String(appInfo?.header?.bannerUrl)}
            >
              <img
                alt={`banner ${appInfo?.header?.bannerImg}`}
                className='h-56 w-full object-cover'
                src={appInfo?.header?.bannerImg}
              />
            </Link>
          </section>
          <section className='mt-2 flex w-full items-center justify-center'>
            <h1
              className='font-bold'
              style={{
                fontSize: appInfo?.header?.tituloFontSize || '1.8rem',
                color: appInfo?.header?.tituloColor || 'black'
              }}
            >
              {appInfo?.header?.tituloBienvenida}
            </h1>
          </section>
        </header>
      )}
      {isEmptyObject(appInfo?.body) && (
        <body>
          <section>equipo titulo</section>
          <section>carrusel</section>
        </body>
      )}
    </main>
  )
}

export default Home
