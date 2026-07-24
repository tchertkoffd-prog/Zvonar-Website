import { useState } from "react";
import { GlowCard } from "./components/ui/spotlight-card";
import { Spotlight } from "./components/ui/spotlight";

// 1. IMPORT YOUR IMAGES FROM SRC/ASSETS
import docImage from "./assets/doc.png";
import techImage from "./assets/tech.png";
import studioImage from "./assets/studio.jpg";

// Portfolio Data
const portfolioData = {
  documentary: {
    label: "Documentary",
    categoryCode: "01 / NARRATIVE",
    description: "Editorial architecture for short and long-form narrative films.",
    color: "blue" as const,
    image: docImage,
    projects: [
      { id: "7CRbUDxEwHQ", title: "The Unfinished Dream", tag: "Short Film" },
      { id: "v5uIMG704_M", title: "Human Banner: Strike For Our Students", tag: "Social Impact" },
      { id: "aKhWp4ESgro", title: "Slavyanka Chorus: Rachmaninoff All Night Vigil", tag: "Sacred Performance" },
      { id: "ewN0UXKbB_E", title: "Fr. Stefan Pavlenko Ep1 Part 2: Kursk Icon", tag: "Archival" },
      { id: "H5IqhoRvTgc", title: "Iconography: The Beginnings in Burlingame", tag: "Arts & Culture" },
    ],
  },
  tech: {
    label: "Tech Enterprise",
    categoryCode: "02 / VISUALS",
    description: "3D motion design and high-growth enterprise brand storytelling.",
    color: "purple" as const,
    image: techImage,
    projects: [
      { id: "uIb43DPYzRA", title: "miLife iScan", tag: "3D / Product" },
      { id: "m-18nB3tmfw", title: "Axiom: Enterprise Data Resilience", tag: "Enterprise Tech" },
      { id: "vrceqQ-17UA", title: "Visualizing the 4th Dimension", tag: "Abstract 3D" },
    ],
  },
  studio: {
    label: "Zvønår Studio",
    categoryCode: "03 / AUDIO",
    description: "Bespoke music composition, spatial architecture, and kitchen foley.",
    color: "green" as const,
    image: studioImage,
    projects: [
      { id: "MZeH_84BubY", title: "Rising by Zvønår", tag: "Original Score" },
      { id: "WSMXP2IztcQ", title: "Cafe Bustelo: Kitchen Foley", tag: "Sound Design" },
      { id: "nDPW494_u0M", title: "Potato Leek Soup: Kitchen Foley", tag: "Sound Design" },
    ],
  },
};

type CategoryKey = keyof typeof portfolioData;

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("documentary");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const currentCategoryData = portfolioData[activeCategory];
  const currentProject = currentCategoryData.projects[activeProjectIndex] || currentCategoryData.projects[0];

  const handleCategorySwitch = (catKey: CategoryKey) => {
    setActiveCategory(catKey);
    setActiveProjectIndex(0);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col items-center justify-center p-4 md:p-8 selection:bg-white selection:text-black">
      <div className="max-w-6xl w-full space-y-20 py-8">
        
        {/* HERO SECTION WITH SPOTLIGHT & REORDERED ELEMENTS */}
        <section className="relative overflow-hidden rounded-3xl border-t border-t-white/25 border-x border-x-zinc-800/80 border-b border-b-zinc-950 bg-gradient-to-b from-zinc-900/70 via-zinc-950/90 to-black py-20 px-6 text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-md">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          <div className="relative z-10 space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              Zvonar Productions
            </h1>
            <p className="text-zinc-300 text-lg sm:text-2xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              Clarity in Vision. Authenticity in Sound.
            </p>
            
            <div className="flex flex-col items-center justify-center pt-6 space-y-6">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Book a FREE Consultation
              </a>
              <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto font-medium tracking-tight">
                Elevating your business or project one frame at a time!
              </p>
            </div>
          </div>
        </section>

        {/* CORE ZVØNÅR PILLARS */}
        <section className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              Core Zvønår Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.keys(portfolioData) as CategoryKey[]).map((key) => {
              const domain = portfolioData[key];
              const isSelected = activeCategory === key;

              const card3dStyles = isSelected
                ? "border-t-white/30 border-x-zinc-700 border-b-zinc-800 bg-zinc-900/70 shadow-[0_15px_40px_-5px_rgba(255,255,255,0.12)]"
                : "border-t-white/15 border-x-zinc-800/80 border-b-zinc-950 bg-zinc-950/40 hover:border-t-white/25 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)]";

              return (
                <button
                  key={key}
                  onClick={() => {
                    handleCategorySwitch(key);
                    document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-left w-full focus:outline-none"
                >
                  <GlowCard
                    glowColor={domain.color}
                    size="md"
                    className={"border transition-all duration-300 flex flex-col overflow-hidden rounded-2xl " + card3dStyles}
                  >
                    <img
                      src={domain.image}
                      alt={domain.label + " Cover"}
                      className="aspect-[3/2] w-full object-cover block border-b border-b-zinc-800/80"
                    />
                    <div className="space-y-3 p-4 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                          {domain.categoryCode}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-t-white/20 border-zinc-800 text-zinc-400 bg-black/50 shadow-inner">
                          {domain.projects.length} Works
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-2xl tracking-tight leading-tight">
                        {domain.label}
                      </h3>
                      <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 flex-1">
                        {domain.description}
                      </p>
                    </div>
                  </GlowCard>
                </button>
              );
            })}
          </div>
        </section>

        {/* ZVØN THEATER */}
        <section id="showcase" className="space-y-8 pt-8 border-t border-t-white/10 border-b border-b-zinc-950 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                Zvøn Theater
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-tight">
                Zvønår Productions Presents
              </h2>
            </div>

            <div className="flex items-center p-1 rounded-xl bg-zinc-900/90 border border-t-white/20 border-zinc-800/80 shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
              {(Object.keys(portfolioData) as CategoryKey[]).map((key) => {
                const domain = portfolioData[key];
                const isActive = activeCategory === key;
                const pillStyle = isActive
                  ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.35)]"
                  : "text-zinc-400 hover:text-white";

                return (
                  <button
                    key={key}
                    onClick={() => handleCategorySwitch(key)}
                    className={"px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 shrink-0 " + pillStyle}
                  >
                    {domain.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black border-t border-t-white/20 border-x border-x-zinc-800/80 border-b border-b-zinc-950 rounded-2xl p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(255,255,255,0.04)] overflow-hidden">
            {/* Main Screen */}
            <div className="lg:col-span-8 space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-t-white/20 border-zinc-800 bg-black shadow-lg">
                <iframe
                  key={currentProject.id}
                  className="w-full h-full"
                  src={"https://www.youtube-nocookie.com/embed/" + currentProject.id + "?autoplay=0"}
                  title={currentProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="flex items-center justify-between pt-2 px-1 gap-4 overflow-hidden">
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                    Now Playing
                  </span>
                  <h4 className="text-lg font-semibold text-white mt-0.5 leading-tight truncate">
                    {currentProject.title}
                  </h4>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-md border border-t-white/20 border-zinc-800 text-zinc-400 bg-zinc-900/90 shrink-0 uppercase tracking-wider shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                  {currentProject.tag}
                </span>
              </div>
            </div>

            {/* Sidebar Playlist */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4 border-t lg:border-t-0 lg:border-l border-t-white/10 lg:border-l-white/10 border-zinc-900 pt-4 lg:pt-0 lg:pl-6 overflow-hidden">
              <div className="space-y-3 overflow-hidden flex-1 flex flex-col">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                  Playlist / {currentCategoryData.label}
                </span>

                <div className="space-y-2 flex-1 overflow-y-auto pr-1 max-h-[360px]">
                  {currentCategoryData.projects.map((project, idx) => {
                    const isPlaying = activeProjectIndex === idx;
                    const playlistBtn3d = isPlaying
                      ? "bg-zinc-900 border-t-white/30 border-zinc-700 text-white shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
                      : "bg-zinc-950/50 border-t-white/10 border-zinc-800/70 text-zinc-400 hover:border-t-white/20 hover:border-zinc-700 hover:text-zinc-200";

                    return (
                      <button
                        key={project.id + idx}
                        onClick={() => setActiveProjectIndex(idx)}
                        className={"w-full text-left p-3 rounded-xl border transition-all duration-200 flex items-start justify-between gap-3 " + playlistBtn3d}
                      >
                        <div className="space-y-1 overflow-hidden">
                          <p className="text-xs font-medium leading-snug line-clamp-2">
                            {project.title}
                          </p>
                          <span className="text-[10px] text-zinc-500 font-mono block">
                            {project.tag}
                          </span>
                        </div>
                        {isPlaying ? (
                          <span className="text-[10px] text-emerald-400 font-mono shrink-0 uppercase tracking-wider">
                            Playing
                          </span>
                        ) : (
                          <span className="text-[10px] text-zinc-600 font-mono shrink-0">
                            {"0" + (idx + 1)}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/50 border border-t-white/15 border-zinc-800/70 text-xs text-zinc-500 font-mono flex items-center justify-between overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                <span>Total Items</span>
                <span className="text-zinc-300 font-semibold">{currentCategoryData.projects.length} Works</span>
              </div>
            </div>
          </div>
        </section>

        {/* CALENDLY DIRECT EMBED */}
        <section id="contact" className="space-y-8 pt-12 border-t border-t-white/10 border-b border-b-zinc-950 overflow-hidden">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              Contact Zvønår Now
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Schedule a FREE Consultation
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              Select an available date and time below to discuss upgrading your project or business! Free 15min Consultation!
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto rounded-2xl border-t border-t-white/20 border-x border-x-zinc-800/80 border-b border-b-zinc-950 bg-zinc-950/60 overflow-hidden shadow-[0_20px_60px_-10px_rgba(255,255,255,0.06)]">
            <iframe
              src="https://calendly.com/tchertkoffd-zvonarproductions/new-meeting?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=ffffff"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a Consultation with Zvonar Productions"
              className="w-full border-0 min-h-[700px] block"
            />
          </div>
        </section>

        {/* BRAND FOOTER */}
        <footer className="pt-8 text-center text-xs text-zinc-400 space-y-4 font-mono">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 py-6 px-6 rounded-2xl bg-zinc-950/60 border-t border-t-white/15 border-x border-x-zinc-800/80 border-b border-b-zinc-950 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]">
            <span className="font-semibold text-white tracking-wider">Zvønår Productions</span>
            <span className="hidden lg:inline text-zinc-700">|</span>
            <span>1 Sansome St, Suite 1400, San Francisco, CA 94104</span>
            <span className="hidden lg:inline text-zinc-700">|</span>
            <a href="tel:4153909654" className="hover:text-white transition-colors duration-150">
              (415) 390-9654 x800
            </a>
            <span className="hidden lg:inline text-zinc-700">|</span>
            <a href="mailto:tchertkoffd@ZvonarProductions.com" className="hover:text-white transition-colors duration-150">
              tchertkoffd@ZvonarProductions.com
            </a>
          </div>
          <p className="text-[10px] text-zinc-600">
            © {new Date().getFullYear()} Zvønår Productions. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}