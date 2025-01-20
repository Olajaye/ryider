import { Routes, Route } from "react-router";
import Layout from "./core/Layout/Layout";
import Home from "./pages/Home"
import Blogs from "./pages//Blogs"
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";

import LogIn from './pages/Dashboard/LogIn'
import Register from './pages/Onboarding/Register'
import RegisterVerification from './pages/Onboarding/RegisterVerification'
import ForgetPassword from './pages/Onboarding/ForgetPassword'
import CreateNewPassword from './pages/Onboarding/CreateNewPassword'






function App() {
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
       
        {/* <Route element={<RequiredAuth/>}>
          <Route path="dashboard" element={<DashboardLayout/>}>
           <Route index element={<Dashboard/>}/>
           <Route path="wallet" element={<Wallet/>}/>
           <Route path="affiliate" element={<Affiliate/>}/>
           <Route path="socialtask" element={<h1>socialtask</h1>}/>
           <Route path="earning&spending" element={<h1>earning&spending</h1>}/>
           <Route path="message" element={<h1>message</h1>}/>
           <Route path="support" element={<h1>support</h1>}/>
           <Route path="about" element={<h1>about</h1>}/>
          </Route>
        </Route> */}
      </Routes>
    </main>
  )
}

export default App;
