import { motion } from "framer-motion";
import { IoArrowBack } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GoBack() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 250, delay: 0.5 }}
      className="sticky z-50 flex items-center justify-between w-screen h-12 px-16 mb-16 text-xs md:px-32 xl:px-64 sm:h-16 sm:text-base top-8"
    >
      <BackIcon />
    </motion.nav>
  );
}

function BackIcon() {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div
      className="relative items-center justify-center h-full overflow-hidden transition-all bg-white cursor-pointer text-blob aspect-square hover:scale-[0.9] hidden min-[390px]:flex text-2xl"
      onClick={handleGoBack}
    >
      <IoArrowBack />
    </div>
  );
}
