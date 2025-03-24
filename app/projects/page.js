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
          name="Password generator"
          img="passcreator.png"
          url="https://password-generator-yonas.netlify.app/"
          github="https://github.com/yonysek/password-creator"
          text="Password generator app with custom settings created in Vue.js and TailwindCSS."
        />
        <Project
          name="Haunted House"
          img="hauntedhouse.png"
          url="https://haunted-house-yonysek.vercel.app/"
          github="https://github.com/yonysek/haunted-house"
          text="A small scene created using Three.js with imported materials."
        />
        <Project
          name="Galaxy Generator"
          img="galaxygenerator.png"
          url="https://galaxy-generator-yonysek.vercel.app/"
          github="https://github.com/yonysek/galaxy-generator"
          text="A small scene created using Three.js. You can tweak different values for various results"
        />
        <Project
          name="Discord clone"
          img="dcclone.png"
          url="https://discord-clone-yonas.vercel.app/"
          github="https://github.com/yonysek/discord-clone"
          text="A Discord clone with implemented dark mode and animation from Framer Motion made using Next.js with TailwindCSS."
        />
        <Project
          name="Procedural terrain shader"
          img="procedural_terrain.png"
          github="https://github.com/artdukintsugi/44-procedural-terrain-shader"
          url="https://procedural-terrain-shader.netlify.app/"
          text="Procedural terrain shader made with Three.js."
        />
        <Project
          name="Portal scene with R3F"
          img="portalscene_r3f.png"
          github="https://github.com/artdukintsugi/61-portal-scene-with-r3f"
          url="https://portal-scene-with-r3f.netlify.app/"
          text="Portal scene created in Blender with React Three Fiber."
        />
        <Project
          name="Marble Race"
          img="marble_race.png"
          github="https://github.com/artdukintsugi/66-create-a-game-with-r3f"
          url="https://marble-race-threejs.netlify.app/"
          text="Simple game created with Three.js."
        />
        <Project
          name="Portal scene"
          img="portalscene.png"
          github="https://github.com/artdukintsugi/portal-scene"
          url="https://portal-scene-evelyn.netlify.app/"
          text="Portal scene created in Blender with Three.js."
        />
        <Project
          name="Earth shader"
          img="earth.png"
          github="https://github.com/artdukintsugi/38-earth-shaders-final"
          url="https://earth-shaders-threejs.netlify.app/"
          text="Earth shader created with Three.js."
        />
        <Project
          name="Raging sea shaders"
          img="raging_sea.png"
          github="https://github.com/artdukintsugi/36-raging-sea-shading-shaders-final"
          url="https://raging-sea-shading-shaders.netlify.app/"
          text="Shaders created with Three.js."
        />
        <Project
          name="Forkify"
          img="forkify.png"
          github="https://github.com/jonycorn/forkify-course-project"
          url="https://forkify-yonas.netlify.app/"
          text="Recipe app created with JavaScript."
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
