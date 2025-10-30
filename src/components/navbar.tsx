import { NavLink } from "react-router-dom";
import fullIcon from "/fullIcon.svg";
import calculator from "/calculator.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const Navbar = () => {
  const [opened, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <div className="fixed w-full top-0 left-0 backdrop-blur-lg bg-white/30 py-6 z-50">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="block md:hidden" onClick={openDrawer}>
              <FontAwesomeIcon icon={faBars} />
            </button>

            {/* Logo */}
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
              <h3>About Us</h3>
            </NavLink>
            <NavLink className="font-[600] text-mainDark" to={"/blog"}>
              <h3>Blog</h3>
            </NavLink>
            <NavLink className="font-[600] text-mainDark" to={"/contacts"}>
              <h3>Contacts</h3>
            </NavLink>
          </div>

          {/* Calculator button */}
          <button className="px-2 md:px-4 py-2 rounded-lg bg-second gap-2 flex items-center justify-center">
            <span className="text-white hidden md:block">Calculator</span>
            <img src={calculator} className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="h-[88px]"></div>

      {/* Drawer menu for mobile */}
      <Drawer
        opened={opened}
        onClose={closeDrawer}
        size="xs"
        padding="xl"
        position="right"
      >
        <div className="gap-6 flex flex-col">
          <NavLink
            className="font-[600] text-mainDark"
            to={"/"}
            onClick={closeDrawer}
          >
            <h3>Home</h3>
          </NavLink>

          <NavLink
            className="font-[600] text-mainDark"
            to={"/about"}
            onClick={closeDrawer}
          >
            <h3>About Us</h3>
          </NavLink>

          <NavLink
            className="font-[600] text-mainDark"
            to={"/blog"}
            onClick={closeDrawer}
          >
            <h3>Blog</h3>
          </NavLink>

          <NavLink
            className="font-[600] text-mainDark"
            to={"/contacts"}
            onClick={closeDrawer}
          >
            <h3>Contacts</h3>
          </NavLink>

          <button
            className="w-full px-4 py-3 rounded-lg bg-second flex items-center justify-center gap-2"
            onClick={closeDrawer}
          >
            <span className="text-white font-[600]">Calculator</span>
            <img src={calculator} className="w-6 h-6 text-white" />
          </button>
        </div>
      </Drawer>
    </>
  );
};
