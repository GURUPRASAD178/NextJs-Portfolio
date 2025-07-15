import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full bg-transparent">
      <div className="grid grid-cols-12 gap-6 w-full max-w-7xl mx-auto">
        {/* About Text */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-3xl lg:text-4xl font-bold text-left w-full capitalize">
            Architect of Enchantement 
          </h2>
          <p className="font-light text-sm md:text-base lg:text-xl text-foreground mt-4">
            I’m Guruprasad H D, a passionate developer and solution architect
            with a drive to engineer intelligent systems. From Django and Spring Boot backends to React and Next.js frontends,
            I specialize in building scalable, secure, and impactful applications. My portfolio spans diverse
            domains—from AI-enhanced complaint management systems to intuitive tipping platforms like TipEase.
            Let’s transform ideas into code that makes a difference.
          </p>
        </ItemLayout>

        {/* Profile Photo */}
        <ItemLayout className="col-span-full lg:col-span-4 aspect-square !p-0">
          <Image
            src="/images/photo.png"
            alt="Guruprasad H D"
            width={500}
            height={500}
            className="w-full h-full object-cover object-center rounded-xl shadow-md"
            priority
          />
        </ItemLayout>

        {/* Experience Count */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-4xl sm:text-5xl">
            2+ <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        {/* GitHub Top Languages */}
        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=GURUPRASAD178&layout=compact&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF"
            alt="Top Languages"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub Stats */}
        <ItemLayout className="col-span-full md:col-span-8">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="https://github-readme-stats.vercel.app/api?username=GURUPRASAD178&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF"
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        {/* Skill Icons */}
        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto rounded-lg shadow-sm"
            src="https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn"
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub Streak */}
        <ItemLayout className="col-span-full md:col-span-6">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="https://github-readme-streak-stats.herokuapp.com?user=GURUPRASAD178&theme=dark&hide_border=true&type=svg&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

        {/* Pinned Repo */}
        <ItemLayout className="col-span-full md:col-span-6">
          <Link
            href="https://github.com/GURUPRASAD178/"
            target="_blank"
            className="w-full block"
          >
            <img
              className="w-full h-auto rounded-lg shadow-md"
              src="https://github-readme-stats.vercel.app/api/pin/?username=GURUPRASAD178&repo=GURUPRASAD178&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B"
              alt="Pinned Repo"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
