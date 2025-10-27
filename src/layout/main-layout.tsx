import { Navbar } from "../components/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
