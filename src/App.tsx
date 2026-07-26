import { useState } from "react";
import { Spotlight } from "./components/ui/spotlight";

// 1. IMPORT YOUR IMAGES FROM SRC/ASSETS
import rallyImage from "./assets/rally.png";
import miLifeImage from "./assets/miLife.png";
import studioImage from "./assets/studio.jpg";

// Portfolio Data
const portfolioData = {
  signal: {
    label: "Signal",
    description: "Integrating UX/UI Design · Simplifying Complex Narratives · Amplifying Your Platform's Identity",
    image: miLifeImage,
    projects: [
      { id: "uIb43DPYzRA", title: "miLife iScan", tag: "3D / Product" },
      { id: "m-18nB3tmfw", title: "Axiom: Enterprise Data Resilience", tag: "Enterprise Tech" },
      { id: "vrceqQ-17UA", title: "Visualizing the 4th Dimension", tag: "Abstract 3D" },
    ],
  },
  resonance: {
    label: "Resonance",
    description: "Sonic Branding · Tuning Your Frequency · Composing Your Future",
    image: studioImage,
    projects: [
      { id: "MZeH_84BubY", title: "Rising by Zvønår", tag: "Original Score" },
      { id: "WSMXP2IztcQ", title: "Cafe Bustelo: Kitchen Foley", tag: "Sound Design" },
      { id: "nDPW494_u0M", title: "Potato Leek Soup: Kitchen Foley", tag: "Sound Design" },
    ],
  },
  chronicle: {
    label: "Chronicle",
    description: "Documenting History · Reframing the Future · Cinematic Advocacy",
    image: rallyImage,
    projects: [
      { id: "7CRbUDxEwHQ", title: "The Unfinished Dream", tag: "Short Film" },
      { id: "v5uIMG704_M", title: "Human Banner: Strike For Our Students", tag: "Social Impact" },
      { id: "aKhWp4ESgro", title: "Slavyanka Chorus: Rachmaninoff All Night Vigil", tag: "Sacred Performance" },
      { id: "ewN0UXKbB_E", title: "Fr. Stefan Pavlenko Ep1 Part 2: Kursk Icon", tag: "Archival" },
      { id: "H5IqhoRvTgc", title: "Iconography: The Beginnings in Burlingame", tag: "Arts & Culture" },
    ],
  },
};

type CategoryKey = keyof typeof portfolioData;

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("signal");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const currentCategoryData = portfolioData[activeCategory];
  const currentProject = currentCategoryData.projects[activeProjectIndex] || currentCategoryData.projects[0];

  const handleCategorySwitch = (catKey: CategoryKey) => {
    setActiveCategory(catKey);
    setActiveProjectIndex(0);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col items-center justify-between selection:bg-white selection:text-black">
      
      {/* STICKY TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800/80 px-4 md:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="font-bold text-lg text-white tracking-wider hover:opacity-90 transition-opacity">
            Zvønår Productions
          </a>

          <nav className="flex items-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-mono uppercase tracking-widest">
            <a href="#services" className="text-zinc-400 hover:text-white transition-colors">Pillars</a>
            <a href="#showcase" className="text-zinc-400 hover:text-white transition-colors">Story Lab</a>
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-white text-black font-bold hover:bg-zinc-200 transition-all duration-200 shadow-md"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl w-full space-y-20 p-4 md:p-8 py-8 flex-1">
        
        {/* HERO SECTION - SEAMLESS & CARDLESS */}
        <section className="relative overflow-hidden py-16 px-6 text-center max-w-4xl mx-auto">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          <div className="relative z-10 space-y-6">
            <h1 className="text-4xl sm:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              Zvonar Productions
            </h1>
            <p className="text-zinc-300 text-lg sm:text-2xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide italic">
              Reframing Problems. Casting Pearls.
            </p>
            
            <div className="flex flex-col items-center justify-center pt-2">
              <a
                href="#contact"
                className="px-10 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>

        {/* ZVØNÅR BUSINESS PILLARS */}
        <section id="services" className="space-y-8 pt-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] block">
              ZVØNÅR BUSINESS PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {(Object.keys(portfolioData) as CategoryKey[]).map((key) => {
              const domain = portfolioData[key];
              const isSelected = activeCategory === key;

              const cardStyles = isSelected
                ? "border-white/30 bg-zinc-900/50 shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                : "border-white/10 bg-zinc-950/20 hover:border-white/25 hover:bg-zinc-900/30";

              return (
                <button
                  key={key}
                  onClick={() => {
                    handleCategorySwitch(key);
                    document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-left w-full focus:outline-none flex flex-col h-full group"
                >
                  <div className={`w-full h-full border rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 flex flex-col ${cardStyles}`}>
                    <div className="aspect-[16/10] overflow-hidden border-b border-white/10">
                      <img
                        src={domain.image}
                        alt={domain.label + " Cover"}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-start space-y-2">
                      <h3 className="text-white font-bold text-2xl tracking-tight">
                        {domain.label}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                        {domain.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ZVØN STORY LAB */}
        <section id="showcase" className="space-y-8 pt-12 border-t border-t-white/10 border-b border-b-zinc-950">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">
              ZVØN Story Lab
            </h2>

            <div className="flex items-center p-1.5 rounded-2xl bg-zinc-900/90 border border-white/10 shrink-0">
              {(Object.keys(portfolioData) as CategoryKey[]).map((key) => {
                const domain = portfolioData[key];
                const isActive = activeCategory === key;
                const pillStyle = isActive
                  ? "bg-white text-black font-bold shadow-lg"
                  : "text-zinc-500 hover:text-white";

                return (
                  <button
                    key={key}
                    onClick={() => handleCategorySwitch(key)}
                    className={"px-6 py-2.5 rounded-xl text-[10px] font-mono uppercase tracking-widest transition-all duration-300 shrink-0 " + pillStyle}
                  >
                    {domain.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-zinc-950/40 border border-white/10 rounded-3xl p-4 sm:p-8 shadow-3xl">
            {/* Main Screen */}
            <div className="lg:col-span-8 space-y-6">
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-black shadow-inner">
                <iframe
                  key={currentProject.id}
                  className="w-full h-full"
                  src={"https://www.youtube-nocookie.com/embed/" + currentProject.id + "?autoplay=0"}
                  title={currentProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="flex items-center justify-between px-2 gap-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] block mb-1">Now Playing</span>
                  <h4 className="text-xl font-bold text-white truncate">{currentProject.title}</h4>
                </div>
                <span className="text-[10px] font-mono px-3 py-1.5 rounded-lg border border-white/10 text-zinc-400 bg-zinc-900/50 uppercase tracking-widest shadow-lg">
                  {currentProject.tag}
                </span>
              </div>
            </div>

            {/* Sidebar Playlist */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8">
              <div className="space-y-4 flex-1 flex flex-col">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2 block">Playlist / {currentCategoryData.label}</span>

                <div className="space-y-2.5 flex-1 overflow-y-auto pr-2 max-h-[400px]">
                  {currentCategoryData.projects.map((project, idx) => {
                    const isPlaying = activeProjectIndex === idx;
                    const playlistBtnStyle = isPlaying
                      ? "bg-white/10 border-white/20 text-white shadow-lg"
                      : "bg-transparent border-white/5 text-zinc-500 hover:border-white/10 hover:text-zinc-200";

                    return (
                      <button
                        key={project.id + idx}
                        onClick={() => setActiveProjectIndex(idx)}
                        className={"w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start justify-between gap-4 " + playlistBtnStyle}
                      >
                        <div className="space-y-1">
                          <p className="text-[13px] font-semibold leading-tight">{project.title}</p>
                          <span className="text-[10px] text-zinc-600 font-mono block">{project.tag}</span>
                        </div>
                        {isPlaying ? (
                          <span className="text-[9px] text-emerald-400 font-mono uppercase animate-pulse">Live</span>
                        ) : (
                          <span className="text-[10px] text-zinc-700 font-mono">{"0" + (idx + 1)}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-[10px] text-zinc-600 font-mono flex items-center justify-between">
                <span>TOTAL WORKS</span>
                <span className="text-zinc-300 font-bold">{currentCategoryData.projects.length}</span>
              </div>
            </div>
          </div>
        </section>

        {/* CALENDLY */}
        <section id="contact" className="space-y-10 pt-12 border-t border-white/5">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] block mb-1">Book Now</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Schedule a FREE Consultation</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">Discuss upgrading your project with 15 minutes of direct expert consultation.</p>
          </div>

          <div className="w-full max-w-5xl mx-auto rounded-3xl border border-white/10 bg-zinc-950/60 overflow-hidden shadow-3xl">
            <iframe
              src="https://calendly.com/tchertkoffd-zvonarproductions/new-meeting?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=ffffff"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a Consultation"
              className="w-full min-h-[700px] block"
            />
          </div>
        </section>

        {/* ABOUT ZVØNÅR SECTION */}
        <section id="about" className="relative space-y-12 pt-20 border-t border-white/5">
          <Spotlight className="top-0 left-1/2 -translate-x-1/2 opacity-20" fill="white" />
          <div className="text-center space-y-4 relative z-10">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] block">Mission / About</span>
            <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter leading-none">About ZVØNÅR</h2>
            <p className="text-zinc-400 text-lg sm:text-xl font-light italic max-w-2xl mx-auto">
              Sowing the seeds. Harvesting your hidden gems.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg font-light px-4 relative z-10">
            <p>
              Zvonar Productions is a San Francisco Bay Area media production company built on one belief:{" "}
              <span className="text-white font-medium">science and art solve problems better together.</span>
            </p>
            
            <p>
              In the ZVØN Story Lab, we plan, experiment, and reframe narratives around your specific business needs — 
              transforming complexity into cinematic clarity. The result is content that integrates seamlessly into your platform 
              and elevates it to its fullest market potential.
            </p>

            <p>
              From sizzle reels and short films to documentary-form training and internal communications — 
              every frame is crafted with purpose, and every note is tuned to your brand.
            </p>
          </div>
        </section>

        {/* BRAND FOOTER */}
        <footer className="pt-12 text-center text-[10px] text-zinc-500 space-y-6 font-mono tracking-widest uppercase">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 py-8 px-8 rounded-3xl bg-zinc-950/60 border border-white/5 shadow-2xl">
            <span className="font-bold text-white">Zvønår Productions</span>
            <span className="hidden lg:inline text-zinc-800">|</span>
            <span>1 Sansome St, Suite 1400, San Francisco</span>
            <span className="hidden lg:inline text-zinc-800">|</span>
            <a href="tel:4153909654" className="hover:text-white transition-colors">(415) 390-9654 x800</a>
            <span className="hidden lg:inline text-zinc-800">|</span>
            <a href="mailto:tchertkoffd@ZvonarProductions.com" className="hover:text-white transition-colors lowercase tracking-normal">tchertkoffd@ZvonarProductions.com</a>
          </div>
          <p className="text-zinc-700">© {new Date().getFullYear()} Zvønår Productions. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}