import Image from "next/image";
import { IoGlobeOutline, IoLogoGithub } from "react-icons/io5";

// export default function Project({ name, url, github, text, img }) {
//   return (
//     <div className="my-16 lg:my-24 w-screen h-80 min-[450px]:h-[26rem] sm:h-[26rem] md:h-96 flex flex-col items-center justify-center">
//       <div className="group hover:scale-[1.02] hover:shadow-2xl w-4/5 md:w-3/5 3xl:w-1/2 h-full shadow-xl rounded-[2rem] flex gap-2 flex-col items-center lg:items-start justify-start lg:justify-between cursor-pointer transition-all duration-200 overflow-hidden bg-slate-100 hover:bg-slate-50 relative p-8 md:p-16">
//         <div className="relative w-full sm:w-auto sm:h-40 md:h-44 lg:h-48 aspect-video">
//           <Image className="rounded-md" fill src={`/${img}`} alt={name} />
//         </div>
//         <div className="flex flex-col items-start justify-between gap-4">
//           <div>
//             <h1 className="text-xl font-bold md:text-3xl lg:text-5xl gradient">
//               {name}
//             </h1>
//             <p className="text-xs font-light lg:text-start lg:text-lg">
//               {text}
//             </p>
//           </div>
//           <div className="flex flex-row items-center justify-center gap-4">
//             <Button href={url} Icon={IoGlobeOutline} text="Website" />
//             <Button href={github} Icon={IoLogoGithub} text="GitHub" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Button({ Icon, href, text }) {
  return (
    <a href={href} target="_blank">
      <button className="flex flex-row items-center justify-center gap-2 p-2 py-2 text-base transition-all duration-200 bg-white border-2 border-white rounded-md shadow-md md:py-2 md:p-4 justify-self-end group-hover:scale-105 group-hover:shadow-lg hover:bg-slate-100 group/button">
        <Icon className="transition-all duration-200 group-hover/button:scale-110" />
        <span className="hidden transition-all duration-200 md:block group-hover/button:font-medium">
          {text}
        </span>
      </button>
    </a>
  );
}

export default function Project({ name, url, github, text, img }) {
  return (
    <div className="transition-all duration-200 flex flex-col md:flex-row justify-center gap-4 w-2/3 md:w-4/5 lg:w-3/5 my-4 lg:my-8 bg-slate-100 hover:bg-slate-50 hover:scale-[1.02] hover:shadow-2xl shadow-xl rounded-[2rem] p-8">
      <div className="relative w-full md:w-1/2 2xl:w-1/3 aspect-video">
        <Image className="rounded-md" fill src={`/${img}`} alt={name} />{" "}
      </div>
      <div className="flex flex-col items-center justify-between w-full gap-4 md:w-1/2 md:items-start md:gap-0 2xl:w-2/3 ">
        <div className="flex-grow">
          <h1 className="text-xl !leading-[1.2] font-bold text-center md:text-left md:text-3xl lg:text-4xl xl:text-5xl gradient">
            {name}
          </h1>
          <p className="overflow-hidden text-xs font-light text-center md:text-left max-h-32 lg:text-start md:text-base xl:text-lg">
            {text}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          {url ? (
            <Button href={url} Icon={IoGlobeOutline} text="Website" />
          ) : null}
          {github ? (
            <Button href={github} Icon={IoLogoGithub} text="GitHub" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
