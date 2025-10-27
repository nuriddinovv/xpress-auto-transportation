import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuoteCalculator from "../components/quote-calculator";
import StatsComponent from "../components/stats-component";
import cobaltKey from "/cobaltKey.svg";
import homeAboutSect from "/homeAboutSect.svg";
import homeBg from "/homeBg.svg";
import truckAndSafe from "/truckAndSafe.svg";
import twoHand from "/twoHand.svg";
import centraldispatch from "/centraldispatch.svg";
import dialpad from "/dialpad.svg";
import fmcsa from "/fmcsa.svg";
import transportreviews from "/transportreviews.svg";
import roadmap from "/roadmap.svg";
import truck from "/truck.svg";
import {
  faTruckFast,
  faFaceSmile,
  faHashtag,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import ServiceHighlightsCard from "../components/service-highlights-card";
import CallBackForm from "../components/call-back-form";
import Marquee from "react-fast-marquee";
import { AccordionComponent } from "../components/accordion/Accordion";
import UsaMap from "../components/usa-map";
import BlogsCard from "../components/blogs-card";
import AutoTransportServices from "../components/auto-transport-services";
import { ReviewCard } from "../components/review-card";
import googlereviews from "/googlereviews.svg";
import { Rating } from "@mui/material";
import { WhyChooseAccordion } from "../components/whychooseacordion";
import { RoutesTable } from "../components/routes-table";
import { SimpleSteps } from "../components/simple-steps";

export default function Home() {
  const stats = [
    { icon: faTruckFast, title: "Cars transported", count: 1500 },
    { icon: faFaceSmile, title: "Satisfied clients", count: 1200 },
    { icon: faHashtag, title: "Carrier Network", count: 2500 },
    { icon: faStar, title: "5 Star Reviews", count: 1000 },
  ];

  const partners = [
    { id: 1, src: transportreviews, alt: "Transport Reviews" },
    { id: 2, src: fmcsa, alt: "FMCSA" },
    { id: 3, src: centraldispatch, alt: "Central Dispatch" },
    { id: 4, src: dialpad, alt: "Dialpad" },
  ];
  return (
    <>
      {/* section 1 */}
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(22,21,23,1), rgba(22,21,23,0.74), rgba(22,21,23,0)), url(${homeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",

          minHeight: "800px",
        }}
      >
        <div className="container py-[32px] md:py-[68px]">
          <div className="gap-3 mb-8 md:px-12">
            <p className="font-bold md:text-[2.5rem] text-[1.5rem] max-w-[685px] mx-auto text-center text-white">
              Reliable Door-to-Door Auto Transport & Car Shipping Services
            </p>
            <p className="font-[500] md:text-lg text-wrap text-white/65 text-center">
              <span className="text-main">Xpress Auto Transportation</span>:
              Your reliable solution for secure and efficient vehicle shipping
              nationwide. We offer hassle-free transportation services for cars,
              motorcycles, and SUVs, ensuring timely delivery and peace of mind.
              Contact us now to experience our top-quality service and
              competitive pricing.
            </p>
          </div>

          <div className="w-full p-4 rounded-[28px] backdrop-blur-[200px] bg-white/20 border-2 border-white/10 gap-6 flex">
            <QuoteCalculator />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="container mt-5 md:-mt-20 lg:-mt-60 z-10">
        <div className="grid gap-2 md:gap-5 w-full grid-cols-12 auto-rows-[minmax(215px,auto)] grid-flow-dense">
          <div
            style={{
              backgroundImage: `url(${homeAboutSect})`,
              backgroundSize: "cover",
              width: "100%",
            }}
            className="col-span-12 bg-right-top  lg:col-span-8 rounded-2xl py-5 px-6 min-h-[215px] grid md:grid-cols-2"
          >
            <div>
              <p className="mb-2 font-bold text-white text-2xl">About Us</p>
              <p className="text-sm text-white">
                At Xpress Auto Transportation, we are dedicated to providing
                exceptional vehicle shipping services tailored to your needs.
                With years of experience, we’ve become a trusted name in the
                transportation business.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${truckAndSafe})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
            className="col-span-12 lg:col-span-4 lg:row-span-2 bg-[#090F14] rounded-2xl py-5 px-6"
          >
            <p className="mb-2 font-bold text-white text-2xl">
              Safe & Reliable Delivery
            </p>
            <p className="text-sm text-white">
              Our skilled professionals ensure the safe and timely delivery of
              your vehicles, treating each shipment with the utmost care
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(${cobaltKey})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              height: "100%",
            }}
            className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl py-5 px-6 min-h-[215px] bg-[#090F14]"
          >
            <p className="mb-2 font-bold text-white text-2xl">
              Hassle-Free Experience
            </p>
            <p className="text-sm text-white">
              Choose Xpress Auto Transportation for a reliable and stress-free
              shipping journey
            </p>
          </div>

          <div
            style={{
              backgroundImage: `url(${twoHand})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              height: "100%",
            }}
            className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl py-5 px-6 min-h-[215px] bg-[#090F14]"
          >
            <p className="mb-2 font-bold text-white text-2xl">
              Customer-Centric Service
            </p>
            <p className="text-sm text-white w-3/4">
              We take pride in our transparent and customer-focused approach,
              offering competitive pricing and open communication.
            </p>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="container col-span-12 py-4 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, i) => (
            <StatsComponent
              key={i}
              count={item.count}
              headerTitle={item.title}
              headerIcon={
                <FontAwesomeIcon className="text-second" icon={item.icon} />
              }
            />
          ))}
        </div>
      </div>
      {/* section4 */}
      <div className="min-h-[400px]">
        <h1 className="text-center text-mainDark font-bold text-2xl md:text-[32px]">
          WHY CHOOSE XPRESS AUTO TRANSPORTATION?
        </h1>
        <WhyChooseAccordion />
      </div>
      {/* section 5 */}
      <div className="py-4 md:py-12">
        <p className="text-center text-mainDark font-bold text-2xl md:text-[32px]">
          WHAT MAKES US STAND OUT?
        </p>
        <Marquee
          speed={30}
          pauseOnHover
          gradient={true}
          gradientWidth={50}
          autoFill
          className="mt-9"
        >
          <ServiceHighlightsCard />
          <ServiceHighlightsCard />
          <ServiceHighlightsCard />
        </Marquee>
        <Marquee
          speed={30}
          pauseOnHover
          gradient={true}
          gradientWidth={50}
          direction="right"
          className="mt-9"
        >
          <ServiceHighlightsCard />
          <ServiceHighlightsCard />
          <ServiceHighlightsCard />
          <ServiceHighlightsCard />
          <ServiceHighlightsCard />
          <ServiceHighlightsCard />
          <ServiceHighlightsCard />
          <ServiceHighlightsCard />
        </Marquee>
      </div>
      {/* MAP section */}
      <div className="container py-4 md:py-12 md:min-h-fit">
        <p className="text-center text-mainDark font-bold text-2xl md:text-[32px]">
          CHOOSE THE STATE
        </p>
        <p className="text-center text-base text-lightGray">
          Choose the state to see which services is available{" "}
        </p>
        <UsaMap />
      </div>
      <div className="container py-4 md:py-12">
        <p className="font-bold text-2xl md:text-[32px] uppercase">
          Our Auto Transport Services
        </p>
        <p className="text-base text-lightGray mb-8 mt-2 md:w-[80%]">
          At Xpress Auto Transportation, we offer a range of services tailored
          to meet your specific needs. Whether you need to transport a family
          car, luxury vehicle, or an entire fleet, we provide reliable car
          shipping solutions that ensure your vehicle arrives safely and on
          time.
        </p>
        <div className=" flex flex-col gap-7">
          {[1, 2, 3, 4].map((item) => (
            <AutoTransportServices key={item} />
          ))}
        </div>
      </div>
      {/* table section */}
      <div className="my-8">
        <h1 className="text-center text-mainDark font-bold text-2xl md:text-[32px] my-8">
          OUR AUTO TRANSPORT SERVICES
        </h1>
        <RoutesTable />
      </div>
      {/* CallBack form */}
      <div className="container mt-28">
        <CallBackForm />
      </div>
      {/* carshippingquote img */}
      <div className="my-8">
        <div
          className="py-14"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(25, 26, 29, 0.3) 0%, rgba(25, 26, 29, 0.9) 70%), url(${truck})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            width: "100%",
          }}
        >
          <div className="container">
            <p className="font-bold text-2xl md:text-[32px] pb-4 text-white ">
              Car shipping quote
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 ">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div className="bg-main w-2 h-2 rounded-full"></div>
                  <p className="text-white text-base">
                    Get your quote fast and simple
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-main w-2 h-2 rounded-full"></div>
                  <p className="text-white text-base">
                    High accuracy in price estimation
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 py-2">
                <div className="flex gap-2 items-center">
                  <div className="bg-main w-2 h-2 rounded-full"></div>
                  <p className="text-white text-base">
                    Instant car shipping calculator
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-main w-2 h-2 rounded-full"></div>
                  <p className="text-white text-base">
                    Check delivery time based on distance
                  </p>
                </div>
              </div>
              <div className="px-2 py-2">
                <button className="bg-main w-full px-6 py-3 rounded-lg text-white font-semibold">
                  Car shipping calculator
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* simple steps section */}
      <div>
        <h1 className="text-center text-mainDark font-bold text-2xl md:text-[32px] my-8 mt-20">
          SIMPLE STEPS
        </h1>
        <div className="justify-center flex">
          <img src={roadmap} width="70%" alt="404" />
        </div>
        <SimpleSteps />
      </div>

      {/* Partners section */}
      <div className="container mt-11">
        <h1 className="text-2xl md:text-[32px] mt-4 font-bold">Partners</h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner.id} className="w-full px-4 mb-6">
              <div className="w-full h-full transition-all duration-300 bg-white border border-[#F1F1F5] hover:shadow-lg rounded-xl p-10 flex items-center justify-center">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-12 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* customer review */}
      <div className="bg-white w-full py-12">
        <div className="container mx-auto max-w-[1170px] px-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b border-[#E1E6EC] pb-4">
            <h1 className="text-2xl md:text-[32px] font-bold text-[#1A1F24] uppercase">
              Customer Reviews
            </h1>

            <button className="mt-4 md:mt-0 flex items-center gap-2 border border-[#E1E6EC] rounded-xl px-6 py-2 cursor-pointer text-[#1A1F24] hover:bg-gray-50 transition">
              <span className="text-sm font-medium">
                Read and write reviews
              </span>
              <FontAwesomeIcon icon={"chevron-right"} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-3">
              <div className="flex items-center flex-wrap gap-3">
                <img
                  src={googlereviews}
                  width={200}
                  alt="Google Reviews"
                  className="h-[32px] w-auto"
                />
                <div className="flex items-center">
                  <p className="text-2xl text-[#363D45] font-semibold mr-3">
                    4.9
                  </p>
                  <Rating value={5} readOnly size="large" />
                </div>
                <div className="flex items-center flex-wrap text-sm text-[#4B5563]">
                  <p>Based on&nbsp;</p>
                  <p className="text-[#BB2A2A] underline cursor-pointer">
                    159 reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="text-[#363D45] font-normal text-base">
              Helping each other make better choices
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </div>
      {/* Blogs section */}
      <div className=" container py-4 md:py-12">
        <p className="text-center text-mainDark font-bold text-2xl md:text-[32px] mb-5 md:mb-7">
          BLOG POSTS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4].map((item) => (
            <BlogsCard key={item} />
          ))}
        </div>
      </div>
      {/* Accordion section */}
      <div className="py-4 md:py-12 container">
        <h1 className="font-bold text-2xl mb-10 md:text-[32px] text-mainDark text-center">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div>
          <AccordionComponent />
        </div>
      </div>
    </>
  );
}
