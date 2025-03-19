import React from 'react'
import Index from './pages/home'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import PersonalInformation from './resumedetails/PersonalInformation'
import Education from './resumedetails/Education'
import Experience from './resumedetails/Experience'
import ContactInformation from './resumedetails/ContactInformation'
import Award from './resumedetails/Award'
import Sidebar from './component/Sidebar'
import { FOOTERITEMS, FORMROUTES, ROUTES } from './constant/index'


import Contact from './pages/footerfiles/company/Contact'
import Faq from './pages/footerfiles/company/Faq'
import BuildResume from './pages/footerfiles/services/BuildResume'
import CoverLetter from './pages/footerfiles/services/CoverLetter'

import Templates from './pages/footerfiles/services/Templates'
import AboutUsFooter from './pages/footerfiles/more/AboutUsFooter'
import Developers from './pages/footerfiles/more/Developers'
import JoinTabulio from './pages/footerfiles/more/JoinTabulio'
import MeetOurTeam from './pages/footerfiles/more/MeetOurTeam'
import PrivacyPolicy from './pages/footerfiles/resumo/PrivacyPolicy'
import TermOfUse from './pages/footerfiles/resumo/TermOfUse'
import AboutUs from './about-us/AboutUs'

import Login from './Login'
import Signup from './Signup'

import LogOut from './LogOut'
import Preview from './Preview'






function App() {
  return (
 <>
{/* <Index/> */}




<Router>


   <Routes>
    <Route path={FORMROUTES.HOME} element={<Index/>} />


   <Route path={FORMROUTES.PERSONALINFORMATION} element={<PersonalInformation/>} />
     <Route path={FORMROUTES.EDUCATION} element={<Education />} />
     <Route path={FORMROUTES.EXPEREINCE} element={<Experience />} />
     <Route path={FORMROUTES.CONTACTINFORMATION} element={<ContactInformation/>} />
     <Route path={FORMROUTES.AWARD} element={<Award />} /> 

  
     <Route  path={FOOTERITEMS.CONTACT} element={<Contact/>} />
     <Route  path={FOOTERITEMS.FAQ} element={<Faq/>} />
     <Route  path={FOOTERITEMS.BUILDRESUME} element={<BuildResume/>} />
     <Route  path={FOOTERITEMS.COVERLETTER} element={<CoverLetter/>} />
 
     <Route  path={FOOTERITEMS.TEMPLATES} element={<Templates/>} />
     <Route  path={FOOTERITEMS.ABOUTUSFOOTER} element={<AboutUsFooter/>} />
     <Route  path={FOOTERITEMS.DEVELOPERS} element={<Developers/>} />
     <Route  path={FOOTERITEMS.JOINTABULIO} element={<JoinTabulio/>} />
     <Route  path={FOOTERITEMS.MEETOURTEAM} element={<MeetOurTeam/>} />
     <Route  path={FOOTERITEMS.PRIVACYPOLICY} element={<PrivacyPolicy/>} />
     <Route  path={FOOTERITEMS.TERMOFUSE} element={<TermOfUse/>} />

      <Route  path={FORMROUTES.ABOUTUS} element={<AboutUs/>} />
  
      <Route  path={FORMROUTES.SIDEBAR} element={<Sidebar/>} />
      <Route  path={ROUTES.LOGIN} element={<Login/>} />
      <Route  path={ROUTES.SIGNUP} element={<Signup/>} />
      <Route  path={FORMROUTES.PREVIEW} element={<Preview/>} />
      <Route  path={ROUTES.LOGOUT} element={<LogOut/>} />
  </Routes>

</Router>  


 </>
  )
}

export default App