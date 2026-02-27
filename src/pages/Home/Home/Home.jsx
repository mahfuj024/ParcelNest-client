import Banner from '../Banner/Banner'
import Benefits from '../Benefits/Benefits'
import MarqueeBrand from '../MarqueeBrand/MarqueeBrand'
import Services from '../Services/Services'
import Works from '../Works/Works'
import Marchant from "../Merchant/Merchant"
import AskedQuestion from '../AskedQuestion/AskedQuestion'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <MarqueeBrand></MarqueeBrand>
      <Benefits></Benefits>
      <Marchant></Marchant>
      <AskedQuestion></AskedQuestion>
    </div>
  )
}

export default Home