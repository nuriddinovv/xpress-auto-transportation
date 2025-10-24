import type { ReactNode } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type StatsProps = {
     headerIcon: ReactNode;
     headerTitle: string;
     count: number;
};

export default function StatsComponent({ headerIcon, headerTitle, count }: StatsProps) {
     const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.3,
     });

     return (
          <div
               ref={ref}
               style={{
                    background:
                         "radial-gradient(52.53% 163.17% at 50% 50%, rgba(245, 229, 236, 0.408) 0%, rgba(205, 223, 245, 0.424) 100%)",
               }}
               className="px-5 py-4 rounded-2xl"
          >
               <div className="flex gap-3 mb-3 items-center">
                    {headerIcon}
                    <p className="text-xl font-[500] text-mainDark">{headerTitle}</p>
               </div>

               {inView ? (
                    <div className="flex gap-3 text-second">
                         <CountUp className="font-bold text-2xl" start={0} end={count} duration={3} separator=" " />
                         <span className="font-bold text-2xl">+</span>
                    </div>
               ) : (
                    <div className="flex gap-3">
                         <CountUp className="font-bold text-2xl" start={0} end={0} duration={1} separator=" " />
                         <span className="font-bold text-2xl">+</span>
                    </div>
               )}
          </div>
     );
}
