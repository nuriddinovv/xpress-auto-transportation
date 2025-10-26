const steps = [
  {
    title: "Get a Quote and Make a Reservation",
    text: `For a price estimate and to reserve your spot, fill out our online
form or call (929) 566-5040. We’ll need details about your vehicle and
destination to provide an accurate quote. Once you approve, a small
deposit secures your reservation.`,
  },
  {
    title: "Vehicle Pick-Up",
    text: `“After confirming your reservation, our professional drivers will
pick up your vehicle, carefully load it onto the trailer, and provide
detailed inspection reports before and after pickup.”`,
  },
  {
    title: "Vehicle Delivery",
    text: `We’ll keep you updated throughout transit and handle all documentation
and customs clearance for a smooth delivery. At arrival, our team will
carefully unload your vehicle and perform a final inspection before
handover.`,
  },
];

export const SimpleSteps = () => {
  return (
    <div className="p-10 max-w-[1200px] mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {steps.map((item, index) => (
          <div key={index} className="max-w-[300px]">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              {item.title}
            </h3>
            <p className="text-sm font-medium text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
