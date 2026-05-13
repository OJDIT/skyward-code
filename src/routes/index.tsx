import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daniel Ojima Shaibu — Full-Stack Web/App Developer" },
      {
        name: "description",
        content:
          "Daniel Ojima Shaibu is a Nigerian Full-Stack Web/App Developer in Abuja building scalable React, Next.js, Firebase and Supabase products that ship.",
      },
      { property: "og:title", content: "Daniel Ojima Shaibu — Full-Stack Developer" },
      {
        property: "og:description",
        content: "Building scalable digital experiences from Abuja, Nigeria — for the world.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=cabinet-grotesk@700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Daniel Ojima Shaibu",
          jobTitle: "Full-Stack Web/App Developer",
          email: "mailto:danielojimashaibu@gmail.com",
          telephone: "+2348112036460",
          address: { "@type": "PostalAddress", addressLocality: "Abuja", addressCountry: "NG" },
          url: "https://github.com/OJDIT",
          sameAs: [
            "https://github.com/OJDIT",
            "https://www.linkedin.com/in/shaibu-daniel-0307953b3/",
          ],
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "University of Abuja" },
            { "@type": "CollegeOrUniversity", name: "Federal University of Technology Minna" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
