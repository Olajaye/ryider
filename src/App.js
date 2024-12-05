import { Routes, Route } from "react-router";
import Layout from "./core/Layout";
import Home from "./pages/Home";
import Earn from "./pages/Earn";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import ForgetPassword from "./pages/ForgetPassword";
import CreateNewPassword from "./pages/CreateNewPassword";

function App() {
  return (
    <main className="dark:bg-[#121212]">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="earn" element={<Earn/>}/>
        </Route>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<LogIn/>}/>
        <Route path="forgetpassword" element={<ForgetPassword/>}/>
        <Route path="createpassword" element={<CreateNewPassword/>}/>
      </Routes>
    </main>
  )
}

export default App;
