import './App.css'
import AboutInstitute from './Pages/AboutInstitute'
import AboutUni from './Pages/AboutUni'
import AdvCom from './Pages/AdvCom'
import Awards from './Pages/Awards'
import ConferenceVenue from './Pages/ConferenceVenue'
import Downloads from './Pages/Downloads'
import Home from './Pages/Home'
import IndEx from './Pages/IndEx'
import Policy from './Pages/Policy'
import PosterPaper from './Pages/PosterPaper'
import Publications from './Pages/Publications'
import Registration from './Pages/Registration'
import SpecialSessions from './Pages/SpecialSessions'
import Sponsorships from './Pages/Sponsorships'
import SteeringCommittee from './Pages/SteeringCommittee'
import TechProgC from './Pages/TechProgC'
import Workshops from './Pages/Workshops'


import Footer from './components/Footer'

import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    
      
      <Header />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-institute' element={<AboutInstitute/>}></Route>
        <Route path='/about-uni' element={<AboutUni/>}></Route>
        <Route path='/policy' element={<Policy/>}></Route>
        <Route path='/Poster-Paper-Presentation' element={<PosterPaper/>}></Route>
        <Route path='/Special-Sessions' element={<SpecialSessions/>}></Route>
        <Route path='/Awards' element={<Awards/>}></Route>
        <Route path='/Downloads' element={<Downloads/>}></Route>
        <Route path='/Publications' element={<Publications/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
        <Route path='/Sponsorships' element={<Sponsorships/>}></Route>
        <Route path='/ConferenceVenue' element={<ConferenceVenue/>}></Route>
        <Route path='/Workshops' element={<Workshops/>}></Route>
        <Route path='/advisory-committee' element={<AdvCom/>}></Route>
        <Route path='/industry-experts' element={<IndEx/>}></Route>
        <Route path='/steering-committee' element={<SteeringCommittee/>}></Route>
        <Route path='/technical-program-committee' element={<TechProgC/>}></Route>
      </Routes>
      

      
      <Footer />

    </>
  )
}

export default App
