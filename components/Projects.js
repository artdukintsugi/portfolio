import Image from "next/image";

import MainCard from "./MainCard";

// export default function Projects() {
//   return (
//     <div className="my-8 md:my-16 w-screen h-[37vh] min-[450px]:h-[40vh]  sm:h-[44vh]  lg:h-[50vh] flex flex-col items-center justify-center ">
//       <div className="group hover:scale-[1.02] hover:shadow-2xl w-4/5 md:w-3/5 h-full shadow-xl rounded-[2rem] flex gap-2 flex-col items-center lg:items-start justify-start lg:justify-between cursor-pointer transition-all duration-200 overflow-hidden bg-slate-100 hover:bg-slate-50 relative p-8 md:p-16">
//         {/* <Image
//             className="object-cover transition-all duration-200 delay-50 group-hover:scale-105"
//             src="/website_mockups.png"
//             alt="mockup with websites"
//             fill
//           /> */}
//         <Image
//           src="/dcclone.png"
//           alt="discord clone"
//           width={500}
//           height={500}
//           className="absolute z-10 transition-all duration-200 rounded-lg shadow-md -bottom-6 md:-bottom-36 lg:-bottom-12 -right-16 lg:-right-36 xl:right-0 group-hover:shadow-xl 2xl:right-36 group-hover:scale-105"
//         />
//         <Image
//           src="/passcreator.png"
//           alt="password creator app"
//           width={500}
//           height={500}
//           className="absolute transition-all duration-200 rounded-lg shadow-md -left-24 -bottom-8 md:-bottom-24 group-hover:shadow-xl lg:-top-4 lg:left-2/3 xl:left-1/2 2xl:-right-4 group-hover:scale-105 "
//         />
//         <div className=" text-slate-700">
//           <h1 className="text-4xl font-bold leading-[1.2] text-center transition-all duration-200 lg:text-start sm:text-6xl sm:leading-[1.2] gradient">
//             Projects
//           </h1>
//           <p className="text-sm font-light text-center transition-all duration-200 lg:text-start group-hover:font-medium lg:text-lg">
//             Click to see what I’ve been working on.
//           </p>
//         </div>
//         <button className="flex-row items-center justify-center hidden gap-1 p-1 text-xs transition-all duration-200 bg-white border-2 border-white rounded-md shadow-md lg:flex md:py-2 md:p-4 md:gap-2 md:text-base group-hover:scale-110 group-hover:shadow-lg hover:bg-slate-100 group/button">
//           <span>See for yourself!</span>
//           <IoArrowForward className="transition-all duration-200 group-hover/button:translate-x-[0.2rem]" />
//         </button>
//       </div>
//     </div>
//   );
// }

export default function Projects() {
  return (
    <MainCard
      title="Projects"
      paragraph="See what I've been working on."
      buttonTitle="See for yourself!"
      id="projects"
    >
      {/* <Image
            className="object-cover transition-all duration-200 delay-50 group-hover:scale-105"
            src="/website_mockups.png"
            alt="mockup with websites"
            fill
          /> */}
      <Image
        src="/dcclone.png"
        alt="discord clone"
        width={500}
        height={500}
        className="absolute z-10 transition-all duration-200 rounded-lg shadow-md -bottom-6 md:-bottom-36 lg:-bottom-12 -right-16 lg:-right-56 xl:-right-16 3xl:-right-0 group-hover:shadow-xl 2xl:right-16 group-hover:scale-105"
      />
      <Image
        src="/passcreator.png"
        alt="password creator app"
        width={500}
        height={500}
        className="absolute transition-all duration-200 rounded-lg shadow-md -left-24 -bottom-8 md:-bottom-24 group-hover:shadow-xl lg:-top-4 lg:left-2/3 xl:left-2/3 2xl:-right-left-full group-hover:scale-105 "
      />
    </MainCard>
  );
}
