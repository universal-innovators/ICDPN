
import Body from '../components/Body'
import Conference from '../components/Conference'
import ImpDatesAndNotices from '../components/ImpDatesAndNotices'
import Slider from '../components/Slider'
import Speaker from '../components/Speaker'

const Home = () => {
  return (
    <>
    <Slider/>
    <Body />
    <Conference/>
     <Speaker/> 
     <ImpDatesAndNotices/>
    </>
  )
}

export default Home