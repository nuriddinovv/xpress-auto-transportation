import { NavLink } from "react-router-dom";
import fullIcon from "/fullIcon.svg";
import calculator from "/calculator.svg";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className="fixed w-full top-0 left-0 backdrop-blur-lg bg-white/30 py-6 z-50">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="block md:hidden" onClick={open}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <NavLink to={"/"}>
              <img
                src={fullIcon}
                alt="XPRESS AUTO TRANSPORTATION"
                className="w-[180px] h-fit md:w-[250px]"
              />
            </NavLink>
          </div>

          {/* Desktop menu */}
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

      {/* Drawer menu for mobile */}
      <Drawer opened={opened} onClose={close} size="xs" padding="xl">
        <div className="gap-6 flex flex-col">
          <NavLink
            className="font-[600] text-mainDark"
            to={"/"}
            onClick={close}
          >
            Home
          </NavLink>
          <NavLink
            className="font-[600] text-mainDark"
            to={"/about"}
            onClick={close}
          >
            About Us
          </NavLink>
          <NavLink
            className="font-[600] text-mainDark"
            to={"/blog"}
            onClick={close}
          >
            Blog
          </NavLink>
          <NavLink
            className="font-[600] text-mainDark"
            to={"/contacts"}
            onClick={close}
          >
            Contacts
          </NavLink>
        </div>
      </Drawer>
    </>
  );
}
