import { useAppDataStore } from '@/store'
import { isEmptyObject } from '@/utils/obj'

function Home() {
  const user = useAppDataStore((state) => state.user)

  return <main>{!isEmptyObject(user) && <h1>{user?.username}</h1>}</main>
}

export default Home
