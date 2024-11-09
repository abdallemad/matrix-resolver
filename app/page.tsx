"use client";

import Factors from "@/components/Factors";
import { Calculator } from "lucide-react";
export default function Home() {
  return (
    <main className="pt-12 max-w-screen-lg mx-auto text-center md:text-left px-12  lg:px-0 ">
      <div className="flex gap-8 items-center flex-col md:flex-row ">
        <div>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl capitalize mb-4">
            solve matrixes with Gause Jordan, project
          </h1>
          <p className="text-slate-500 text-sm pt-4 ">
            Created by: Abdalla Emad Mohamed, Abdalla Ahmed Mohamed
          </p>
          <p className="text-slate-500 text-sm pt-4 font-semibold">
            Dr: Shrif Barakat
          </p>
        </div>
        <Calculator className="text-indigo-600 w-[18rem] h-[18rem] block mb-4" />
      </div>
      <Factors />
    </main>
  );
}
