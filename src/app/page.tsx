"use client";

import { useState } from "react";
import Loader from "./components/Loader";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import ProgressNav from "./components/ProgressNav";
import BeachBackground from "./components/BeachBackground";
import ClientOnly from "./components/ClientOnly";
import Slide01Intro from "./components/slides/Slide01Intro";
import Slide02ProblemISR from "./components/slides/Slide02ProblemISR";
import Slide03WhyAV from "./components/slides/Slide03WhyAV";
import Slide04LawContext from "./components/slides/Slide04LawContext";
import Slide05TwoPaths from "./components/slides/Slide05TwoPaths";
import Slide06Art34 from "./components/slides/Slide06Art34";
import Slide07Art34Use from "./components/slides/Slide07Art34Use";
import Slide08Art39 from "./components/slides/Slide08Art39";
import Slide09Art39Hotels from "./components/slides/Slide09Art39Hotels";
import Slide10RDExecution from "./components/slides/Slide10RDExecution";
import Slide11MadridOffice from "./components/slides/Slide11MadridOffice";
import Slide12MadridToRD from "./components/slides/Slide12MadridToRD";
import Slide13GlobaliaBenefits from "./components/slides/Slide13GlobaliaBenefits";
import Slide14ExecutionProof from "./components/slides/Slide14ExecutionProof";
import Slide15Roadmap from "./components/slides/Slide15Roadmap";
import Slide16Close from "./components/slides/Slide16Close";

export default function Page() {
  return (
    <ClientOnly
      fallback={
        <div className="fixed inset-0 bg-gradient-to-b from-sky-400 to-amber-100 flex items-center justify-center">
          <div className="text-white/50 text-sm">Loading...</div>
        </div>
      }
    >
      <PageContent />
    </ClientOnly>
  );
}

function PageContent() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Beach background with animated waves */}
      <BeachBackground />

      {/* Custom cursor - only on desktop */}
      <CustomCursor />

      {/* Progress navigation */}
      {!isLoading && <ProgressNav />}

      <main
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        <SmoothScroll>
          <Slide01Intro />
          <Slide02ProblemISR />
          <Slide03WhyAV />
          <Slide04LawContext />
          <Slide05TwoPaths />
          <Slide06Art34 />
          <Slide07Art34Use />
          <Slide08Art39 />
          <Slide09Art39Hotels />
          <Slide10RDExecution />
          <Slide11MadridOffice />
          <Slide12MadridToRD />
          <Slide13GlobaliaBenefits />
          <Slide14ExecutionProof />
          <Slide15Roadmap />
          <Slide16Close />
        </SmoothScroll>
      </main>
    </>
  );
}
