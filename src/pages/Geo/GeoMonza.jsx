import GeoLanding from './GeoLanding'
import imgFurgone from '../../assets/images/geo-furgoni-img/furgone mrk ecosolution monza.png'
export default function GeoMonza() {
  return <GeoLanding citta="Monza" provincia="MB" zona="Monza e Brianza" kmDistanza={8} imgFurgone={imgFurgone} />
}
