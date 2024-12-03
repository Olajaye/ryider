import { Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Earn from "./pages/Earn";

function App() {
  return (
    <main className="dark:bg-[#121212]">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/earn" element={<Earn/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App;
