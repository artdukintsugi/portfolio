import Project from "../../components/Project.js";
import Footer from "../../components/Footer.js";

export default function Projects() {
  return (
    <div>
      <header className="flex flex-col items-center justify-center gap-4 p-32 px-16 sm:px-32 h-30 ">
        <h1 className="text-5xl font-black !leading-normal text-center lg:text-9xl sm:text-7xl md:text-8xl gradient text-fuchsia-700 sm:text-amber-500 md:text-blue-700 lg:text-red-500 xl:text-emerald-500">
          Projects
        </h1>
        <h3 className="max-w-3xl text-xs text-center text-slate-500 md:text-base">
          Have a look at my biggest projects. The rest can be found at my GitHub
          or nowhere because they are not share worthy. If you have any
          questions please feel free to contact me.
        </h3>
      </header>
      <div className="flex flex-col items-center justify-center">
        <Project
          name="Discord clone"
          img="dcclone.png"
          url="https://discord-clone-yonas.vercel.app/"
          text="Very sofisticated Discord clone that is surely working LOL"
        />
        <Project
          name="Discord clone"
          img="dcclone.png"
          url="https://discord-clone-yonas.vercel.app/"
          text="Very sofisticated Discord clone that is surely working LOL"
        />
        <Project
          name="Discord clone"
          img="dcclone.png"
          url="https://discord-clone-yonas.vercel.app/"
          text="Very sofisticated Discord clone that is surely working LOL"
        />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
