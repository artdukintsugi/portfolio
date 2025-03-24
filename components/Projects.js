import Image from "next/image";

import MainCard from "./MainCard";

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
