import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export const BlogsCard = () => {
  return (
    <NavLink
      to={`/blog/1`}
      className="group w-full min-h-[345px] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
    >
      <img src="/truckAndSafe.svg" alt="truck" className="w-full rounded-xl" />
      <div className="p-4">
        <p className="my-3 md:mt-5">May 15 2023</p>
        <p className="font-[600] text-second line-clamp-2">
          The Pros and Cons of Open vs. Enclosed Car Transport: Which Is Right
          for You?
        </p>

        <button className="relative flex gap-2 items-center justify-center mt-5">
          <p className="relative text-second font-medium">
            Read more
            {/* underline animation */}
            <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-second transition-all duration-300 group-hover:w-full"></span>
          </p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-second transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </NavLink>
  );
};
