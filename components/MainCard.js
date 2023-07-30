import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

export default function MainCard({
  children,
  title,
  paragraph,
  buttonTitle,
  id,
}) {
  return (
    <div
      id={id}
      className="section my-16 lg:my-24 w-screen h-80 min-[450px]:h-[26rem] sm:h-[26rem] md:h-96 flex flex-col items-center justify-center "
    >
      <Link
        href={`/${id}`}
        className="group hover:scale-[1.02] hover:shadow-2xl w-4/5 md:w-3/5 3xl:w-1/2 h-full shadow-xl rounded-[2rem] flex gap-2 flex-col items-center lg:items-start justify-start lg:justify-between cursor-pointer transition-all duration-200 overflow-hidden bg-slate-100 hover:bg-slate-50 relative p-8 md:p-16"
      >
        {children}
        <div className=" text-slate-700">
          <h1 className="text-4xl font-extrabold leading-[1.2] text-center transition-all duration-200 lg:text-start sm:text-6xl sm:leading-[1.2] gradient">
            {title}
          </h1>
          <p className="text-sm font-light text-center transition-all duration-200 lg:text-start group-hover:font-medium lg:text-lg">
            {paragraph}
          </p>
        </div>
        <button className="flex-row items-center justify-center hidden gap-1 p-1 text-xs transition-all duration-200 bg-white border-2 border-white rounded-md shadow-md lg:flex md:py-2 md:p-4 md:gap-2 md:text-base group-hover:scale-110 group-hover:shadow-lg hover:bg-slate-100 group/button">
          <span>{buttonTitle}</span>
          <IoArrowForward className="transition-all duration-200 group-hover/button:translate-x-[0.2rem]" />
        </button>
      </Link>
    </div>
  );
}
