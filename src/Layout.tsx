import { Outlet } from "react-router";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
