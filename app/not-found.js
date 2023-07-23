"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page after 2 seconds (adjust the delay as needed)
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 400);

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the home page...</p>
    </div>
  );
};

export default NotFound;
