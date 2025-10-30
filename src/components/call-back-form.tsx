import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CallBackForm = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 rounded-2xl py-5 my-3 gap-5 bg-[linear-gradient(90deg,rgba(247,250,252,1),rgba(245,229,236,0.41),rgba(205,223,245,0.42))] overflow-hidden">
        <div className="flex flex-col gap-6 justify-between w-full">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl leading-[130%] text-mainDark text-center md:text-left">
              READY TO TRANSPORT YOUR VEHICLE?
            </h1>
            <h3 className="font-normal text-base text-[#5C6670] text-center md:text-left">
              Our Professional Team is Ready to Assist You!
            </h3>
          </div>
          <div className="flex flex-col items-center justify-between md:block ">
            <a
              href="https://maps.app.goo.gl/rN87ruYpL5JQUP3E8"
              className="font-bold text-base md:text-xl text-second flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faLocationDot} /> 3073 Allendale Dr Indian
              Land, SC 29707
            </a>
            <a
              href="mailto:info@xpresstransportation.org"
              className="font-bold text-base md:text-xl text-second flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              info@xpresstransportation.org
            </a>
            <a
              href="tel:+19295665040"
              className="font-bold text-base md:text-xl text-second flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faPhone} /> +1 (929) 565-040
            </a>
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-[24px] w-full  rounded-[8px]">
            <label
              htmlFor="name"
              className="font-semibold text-[#5C6670] text-[15px]"
            >
              Your Name
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full h-[47px] px-4 py-2   border border-[#E6ECF0] rounded-[6px]"
              />
            </label>
            <label
              htmlFor="name"
              className="font-semibold text-[#5C6670] text-[15px]"
            >
              Phone Number
              <input
                type="phone"
                name="phone"
                placeholder="(123) 456 7891"
                required
                className="w-full h-[47px] px-4 py-2  border border-[#E6ECF0] rounded-[6px]"
              />
            </label>
            <button className="w-full h-[47px] rounded-[8px] text-white bg-[#244567]">
              Submit
            </button>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="privacy-policy"
                name="privacy-policy"
              />
              <label
                typeof="button"
                htmlFor="privacy-policy"
                className="font-medium text-sm text-[#606266] "
              >
                By checking this box, I concent to receive text messages related
                to vehicle shipment from Xpress Auto Transportation Inc. You can
                reply "STOP" at anytime to opt out. Message and data rated may
                apply. Message frequency may vary, text "HELP" for assistance.
                For more information please refer to our
                <span className="text-[#FF4E00] mx-1 cursor-pointer">
                  Privacy Policy
                </span>
                and
                <span className="text-[#FF4E00] mx-1 cursor-pointer">
                  Terms
                </span>
                on our website.
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
