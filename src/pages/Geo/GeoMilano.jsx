import GeoLanding from './GeoLanding'
import furgoneMilano from '../../assets/images/geo-furgoni-img/furgone mrk ecosolution milano.png'

export default function GeoMilano() {
  return <GeoLanding citta="Milano" provincia="MI" zona="Milano città, hinterland nord e sud" kmDistanza={22} imgFurgone={furgoneMilano} />
}
