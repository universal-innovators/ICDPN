import './App.css'
import About from './Pages/About'
import Awards from './Pages/Awards'
import CallForPapers from './Pages/CallForPapers'
import CallForSpecialSessions from './Pages/CallForSpecialSessions'
import ConferenceVenue from './Pages/ConferenceVenue'
import Downloads from './Pages/Downloads'
import Home from './Pages/Home'
import ICICC2018 from './Pages/ICICC2018'
import ICICC2019 from './Pages/ICICC2019'
import ICICC2020 from './Pages/ICICC2020'
import ICICC2021 from './Pages/ICICC2021'
import ICICC2022 from './Pages/ICICC2022'
import ICICC2023 from './Pages/ICICC2023'
import ICICC2024 from './Pages/ICICC2024'
import PaperSubmission from './Pages/PaperSubmission'
import PosterPaper from './Pages/PosterPaper'
import Publications from './Pages/Publications'
import Registration from './Pages/Registration'
import SpecialSessions from './Pages/SpecialSessions'
import Sponsorships from './Pages/Sponsorships'
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
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Call-For-Papers' element={<CallForPapers/>}></Route>
        <Route path='/Paper-Submission' element={<PaperSubmission/>}></Route>
        <Route path='/Call-For-Special-Sessions' element={<CallForSpecialSessions/>}></Route>
        <Route path='/ICICC2024' element={<ICICC2024/>}></Route>
        <Route path='/ICICC2023' element={<ICICC2023/>}></Route>
        <Route path='/ICICC2022' element={<ICICC2022/>}></Route>
        <Route path='/ICICC2021' element={<ICICC2021/>}></Route>
        <Route path='/ICICC2020' element={<ICICC2020/>}></Route>
        <Route path='/ICICC2019' element={<ICICC2019/>}></Route>
        <Route path='/ICICC2018' element={<ICICC2018/>}></Route>

        <Route path='/Poster-Paper-Presentation' element={<PosterPaper/>}></Route>
        <Route path='/Special-Sessions' element={<SpecialSessions/>}></Route>
        <Route path='/Awards' element={<Awards/>}></Route>
        <Route path='/Downloads' element={<Downloads/>}></Route>
        <Route path='/Publications' element={<Publications/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
        <Route path='/Sponsorships' element={<Sponsorships/>}></Route>
        <Route path='/ConferenceVenue' element={<ConferenceVenue/>}></Route>
        <Route path='/Workshops' element={<Workshops/>}></Route>
      </Routes>
      

      
      <Footer />

    </>
  )
}

export default App
