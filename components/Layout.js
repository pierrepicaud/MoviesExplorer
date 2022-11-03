import NavBar from "./NavBar"
import Meta from "./Meta"
import Footer from "./Footer"

function Layout({children}) {
  return (
    <>
    <Meta/>
    <NavBar/>
    <main>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout