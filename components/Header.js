import { IoLocationOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div
      id="header"
      className="section w-screen h-[50vh] sm:h-[70vh] flex flex-col items-center justify-center gap-4"
    >
      <h1
        id="my-element"
        className="text-5xl font-black !leading-normal text-center lg:text-9xl sm:text-7xl md:text-8xl gradient"
      >
        Hi, I am Evelyn.
      </h1>
      <h2 className="flex flex-row items-center justify-center text-base font-semibold text-center md:text-xl text-slate-700">
        <span>
          <IoLocationOutline className="stroke-[48px]" />
        </span>
        Prague, Czechia
      </h2>
      <h3 className="text-xs text-center text-slate-500 md:text-base">
        Welcome to my personal website. Feel free to peruse.
      </h3>
    </div>
  );
}
