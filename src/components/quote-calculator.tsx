import Select from "react-select";

const selectStyles = {
  control: (base: any) => ({
    ...base,
    borderRadius: 16,
    background: "rgba(255,255,255,0.7)",
    border: 0,
    padding: "6px 10px",
    minHeight: 48,
    boxShadow: "none",
  }),
  option: (base: any, state: any) => ({
    ...base,
    background: state.isFocused ? "#fff" : "#fff",
    color: "#000",
  }),
  menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
};

const options = [
  { value: "asd", label: "asd" },
  { value: "qwe", label: "qwe" },
];

export const QuoteCalculator = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-5">
      {/* LEFT: form */}
      <div className="w-full md:w-7/12 flex flex-col gap-5">
        {/* Row 1: Pick-up / Delivery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full">
            <p className="text-sm font-[600] text-[#E6ECF0] mb-2 md:mb-3">
              Pick-up
            </p>
            <Select
              options={options}
              placeholder="ZIP or Address"
              styles={selectStyles}
              menuPortalTarget={
                typeof window !== "undefined" ? document.body : undefined
              }
            />
          </div>

          <div className="w-full">
            <p className="text-sm font-[600] text-[#E6ECF0] mb-2 md:mb-3">
              Delivery
            </p>
            <Select
              options={options}
              placeholder="ZIP or Address"
              styles={selectStyles}
              menuPortalTarget={
                typeof window !== "undefined" ? document.body : undefined
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="w-full">
            <p className="text-sm font-[600] text-[#E6ECF0] mb-2 md:mb-3">
              Year
            </p>
            <Select
              options={options}
              placeholder="Type or select"
              styles={selectStyles}
              menuPortalTarget={
                typeof window !== "undefined" ? document.body : undefined
              }
            />
          </div>

          <div className="w-full">
            <p className="text-sm font-[600] text-[#E6ECF0] mb-2 md:mb-3">
              Vehicle make
            </p>
            <Select
              options={options}
              placeholder="Type or select"
              styles={selectStyles}
              menuPortalTarget={
                typeof window !== "undefined" ? document.body : undefined
              }
            />
          </div>

          <div className="w-full">
            <p className="text-sm font-[600] text-[#E6ECF0] mb-2 md:mb-3">
              Vehicle model
            </p>
            <Select
              options={options}
              placeholder="Type or select"
              styles={selectStyles}
              menuPortalTarget={
                typeof window !== "undefined" ? document.body : undefined
              }
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-5/12 bg-white/10 rounded-[20px] p-6 flex flex-col gap-4">
        <div className="flex md:block gap-2 items-center">
          <p className="text-lg md:text-xl font-[500] text-white">
            Estimated price:{" "}
          </p>
          <p className="text-xl md:text-[28px] text-[#1ABD63] font-bold">$0</p>
        </div>
        <div className="flex md:block gap-2 items-center">
          <p className="text-lg md:text-xl font-[500] text-white">
            Estimate accuracy:
          </p>
          <p className="text-xl md:text-[28px text-white font-bold">0%</p>
        </div>
      </div>
    </div>
  );
};
