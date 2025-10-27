import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-second">
      <div className="container py-4 md:py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src="/fullIconWhite.svg"
              className="w-[250px]"
              alt="XPRESS AUTO TRANSPORTATION"
            />
            <div className="py-3 md:py-6 flex flex-col gap-3 text-white">
              <a
                className="flex items-center gap-2 font-semibold"
                href="tel:+19295665040"
              >
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5" /> +1 (929)
                566-5040
              </a>
              <a
                className="flex items-center gap-2 font-semibold"
                href="mailto:info@xpresstransportation.org"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />{" "}
                info@xpresstransportation.org
              </a>
              <a
                className="flex items-center gap-2 font-semibold"
                href="mailto:info@xpresstransportation.org"
              >
                <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
                3073 Allendale Dr Indian Land, SC 29707
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <a
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
                href="https://www.instagram.com"
              >
                <FontAwesomeIcon
                  className="w-5 h-5 text-white"
                  icon={faInstagram}
                />
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
                href="https://www.facebook.com"
              >
                <FontAwesomeIcon
                  className="w-5 h-5 text-white"
                  icon={faFacebook}
                />
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
                href="https://www.youtube.com"
              >
                <FontAwesomeIcon
                  className="w-5 h-5 text-white"
                  icon={faYoutube}
                />
              </a>
            </div>
          </div>
          <div className="text-white none md:block">
            <p className="font-bold text-lg mb-4">PAGES</p>
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <NavLink to={"/"} className="font-semibold text-sm">
                  Main Page
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="font-semibold text-sm">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="font-semibold text-sm">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="font-semibold text-sm">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="font-semibold text-sm">
                  Terms&Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="font-semibold text-sm">
                  Privacy&Policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-white none md:block">
            <p className="font-bold text-lg mb-4">Office Hours</p>
            <ul className="list-disc flex flex-col gap-[10px]">
              <li>
                <p className="font-semibold text-sm">
                  Monday 9.00 A.M. - 6.00 P.M.
                </p>
              </li>
              <li>
                <p className="font-semibold text-sm">
                  Tuesday 9.00 A.M. - 6.00 P.M.
                </p>
              </li>
              <li>
                <p className="font-semibold text-sm">
                  Wednesday 9.00 A.M. - 6.00 P.M.
                </p>
              </li>
              <li>
                <p className="font-semibold text-sm">
                  Thursday 9.00 A.M. - 6.00 P.M.
                </p>
              </li>
              <li>
                <p className="font-semibold text-sm">
                  Friday 9.00 A.M. - 6.00 P.M.
                </p>
              </li>
              <li>
                <p className="font-semibold text-sm">
                  Saturday 9.00 A.M. - 6.00 P.M.
                </p>
              </li>
              <li>
                <p className="font-semibold text-sm">
                  Sunday 9.00 A.M. - 3.00 P.M.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white/20 my-8" />
        <div className="flex items-center justify-between text-white flex-col md:flex-row gap-4">
          <p className="text-base">© 2025 Xpress Auto Transportation Inc.</p>
          <p className="text-base">All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
