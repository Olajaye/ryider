import { Outlet } from 'react-router'

import Footer from '../../components/Footer'


const Layout = () => {
  return (
    <main>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default Layout