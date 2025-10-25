import { useMemo, useState, useCallback } from "react";
import {
     ComposableMap,
     Geographies,
     Geography,
     Line,
     Annotation,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";

// TopoJSON -> US states
const GEO_URL =
     "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Helper: get short fill color for each state
function getStateFill(
     geoId: string,
     pickupId: string | null,
     dropoffId: string | null,
     isHovered: boolean
) {
     if (geoId === pickupId) return "#FF4E00";
     if (geoId === dropoffId) return "#244567";
     if (isHovered) return "#60A5FA";

     // Har xil ko‘k tuslar
     const blues = [
          "#A3D1FF",
          "#90C4FF",
          "#7AB8FF",
          "#66ABFF",
          "#4D9EFF",
          "#3392FF",
          "#1D86FF",
     ];


     const index = parseInt(geoId, 10) % blues.length;
     return blues[index];
}

type SelectedPair = {
     pickup?: {
          id: string;
          name: string;
          coord: [number, number];
     };
     dropoff?: {
          id: string;
          name: string;
          coord: [number, number];
     };
};

export default function UsaMap() {
     const [hoverName, setHoverName] = useState<string | null>(null);
     const [selection, setSelection] = useState<SelectedPair>({});
     const handleStateClick = useCallback(
          (geo: any) => {
               const id = geo.id; // numeric FIPS code string
               const name = geo.properties.name as string;

               // centroid (lng, lat)
               const [lng, lat] = geoCentroid(geo) as [number, number];

               setSelection(prev => {
                    // Step 1: set pickup
                    if (!prev.pickup) {
                         return {
                              pickup: { id, name, coord: [lng, lat] },
                         };
                    }
                    // Step 2: set dropoff (if pickup exists but dropoff not yet)
                    if (!prev.dropoff && prev.pickup.id !== id) {
                         return {
                              pickup: prev.pickup,
                              dropoff: { id, name, coord: [lng, lat] },
                         };
                    }
                    // Step 3: if both chosen -> start over with new pickup
                    return {
                         pickup: { id, name, coord: [lng, lat] },
                    };
               });
          },
          [setSelection]
     );

     // line coords between pickup & dropoff (in [lng,lat])
     const lineCoords = useMemo(() => {
          if (selection.pickup && selection.dropoff) {
               return [selection.pickup.coord, selection.dropoff.coord];
          }
          return null;
     }, [selection]);

     return (
          <div
               className="w-full mx-auto rounded-2xl text-white"

          >
               <div
                    className="md:min-h-[480px] relative"
               >
                    <ComposableMap
                         projection="geoAlbersUsa"
                         className="w-full h-fit"
                    >
                         <Geographies geography={GEO_URL}>
                              {({ geographies }) => (
                                   <>
                                        {geographies.map((geo) => {
                                             const thisId = geo.id as string;
                                             const thisName = geo.properties.name as string;
                                             const isHovered = hoverName === thisName;

                                             return (
                                                  <Geography
                                                       key={thisId}
                                                       geography={geo}
                                                       fill={getStateFill(
                                                            thisId,
                                                            selection.pickup?.id || null,
                                                            selection.dropoff?.id || null,
                                                            isHovered
                                                       )}
                                                       stroke="white"
                                                       strokeWidth={1}
                                                       style={{
                                                            default: { outline: "none", cursor: "pointer" },
                                                            hover: { outline: "none", cursor: "pointer" },
                                                            pressed: { outline: "none", cursor: "pointer" },
                                                       }}
                                                       onMouseEnter={() => {
                                                            setHoverName(thisName);
                                                       }}
                                                       onMouseLeave={() => {
                                                            setHoverName((prev) =>
                                                                 prev === thisName ? null : prev
                                                            );
                                                       }}
                                                       onClick={() => handleStateClick(geo)}
                                                  />
                                             );
                                        })}

                                        {lineCoords && (
                                             <Line
                                                  from={lineCoords[0]}
                                                  to={lineCoords[1]}
                                                  stroke="#FFFFFF"
                                                  strokeWidth={2}
                                                  strokeLinecap="round"
                                                  strokeDasharray="4 4"
                                             />
                                        )}

                                        {selection.pickup && (
                                             <Annotation
                                                  subject={selection.pickup.coord}
                                                  dx={-10}
                                                  dy={-10}
                                                  connectorProps={{
                                                       stroke: "#FF4E00",
                                                       strokeWidth: 2,
                                                       strokeLinecap: "round",
                                                  }}
                                             >
                                                  <text
                                                       x={-6}
                                                       y={4}
                                                       textAnchor="start"
                                                       style={{
                                                            fontWeight: 700,
                                                            fontSize: 14,
                                                            fill: "#244567",
                                                       }}
                                                  >
                                                       PICKUP
                                                  </text>
                                             </Annotation>
                                        )}

                                        {selection.dropoff && (
                                             <Annotation
                                                  subject={selection.dropoff.coord}
                                                  dx={10}
                                                  dy={10}
                                                  connectorProps={{
                                                       stroke: "#244567",
                                                       strokeWidth: 2,
                                                       strokeLinecap: "round",
                                                  }}
                                             >
                                                  <text
                                                       x={-45}
                                                       y={4}
                                                       style={{
                                                            fontWeight: 700,
                                                            fontSize: 14,
                                                            fill: "#FF4E00",
                                                       }}
                                                  >
                                                       DROPOFF
                                                  </text>
                                             </Annotation>
                                        )}
                                   </>
                              )}
                         </Geographies>
                    </ComposableMap>
               </div>
          </div>
     );
}
