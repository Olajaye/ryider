import { Routes, Route } from "react-router";
import Layout from "./core/Layout";
import Home from "./pages/Home";
import Earn from "./pages/Earn";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import ForgetPassword from "./pages/ForgetPassword";
import CreateNewPassword from "./pages/CreateNewPassword";
import RegisterVerification from "./pages/RegisterVerification";
import RequiredAuth from "./components/RequireAuth";
import DashboardLayout from "./core/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Affiliate from "./pages/Affiliate";



function App() {
  return (
    <main className="dark:bg-[#121212]">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="earn" element={<Earn/>}/>
        </Route>
        <Route path="login" element={<LogIn/>}/> 
        <Route path="register" element={<Register/>}/>
        <Route path="verification" element={<RegisterVerification/>}/>
        <Route path="forgetpassword" element={<ForgetPassword/>}/>
        <Route path="createpassword" element={<CreateNewPassword/>}/>
       
        <Route element={<RequiredAuth/>}>
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
        </Route>
      </Routes>
    </main>
  )
}

export default App;
