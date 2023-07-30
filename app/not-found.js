"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page after .5 seconds
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 500);

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-4">
      <h1 className="z-10 px-4 py-2 text-2xl font-black leading-normal text-center border-2 shadow-lg rounded-xl bg- border-slate-400 gradient lg:text-5xl sm:text-3xl md:text-4xl bg-slate-50">
        404 - Page Not Found
      </h1>
      <motion.h3
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        className="text-xs text-center text-slate-500 md:text-base"
      >
        Redirecting to the home page...
      </motion.h3>
    </div>
  );
};

export default NotFound;
