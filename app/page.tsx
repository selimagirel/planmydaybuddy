import CTA from "@/components/CTA";
import GradientWrapper from "@/components/GradientWrapper";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <GradientWrapper />
      <CTA />
    </>
  );
}
