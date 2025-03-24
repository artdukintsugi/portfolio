"use client";

import Footer from "../../components/Footer.js";
import GoBack from "../../components/GoBack.js";

import Image from "next/image";

export default function About() {
  function calculateAgeAndPercentage(birthDate) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const birthYear = birthDate.getFullYear();

    let age = currentYear - birthYear;
    let nextBirthday = new Date(
      currentYear + 1,
      birthDate.getMonth(),
      birthDate.getDate()
    );

    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();

    if (currentMonth < birthMonth) {
      age--;
      nextBirthday = new Date(currentYear, birthMonth, birthDate.getDate());
    } else if (currentMonth === birthMonth) {
      const currentDay = currentDate.getDate();
      const birthDay = birthDate.getDate();

      if (currentDay < birthDay) {
        age--;
        nextBirthday = new Date(currentYear, birthMonth, birthDay);
      }
    }

    console.log(age, nextBirthday);

    const timeDiff = nextBirthday - currentDate;
    const percentage = (1 - timeDiff / (1000 * 60 * 60 * 24 * 365)) * 100;
    return { age, percentage };
  }

  const { age, percentage } = calculateAgeAndPercentage(new Date("2004-07-19"));

  return (
    <div className="">
      <GoBack />
      <div className="my-16 lg:my-24 px-16 md:px-32 xl:px-64 grid grid-cols-[1fr_2fr] grid-rows-4 gap-4">
        <div className="flex items-center justify-start col-span-2 gap-8 md:gap-16 card">
          <div className="relative overflow-hidden rounded-full w-36 sm:w-44 md:w-64 aspect-square">
            <Image
              sizes="200px"
              alt="photo of me again"
              src="/me_2.jpeg"
              fill
            />
          </div>
          <div className="flex flex-col items-start w-full h-full justify-evenly">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl gradient !leading-[1.2] font-extrabold breakpoints">
              Evelyn Vybíralů
            </h1>
            <div className="w-full">
              <h2 className="text-base font-semibold sm:text-lg">
                Level (Age)
              </h2>

              <div className="flex items-center justify-center gap-4">
                <span className="text-base font-extrabold md:text-lg ">
                  {age}
                </span>
                <div className="w-full h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full bg-slate-700"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-base font-bold opacity-50 md:text-lg">
                  {age + 1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
