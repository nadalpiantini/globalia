"use client";

import { useState } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ProgressNav from "./components/ProgressNav";
import ActoUno from "./components/ActoUno";
import ActoDos from "./components/ActoDos";
import ActoTres from "./components/ActoTres";
import ActoCuatro from "./components/ActoCuatro";
import ActoCinco from "./components/ActoCinco";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {!isLoading && <CustomCursor />}
      {!isLoading && <ProgressNav />}

      <main
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <ActoUno />
        <ActoDos />
        <ActoTres />
        <ActoCuatro />
        <ActoCinco />
      </main>
    </>
  );
}
