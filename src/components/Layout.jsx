import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import BackToTop from "./BackToTop.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

export default function Layout() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
