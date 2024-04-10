export interface AppModel {
  credenciales: CredencialesModel
  header: HeaderModel
  body: BodyModel[]
}

export interface CredencialesModel {
  user: string
  password: string
}

export interface HeaderModel {
  logoImg: string
  logoURL: string
  newWindowLogo: boolean
  nombre: string
  bannerImg: string
  bannerUrl: string
  newWindowBanner: boolean
  tituloBienvenida: string
  tituloFontSize: string
  tituloColor: string
}

export interface BodyModel {
  idTeam: string
  nombreTeam: string
  teamFontSize: string
  teamColor: string
  players: PlayerModel[]
}

export interface PlayerModel {
  playerid: string
  playerImg: string
  playerImgUrl: string
  playerNombre: string
  playerApellido: string
  playerEdad: string
  playerPasatiempo: string
  playerWebSite: string
  playerProfesion: string
}
