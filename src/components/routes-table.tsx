export const RoutesTable = () => {
  const routes = [
    {
      route: "California to Florida",
      days: "7–10 days",
      miles: "2 900",
      open: "$1 148",
      enclosed: "$1 952",
    },
    {
      route: "Texas to New York",
      days: "7–10 days",
      miles: "1 700",
      open: "$1 148",
      enclosed: "$1 952",
    },
    {
      route: "Illinois to Arizona",
      days: "7–10 days",
      miles: "1 800",
      open: "$1 148",
      enclosed: "$1 952",
    },
    {
      route: "California to Florida",
      days: "7–10 days",
      miles: "2 900",
      open: "$1 148",
      enclosed: "$1 952",
    },
    {
      route: "California to Florida",
      days: "7–10 days",
      miles: "2 900",
      open: "$1 148",
      enclosed: "$1 952",
    },
    {
      route: "California to Florida",
      days: "7–10 days",
      miles: "2 900",
      open: "$1 148",
      enclosed: "$1 952",
    },
    {
      route: "California to Florida",
      days: "7–10 days",
      miles: "2 900",
      open: "$1 148",
      enclosed: "$1 952",
    },
    {
      route: "California to Florida",
      days: "7–10 days",
      miles: "2 900",
      open: "$1 148",
      enclosed: "$1 952",
    },
    {
      route: "California to Florida",
      days: "7–10 days",
      miles: "2 900",
      open: "$1 148",
      enclosed: "$1 952",
    },
    {
      route: "California to Florida",
      days: "7–10 days",
      miles: "2 900",
      open: "$1 148",
      enclosed: "$1 952",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto text-center rounded-2xl overflow-hidden border border-gray-200">
      <table className=" min-w-full border border-gray-200 rounded-2xl">
        <thead className="bg-gray-200 rounded-2xl">
          <tr>
            <th className="px-3 py-2 text-cente text-xs font-semibold">
              Popular State-to-State Car shipping Routes
            </th>
            <th className="px-3 py-2 text-center text-xs font-semibold">
              Estimated transport time
            </th>
            <th className="px-3 py-2 text-center text-xs font-semibold">
              Distance (miles)
            </th>
            <th className="px-3 py-2 text-center text-xs font-semibold">
              Open Transport Estimated Price
            </th>
            <th className="px-3 py-2 text-center text-xs font-semibold">
              Enclosed Transport Estimated Price
            </th>
          </tr>
        </thead>
        <tbody>
          {routes.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-200"}>
              <td className="px-4 py-3 text-xs font-medium">{r.route}</td>
              <td className="px-4 py-3 text-xs font-medium">{r.days}</td>
              <td className="px-4 py-3 text-xs font-medium">{r.miles}</td>
              <td className="px-4 py-3 text-xs font-medium">{r.open}</td>
              <td className="px-4 py-3 text-xs font-medium">{r.enclosed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
