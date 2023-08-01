"use client";

import Project from "../../components/Project.js";
import Footer from "../../components/Footer.js";
import GoBack from "../../components/GoBack.js";

export default function Projects() {
  return (
    <div>
      <GoBack />
      <header className="flex flex-col items-center justify-center gap-4 p-8 px-16 sm:p-16 lg:p-32 sm:px-32 h-30 ">
        <h1 className="text-5xl font-black !leading-normal text-center lg:text-9xl sm:text-7xl md:text-8xl gradient ">
          Projects
        </h1>
        <h3 className="max-w-3xl text-xs text-center text-slate-500 md:text-base">
          Have a look at my biggest projects. The rest can be found at my GitHub
          or nowhere because they are not share worthy. If you have any
          questions please feel free to contact me.
        </h3>
      </header>
      <div className="flex flex-col items-center justify-center w-screen">
        <Project
          name="My portfolio"
          img="portfolio.png"
          github="https://github.com/yonysek/portfolio"
          text="My surprisingly biggest project is this portfolio. Created with Next.js using TailwindCSS."
        />
        <Project
          name="Discord clone"
          img="dcclone.png"
          url="https://discord-clone-yonas.vercel.app/"
          github="https://github.com/yonysek/discord-clone"
          text="A Discord clone with implemented dark mode and animation from Framer Motion made using Next.js with TailwindCSS."
        />
        <Project
          name="Password generator"
          img="passcreator.png"
          url="https://password-generator-yonas.netlify.app/"
          github="https://github.com/yonysek/password-creator"
          text="Password generator app with custom settings created in Vue.js and TailwindCSS (obviously)."
        />

        <h1 className="z-10 px-4 py-2 my-24 text-2xl font-black leading-normal text-center border-2 shadow-lg opacity-50 rounded-xl bg- border-slate-400 gradient lg:text-5xl sm:text-3xl md:text-4xl bg-slate-50">
          MORE COMING!
        </h1>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
