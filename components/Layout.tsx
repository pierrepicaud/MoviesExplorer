import NavBar from './NavBar'
import Meta from './Meta'
import Footer from './Footer'
import { UserProvider } from '@auth0/nextjs-auth0'

function Layout({ children }: { children: JSX.Element }) {
  return (
    <UserProvider>
      <div className="flex flex-col">
        <Meta />
        <NavBar />
        {children}
        <Footer />
      </div>
    </UserProvider>
  )
}

export default Layout
