import Image from "next/image";

import MainCard from "./MainCard";

export default function AboutMe() {
  return (
    <MainCard
      title="About Me"
      paragraph="I am just a person after all."
      buttonTitle="Get to know me!"
      id="about"
    >
      <div className="absolute rounded-[2rem] h-2/3 lg:h-full w-full lg:w-2/3 -bottom-12  lg:-right-48 lg:top-0 overflow-hidden ">
        <Image
          src="/me.jpeg"
          alt="photo of me"
          fill
          className="object-cover transition-all duration-200 group-hover:scale-105"
        />
      </div>
    </MainCard>
  );
}
