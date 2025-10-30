import { NavLink } from "react-router-dom";
import calculator from "/calculator.svg";
import homeBg from "/homeBg.svg";
type ServiceHighlightsCard = {
  img?: string;
  icon?: string;
  header: string;
  body: string;
};
// { img, icon, header, body }: ServiceHighlightsCard

export const ServiceHighlightsCard = () => {
  return (
    <NavLink to={"/"}>
      <div className="w-[240px] md:w-[380px] rounded-[24px] overflow-hidden border border-mainDark/10 mx-1 md:mx-3">
        <img src={homeBg} className="w-full max-h-[140px] object-cover" />
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full relative bottom-6 md:bottom-8 left-5 -mb-10 md:-mb-8  border-2 flex items-center justify-center bg-second">
          <img
            src={calculator}
            className="w-6 h-6 md:w-[36px] md:h-[36px] object-cover rounded-full"
          />
        </div>
        <div className="p-3 md:p-5">
          <h1 className="font-bold text-mainDark text-xl mb-3">
            Exceptional Reliability
          </h1>
          <h2 className="text-[#191A1D99] text-sm">
            Choosing the right auto transport company is crucial for ensuring a
            smooth and stress-free car{" "}
          </h2>
        </div>
      </div>
    </NavLink>
  );
};
