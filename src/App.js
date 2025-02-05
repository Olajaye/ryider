import { Routes, Route } from "react-router";
import Layout from "./core/Layout/Layout";
import Home from "./pages/Home"
import Blogs from "./pages//Blogs"
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";



import Dashboard from './pages/PublisherDashboard/Dashboard'
import Wallet from './pages/PublisherDashboard/Wallet'
import Affiliate from './pages/PublisherDashboard/Affiliate'


import Register from './pages/Onboarding/Register'
import LogIn from './pages/Onboarding/LogIn'
import RegisterVerification from './pages/Onboarding/RegisterVerification'
import ForgetPassword from './pages/Onboarding/ForgetPassword'
import CreateNewPassword from './pages/Onboarding/CreateNewPassword'

import RequiredAuth from './util/RequireAuth'
import DashboardLayout from './core/Layout/DashboardLayout'
import { useAuth } from "./context/AuthContext";
import Earnings from "./pages/PublisherDashboard/Earnings";
import SocilaTask from "./pages/PublisherDashboard/SocilaTask";
import SocialTaskVedio from "./components/SocialTask/Vedio";
import Investment from "./pages/PublisherDashboard/Investment";
import SalesContest from "./pages/PublisherDashboard/SalesContest";
import SalesTicket from "./pages/PublisherDashboard/SalesTicket";
import VendorDashboard from "./pages/PublisherDashboard/VendorDashboard";
import ShoppersDashboard from "./pages/PublisherDashboard/ShoppersDashboard";







function App() {
  const {userData}= useAuth()
  return (
    <main className="dark:bg-[#121212]">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="aboutus" element={<About/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="faq" element={<FAQ/>}/>
          <Route path="privacy" element={<Privacy/>}/>
        </Route>
        <Route path="login" element={<LogIn/>}/>  
        <Route path="register" element={<Register/>}/> 
        <Route path="verification" element={<RegisterVerification/>}/>
        <Route path="forgetpassword" element={<ForgetPassword/>}/>
        <Route path="createpassword" element={<CreateNewPassword/>}/>
       
        {/* <Route element={<RequiredAuth/>}> */}
            {/* {userData && userData.role === 'publisher' ? (
            <> */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard/>} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="affiliate" element={<Affiliate />} />
          <Route path="socialtask" element={<SocilaTask/>}/>
          <Route path="vedio" element={<SocialTaskVedio/>}/>
          <Route path="earnings" element={<Earnings/>}/>
          <Route path="investment" element={<Investment/>}/>
          <Route path="salescontest" element={<SalesContest/>} />
          <Route path="salesticket" element={<SalesTicket/>} />
          <Route path="vendordashboard" element={<VendorDashboard/>} />
          <Route path="shoppersdashboard" element={<ShoppersDashboard/>} />
          <Route path="profile" element={<h1>About</h1>} />
        </Route>
        {/* </Route>  */}
      </Routes>
    </main>
  )
}

export default App;
 {/* </>
          ) :  (
            <>
              <Route index element={<h1>SHopper dash board</h1>} />
              <Route path="wallet" element={<h1>shopper wallet</h1>} />
              <Route path="message" element={<h1>Message</h1>} />
              <Route path="support" element={<h1>Support</h1>} />
              <Route path="about" element={<h1>About</h1>} />
            </>
          )} */}