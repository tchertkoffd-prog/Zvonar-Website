import { useState } from "react";
import { Spotlight } from "./components/ui/spotlight";

// 1. IMPORT YOUR IMAGES FROM SRC/ASSETS (Exact Casing)
import laborStreetImage from "./assets/LaborStreet.png";
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
    image: laborStreetImage,
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