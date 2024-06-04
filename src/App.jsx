import './App.css'
import AboutInstitute from './Pages/AboutInstitute'
import AboutUni from './Pages/AboutUni'
import AdvCom from './Pages/AdvCom'
//import Awards from './Pages/Awards'
import VisitorsGuide from './Pages/VisitorsGuide'
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
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import CallForINTWork from './Pages/CallForINTWork'

const router=createBrowserRouter([
  {
    path:'/',
    element:<><Header /><Outlet /><Footer/></>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/call-for-papers',
        element:<CallForPapers/>
      },
      {
        path:'/paper-submission',
        element:<PaperSubmission/>
      },
      {
        path:'/call-for-special-sessions',
        element:<CallForSpecialSessions/>
      },
      {
        path:'/call_for_international_workshops', 
        element:<CallForINTWork/>
      },
      {path:'/about-institute' ,element:<AboutInstitute/>},
      {path:'/about-uni' ,element:<AboutUni/>},
      {path:'/policy' ,element:<Policy/>},
      {path:'/Poster-Paper-Presentation' ,element:<PosterPaper/>},
      {path:'/Special-Sessions' ,element:<SpecialSessions/>},
      {path:'/VisitorsGuide' ,element:<VisitorsGuide/>},
      {path:'/Downloads' ,element:<Downloads/>},
      {path:'/Publications' ,element:<Publications/>},
      {path:'/Registration' ,element:<Registration/>},
      {path:'/Sponsorships' ,element:<Sponsorships/>},
      {path:'/ConferenceVenue' ,element:<ConferenceVenue/>},
      {path:'/Workshops' ,element:<Workshops/>},
      {path:'/advisory-committee' ,element:<AdvCom/>},
      {path:'/industry-experts' ,element:<IndEx/>},
      {path:'/steering-committee' ,element:<SteeringCommittee/>},
      {path:'/technical-program-committee' ,element:<TechProgC/>},

    ]
  }
])
function App() {

  return (
    
    <div>
      <RouterProvider router={router} />
    </div>
    
  )
}

export default App
