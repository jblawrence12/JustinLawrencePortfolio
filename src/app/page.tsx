/* src/app/page.tsx */

import Link from "next/link";
import { Github, Mail, FileText } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Home() {
  const projects = [
    {
      name: "Tank360 Monitoring System",
      tech: "Angular • .NET Core • SignalR • MS SQL",
      href: "https://github.com/jblawrence12/TankWatch360",
      summary:
        "Real-time dashboard ingesting live tank telemetry with zone-based alerts, REST/SignalR back-end, EF Core, and Azure DevOps CI/CD.",
    },
    {
      name: "Boeing ATC Voice Recognition",
      tech: "React • Python • Kaldi/VOSK • SpaCy",
      href: "https://github.com/eden4422/ATC-Taxi-Commands-Voice-Recognition",
      summary:
        "Multi-model speech-to-text pipeline (90 %+ accuracy) with NLP parsing and JSON/Mongo storage.",
    },
    {
      name: "Cross-Platform Password Generator",
      tech: ".NET MAUI • EXIF APIs",
      href: "https://github.com/nhannguyen111/Steganography-Image-Password",
      summary:
        "Generates strong passwords from image metadata with a polished mobile/desktop UI.",
    },
    {
      name: "AI Text Sentiment Analysis",
      tech: "React • PyTorch • T5",
      href: "https://github.com/rk3026/CptS440_AIproject",
      summary:
        "Fine-tuned T5 on GoEmotions for multilabel emotion detection with interactive front-end.",
    },
    {
      name: "Tip Ship Payroll System",
      tech: "React • Node.js • Express • Sequelize • SQLite",
      href: "https://github.com/jblawrence12/TipShip",
      summary:
        "Manages and processes restaurant tips with live updates and a friendly UI.",
    },
    {
      name: "Yelp Data Analysis",
      tech: "Python • SQL • PyQt • PostgreSQL",
      href: "https://github.com/jblawrence12/YelpDataAnalysis",
      summary:
        "Interactive dashboards for Yelp review insights; heavy SQL & data-viz focus.",
    },
    {
      name: "YouTube Data Analysis",
      tech: "Python • SQL • PyQt • PostgreSQL",
      href: "https://github.com/jblawrence12/YouTube-Data-Analysis",
      summary:
        "PageRank, MapReduce & viz to surface hidden YouTube channel trends.",
    },
    {
      name: "Patient Portal System",
      tech: "Javascript • Node.js • Express • sqlite",
      href: "https://github.com/wsu-cpts583-2024/Harmony",
      summary:
        "Patient portal system for patients to message doctors and request appointments.",
    },
  ];

  return (
    <main className="min-h-screen font-sans text-slate-800 bg-gradient-to-b from-sky-50 via-white to-slate-100">
      {/* ── NavBar ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
        <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400" />
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link
            href="#home"
            className="font-extrabold text-lg md:text-xl tracking-tight text-slate-900"
          >
            Justin&nbsp;Lawrence
          </Link>

          <ul className="hidden md:flex gap-8 font-medium">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-sky-600 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* mobile CTA */}
          <Button
            size="sm"
            variant="outline"
            asChild
            className="md:hidden shadow-sm"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </nav>

      {/* ── Hero / About ───────────────────────────────────────── */}
      <header
        id="about"
        className="animate-fade-in-up container mx-auto px-4 py-24 text-center"
      >
        <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 tracking-wide shadow-sm">
          Full-Stack Developer · Security +
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Building resilient&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
            web & security
          </span>{" "}
          solutions
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600">
          B.S. in Software Engineering · passionate about turning complex
          requirements into secure, clean, and testable code. I thrive on
          challenges and love building resilient systems. My goal is to never stop learning
          and to always deliver high-quality solutions that make a difference. Currently studying
          for the CompTIA CySA+ certification to deepen my security expertise.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">See my work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/Justin_Lawrence_Resume.pdf" target="_blank">
              Download résumé
            </Link>
          </Button>
        </div>
      </header>

      {/* ── Projects ──────────────────────────────────────────── */}
      <section
        id="projects"
        className="animate-fade-in-up bg-white py-24 border-t border-slate-200/60"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-12 text-center">
            Highlight Projects
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Card
                key={p.name}
                className="group relative overflow-hidden border-0 shadow-md transition hover:shadow-2xl"
              >
                {/* gradient ring on hover */}
                <span className="pointer-events-none absolute inset-0 rounded-lg border border-transparent bg-gradient-to-br from-sky-400/40 to-teal-300/20 opacity-0 transition group-hover:opacity-100" />

                <CardHeader className="relative">
                  <CardTitle className="flex items-center justify-between gap-2 text-base font-semibold">
                    {p.name}
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="text-slate-500 hover:text-slate-900"
                    >
                      <Github className="w-5 h-5 shrink-0" />
                    </Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <p className="mb-2 text-xs font-mono text-teal-600">
                    {p.tech}
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {p.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ────────────────────────────────────────── */}
      <section
        id="experience"
        className="animate-fade-in-up container mx-auto px-4 py-24"
      >
        <h2 className="text-3xl font-extrabold mb-10 text-center">Experience</h2>
        <div className="space-y-10 max-w-3xl mx-auto">
          <div>
            <h3 className="font-semibold text-lg">
              IT Solutions – Web&nbsp;Dev &amp; IT&nbsp;Support
              <span className="ml-2 text-slate-500 font-normal text-sm">
                (May 2022 – Present)
              </span>
            </h3>
            <ul className="mt-2 list-disc pl-6 text-sm text-slate-700 leading-relaxed">
              <li>
                Built high-performance <strong>Next.js</strong> company site.
              </li>
              <li>
                Providing on-site and remote support for small businesses around greater Tri-Cities,
                automated workstation updates, and security hardening.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Portofino Restaurant &amp; Bar – Manager
              <span className="ml-2 text-slate-500 font-normal text-sm">
                (Jun 2022 – Aug 2024)
              </span>
            </h3>
            <ul className="mt-2 list-disc pl-6 text-sm text-slate-700 leading-relaxed">
              <li>
                Directed daily FOH/BOH operations for a 25-person team at a $1 M/yr restaurant, 
                streamlining schedules and maintaining top-tier guest satisfaction during peak-volume service.
              </li>
              <li>
                Designed and rolled out a digital tip-pooling system that boosted staff morale, 
                cut turnover, and provided full wage-distribution transparency.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Certifications ─────────────────────────────────────────────── */}
     <section
        id="certifications"
        className="animate-fade-in-up container mx-auto px-4 py-24"
      >
        <h2 className="text-3xl font-extrabold mb-10 text-center">Certifications</h2>
        <div className="space-y-10 max-w-3xl mx-auto">
          <div>
            <h3 className="font-semibold text-lg">
              CompTIA Security+
              <span className="ml-2 text-slate-500 font-normal text-sm">
                (May 2025 - May 2028)
              </span>
            </h3>
            <ul className="mt-2 list-disc pl-6 text-sm text-slate-700 leading-relaxed">
              <li>
                Cert ID: COMP001022750336 
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              CompTIA CySA+
              <span className="ml-2 text-slate-500 font-normal text-sm">
                
              </span>
            </h3>
            <ul className="mt-2 list-disc pl-6 text-sm text-slate-700 leading-relaxed">
              <li>
                Cert ID: In Progress
              </li>
            </ul>
          </div>
        </div>

      </section>
      {/* ── Contact ───────────────────────────────────────────── */}
      <section
        id="contact"
        className="animate-fade-in-up bg-gradient-to-b from-teal-50 via-sky-50 to-white py-24 border-t border-slate-200/60"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-8">Let’s Connect</h2>

          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg">
              <Link href="mailto:justinblawrence@gmail.com">
                <Mail className="mr-2" /> Email
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://github.com/jblawrence12" target="_blank">
                <Github className="mr-2" /> GitHub
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/Justin_Lawrence_Resume.pdf" target="_blank">
                <FileText className="mr-2" /> Résumé
              </Link>
            </Button>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            © {new Date().getFullYear()} Justin Lawrence
          </p>
        </div>
      </section>
    </main>
  );
}
