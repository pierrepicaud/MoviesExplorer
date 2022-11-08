import NavBar from "./NavBar";
import Meta from "./Meta";
import Footer from "./Footer";


function Layout({ children }) {
  return (
      <div className="flex flex-col">
        <Meta />

        <NavBar />

        {children}
        <Footer />
      </div>
  );
}

export default Layout;
