import Image from "next/image";
import { IoGlobeOutline, IoLogoGithub } from "react-icons/io5";

function Button({ Icon, href, text }) {
  return (
    <a href={href} target="_blank">
      <button className="flex flex-row items-center justify-center w-full gap-2 p-2 py-2 text-base transition-all duration-200 bg-white border-2 border-white rounded-md shadow-md md:w-auto md:py-2 md:p-4 justify-self-end group-hover:scale-105 group-hover:shadow-lg hover:bg-slate-100 group/button">
        <Icon className="transition-all duration-200 group-hover/button:scale-110" />
        <span className="hidden transition-all duration-200 md:block group-hover/button:font-medium">
          {text}
        </span>
      </button>
    </a>
  );
}

export default function Project({ name, url, github, text, img }) {
  let links;

  if (github && url) {
    links = 2;
  } else if (github || url) {
    links = 1;
  } else {
    links = 0;
  }

  return (
    <div className="transition-all duration-200 flex flex-col md:flex-row justify-center gap-4 w-2/3 md:w-4/5 3xl:w-3/5 my-4 lg:my-8 bg-slate-100 hover:bg-slate-50 hover:scale-[1.02] hover:shadow-2xl shadow-xl rounded-[2rem] p-8">
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
        <div
          style={{ gridTemplateColumns: `repeat(${links}, minmax(0, 1fr))` }}
          className="grid w-full grid-rows-1 gap-4 md:w-auto md:flex md:flex-row md:items-center md:justify-center"
        >
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
