import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
        router.push('/')
    }, 5000);

    return () => clearTimeout(timer)
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-60">
      <h1 className="font-bold text-blue-600 text-9xl">404</h1>
      <h6 className="text-5xl font-bold text-gray-600">
        <span className="text-red-500">Oops!</span> Page not found
      </h6>
      <p className="text-gray-500 mt-3">
        The page you&apos;re looking for doesn&apos;t exist

      </p>
      <Link legacyBehavior href="/">
        <a className="bg-blue-600 mt-5 font-semibold px-6 py-2 text-sm">
          Go Home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
