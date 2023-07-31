import Image from "next/image";
import { IoGlobeOutline, IoLogoGithub } from "react-icons/io5";

export default function Project({ name, url, github, text, img }) {
  return (
    <div className="my-4 mx-16 shadow-xl p-8 bg-slate-100 hover:bg-slate-50 group hover:scale-[1.02] hover:shadow-2xl transition-all duration-200 rounded-[2rem] flex flex-row gap-4">
      <Image
        className="rounded-md"
        width={300}
        height={300}
        src={`/${img}`}
        alt={name}
      />
      <div className="flex flex-col items-start justify-between">
        <div>
          <h1 className="text-xl font-bold md:text-3xl lg:text-5xl gradient">
            {name}
          </h1>
          <p>{text}</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Button href={url} Icon={IoGlobeOutline} text="Website" />
          <Button href={github} Icon={IoLogoGithub} text="GitHub" />
        </div>
      </div>
    </div>
  );
}

function Button({ Icon, href, text }) {
  return (
    <button
      href={href}
      className="flex flex-row items-center justify-center gap-1 p-1 text-xs transition-all duration-200 bg-white border-2 border-white rounded-md shadow-md justify-self-end md:py-2 md:p-4 md:gap-2 md:text-base group-hover:scale-105 group-hover:shadow-lg hover:bg-slate-100 group/button"
    >
      <Icon className="transition-all duration-200 group-hover/button:scale-110" />
      <span className="transition-all duration-200 group-hover/button:font-medium">
        {text}
      </span>
    </button>
  );
}
