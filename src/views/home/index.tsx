import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ErrorPage from '../error-page'
import { index as getPageInfo } from '@/api/common'
import { AppModel, PlayerModel } from '@/types/models/app'
import { isEmptyObject } from '@/utils/obj'
import { isEmptyArray, sliceArray } from '@/utils/array'
import { CardBox } from '@/components/box/card'
import { DialogBox } from '@/components/box/dialog'

function Home() {
  const [appInfo, setAppInfo] = useState<AppModel>()
  const [showDetailsTeam, setShowDetailsTeam] = useState('')
  const [playerInfo, setPlayerInfo] = useState<PlayerModel>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPageInfo()
      if (response) setAppInfo(response)
    }

    fetchData()
  }, [])

  const toggleDetails = (player: PlayerModel, idTeam: string) => {
    setPlayerInfo(player)
    setShowDetailsTeam(idTeam)
  }

  function CardDetails() {
    return (
      <div className='col-span-full grid grid-cols-1 gap-10 md:grid-cols-2'>
        <img
          alt={`Player ${playerInfo?.playerNombre}`}
          className='row-span-full aspect-square h-auto w-full cursor-pointer rounded-md object-cover'
          src={playerInfo?.playerImg}
        />
        <div>
          <p>
            <b>{'Nombre: '}</b>
            {playerInfo?.playerNombre}
          </p>
          <p>
            <b>{'Apellido: '}</b>
            {playerInfo?.playerApellido}
          </p>
          <p>
            <b>{'Edad: '}</b>
            {playerInfo?.playerEdad}
          </p>
          <p>
            <b>{'Pasa tiempo: '}</b>
            {playerInfo?.playerPasatiempo}
          </p>
          <p>
            <b>{'Sitio Web: '}</b>
            <Link target='blank' to={playerInfo?.playerWebSite || '#'}>
              {playerInfo?.playerWebSite}
            </Link>
          </p>
          <p>
            <b>{'Profesión: '}</b>
            {playerInfo?.playerProfesion}
          </p>
        </div>
      </div>
    )
  }

  return (
    <main>
      {isEmptyObject(appInfo) && <ErrorPage />}
      {(!isEmptyObject(appInfo?.header) && (
        <header>
          <section className='flex flex-row items-center justify-between p-5'>
            <h2 className='text-xl font-bold'>{appInfo?.header?.nombre}</h2>
            <Link
              target={appInfo?.header?.newWindowLogo ? '_blank' : '_self'}
              to={String(appInfo?.header?.logoURL)}
            >
              <img
                alt={`header ${appInfo?.header?.bannerUrl}`}
                className='aspect-video h-auto w-24 rounded-md object-cover object-center'
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
                className='aspect-square h-56 w-full object-cover'
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
      )) || <h2>{'No hay headeer :('}</h2>}
      {(!isEmptyArray(appInfo?.body) && (
        <section className='p-10'>
          {appInfo?.body.map((value) => (
            <div key={value.idTeam} className='my-5'>
              <h3
                style={{
                  fontSize: value.teamFontSize || '1.12rem',
                  color: value.teamColor || 'black'
                }}
              >
                {value.nombreTeam}
              </h3>
              <div className='mt-1 grid grid-cols-8 items-center justify-center gap-2'>
                {!isEmptyArray(value.players) &&
                  sliceArray(value.players, 4)?.map((player) => (
                    <div
                      key={player.playerid}
                      className='col-span-full sm:col-span-4 md:col-span-2'
                      onClick={() => toggleDetails(player, value.idTeam)}
                    >
                      <CardBox>
                        <img
                          alt={`Player ${player.playerNombre}`}
                          className='aspect-square h-auto w-full cursor-pointer rounded-md object-cover'
                          src={player.playerImg}
                        />
                        {/* <DialogBox
                          requireAcceptButton={false}
                          trigger={
                            <img
                              alt={`Player ${player.playerNombre}`}
                              className='aspect-square h-auto w-full cursor-pointer rounded-md object-cover'
                              src={player.playerImg}
                            />
                          }
                        >
                          <Link target='_blank' to={player.playerImgUrl}>
                            <img
                              alt={`Player ${player.playerNombre}`}
                              className='aspect-square h-auto w-full rounded-md object-cover'
                              src={player.playerImg}
                            />
                          </Link>

                          <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                            <p>
                              <b>{'Nombre: '}</b>
                              {player.playerNombre}
                            </p>
                            <p>
                              <b>{'Apellido: '}</b>
                              {player.playerApellido}
                            </p>
                            <p>
                              <b>{'Edad: '}</b>
                              {player.playerEdad}
                            </p>
                            <p>
                              <b>{'Pasa tiempo: '}</b>
                              {player.playerPasatiempo}
                            </p>
                            <p>
                              <b>{'Sitio Web: '}</b>
                              <Link target='blank' to={player.playerWebSite}>
                                {player.playerWebSite}
                              </Link>
                            </p>
                            <p>
                              <b>{'Profesión: '}</b>
                              {player.playerProfesion}
                            </p>
                          </div>
                        </DialogBox> */}
                      </CardBox>
                    </div>
                  ))}
                {!isEmptyObject(playerInfo) &&
                  showDetailsTeam === value.idTeam &&
                  CardDetails()}
              </div>
            </div>
          ))}
        </section>
      )) || <h2>{'No hay equipos :('}</h2>}
    </main>
  )
}

export default Home
