import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Download,
} from "lucide-react";
import React from "react";
import { SocialIcon } from "./ui/SocialIcon";
import data from "@/constants/landing";

export default function Landing() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-zinc-900 text-white"
      style={{
        backgroundImage: "url('/images/landing.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
          {data.name}
        </h1>
        <p className="text-xl md:text-2xl tracking-widest">
          {data.description}
        </p>
        <div className="flex justify-center space-x-4">
          <SocialIcon icon={Linkedin} href={data.socialLinks.linkedIn} />
          <SocialIcon icon={Github} href={data.socialLinks.github} />
          <SocialIcon icon={Twitter} href={data.socialLinks.twitter} />
          <SocialIcon icon={Facebook} href={data.socialLinks.facebook} />
          <SocialIcon icon={Instagram} href={data.socialLinks.instagram} />
        </div>
        <div className="pt-4">
          <Button asChild className="rounded-none px-8 py-6 h-auto">
            <Link href="/cv.pdf" download>
              <Download className="mr-2 h-4 w-4" /> DOWNLOAD CV
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
