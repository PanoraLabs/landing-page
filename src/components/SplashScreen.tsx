"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SplashScreenProps {
  children: React.ReactNode;
}

export function SplashScreen({ children }: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F9FAFB]">
        <div className="animate-fade-in flex flex-col items-center gap-5">
          <Image
            src="/logo.png"
            alt="PANORA"
            width={180}
            height={60}
            priority
            className="h-auto w-[160px] sm:w-[180px] md:w-[200px]"
          />
          <p className="font-body text-[13px] font-light text-[#111827]/60 tracking-[0.02em]">
            one ecosystem for food, logistics, and financing
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
