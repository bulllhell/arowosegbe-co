import Hero         from "@/components/home/Hero";
import WhatIDo      from "@/components/home/WhatIDo";
import HowItWorks   from "@/components/home/HowItWorks";
import FeaturedWork from "@/components/home/FeaturedWork";
import TrustSignals from "@/components/home/TrustSignals";
import HomeCTA      from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <HowItWorks />
      <FeaturedWork />
      <TrustSignals />
      <HomeCTA />
    </>
  );
}