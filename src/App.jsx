import './App.css'
import About from './Pages/About'
import Awards from './Pages/Awards'
import ConferenceVenue from './Pages/ConferenceVenue'
import Downloads from './Pages/Downloads'
import Home from './Pages/Home'
import PosterPaper from './Pages/PosterPaper'
import Publications from './Pages/Publications'
import Registration from './Pages/Registration'
import SpecialSessions from './Pages/SpecialSessions'
import Sponsorships from './Pages/Sponsorships'
import Workshops from './Pages/Workshops'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    
      
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        
        <Route path='/Poster-Paper Presentation' element={<PosterPaper/>}></Route>
        <Route path='/Special-Sessions' element={<SpecialSessions/>}></Route>
        <Route path='/Awards' element={<Awards/>}></Route>
        <Route path='/Downloads' element={<Downloads/>}></Route>
        <Route path='/Publications' element={<Publications/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
        <Route path='/Sponsorships' element={<Sponsorships/>}></Route>
        <Route path='/ConferenceVenue' element={<ConferenceVenue/>}></Route>
        <Route path='/Workshops' element={<Workshops/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
