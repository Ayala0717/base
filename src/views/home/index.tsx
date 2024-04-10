import { useEffect, useState } from 'react'
import { index as getPageInfo } from '@/api/common'
import { HeaderModel } from '@/types/models/app'
import { isEmptyObject } from '@/utils/obj'

function Home() {
  const [appHeader, setAppHeader] = useState<HeaderModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPageInfo()
      if (response && response.header)
        setAppHeader(response.header as HeaderModel)
    }

    fetchData()
  }, [])

  return (
    <main>
      {!isEmptyObject(appHeader) && (
        <header>
          <section>
            <p>{appHeader?.nombre}</p>
            <p>{appHeader?.logoURL}</p>
          </section>
          <section>{appHeader?.bannerImg}</section>
          <section>{appHeader?.tituloBienvenida}</section>
        </header>
      )}
    </main>
  )
}

export default Home
