import { Routes, Route } from "react-router";
import Layout from "./core/Layout";
import Home from "./pages/Home";
import Earn from "./pages/Earn";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import ForgetPassword from "./pages/ForgetPassword";
import CreateNewPassword from "./pages/CreateNewPassword";

import Dashboard from "./pages/Dashboard";
import RegisterVerification from "./pages/RegisterVerification";
import RequiredAuth from "./components/RequireAuth";



function App() {
  return (
    <main className="dark:bg-[#121212]">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="earn" element={<Earn/>}/>
        </Route>
        <Route path="register" element={<Register/>}/>
        <Route path="verification" element={<RegisterVerification/>}/>
        <Route path="login" element={<LogIn/>}/> 
        <Route path="forgetpassword" element={<ForgetPassword/>}/>
        <Route path="createpassword" element={<CreateNewPassword/>}/>
       
        <Route element={<RequiredAuth/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App;
