import { NavLink } from "react-router-dom";
import fullIcon from "/fullIcon.svg";
import calculator from "/calculator.svg";
export default function Navbar() {
  return (
    <>
      <div className="fixed w-full top-0 left-0 backdrop-blur-lg bg-white/30 py-6 z-50">
        <div className="container flex items-center justify-between">
          <NavLink to={"/"}>
            <img
              src={fullIcon}
              alt="XPRESS AUTO TRANSPORTATION"
              className="w-[180px] h-fit md:w-[250px]"
            />
          </NavLink>
          <div className="gap-12 hidden md:flex">
            <NavLink className="font-[600] text-mainDark" to={"/about"}>
              About Us
            </NavLink>
            <NavLink className="font-[600] text-mainDark" to={"/blog"}>
              Blog
            </NavLink>
            <NavLink className="font-[600] text-mainDark" to={"/contacts"}>
              Contacts
            </NavLink>
          </div>
          <button className="px-2 md:px-4 py-2 rounded-lg bg-second gap-2 flex items-center justify-center">
            <span className="text-white hidden md:block">Calculator</span>
            <img src={calculator} className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <div className="h-[88px]"></div>
    </>
  );
}
