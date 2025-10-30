import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AutoTransportServices = () => {
  return (
    <div className="p-5 flex flex-col md:flex-row gap-6 bg-lightGray/10 rounded-2xl">
      <div className="w-full md:w-[80%]">
        <div className="flex gap-2 items-center mb-4">
          <div className="flex items-center justify-center bg-second rounded-full w-fit p-3">
            <FontAwesomeIcon icon={faTruck} className="text-white w-6 h-6" />
          </div>
          <h1 className="text-lg md:text-xl font-semibold">
            Open Auto Transport
          </h1>
        </div>
        <p className="text-lightGray text-sm">
          Our most popular and cost-effective option, open auto transport,
          involves shipping your vehicle on an open carrier. This service is
          perfect for standard vehicles and provides a reliable solution for
          your car shipping needs.
        </p>
      </div>
      <div className="w-full md:w-[20%] flex items-center ">
        <button className="rounded-lg w-full md:w-[200px] bg-main text-white p-4 font-semibold text-base">
          Get a Quote
        </button>
      </div>
    </div>
  );
};
