import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/sections/Hero";
import Story from "./components/sections/Story";
import Press from "./components/sections/Press";
import Timeline from "./components/sections/Timeline";
import Companies from "./components/sections/Companies";
import PortraitBreak from "./components/sections/PortraitBreak";
import Work from "./components/sections/Work";
import Watch from "./components/sections/Watch";
import Footer from "./components/layout/Footer";
import IntroLoader from "./components/layout/IntroLoader";


gsap.registerPlugin(ScrollTrigger);


function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(
    () =>
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches,
  );

  const finishIntro = useCallback(() => {
    setIntroComplete(true);
  }, []);
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);

  

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.classList.toggle("menu-is-open", menuOpen);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      setHeaderSolid(window.scrollY > 60);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 54, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      const desktop = gsap.matchMedia();
      desktop.add("(min-width: 900px) and (min-height: 680px)", () => {
        gsap.to(".hero-media", {
          yPercent: 10,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".hero-name", {
          yPercent: -18,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "85% top",
            scrub: 0.8,
          },
        });

        gsap.fromTo(
          ".story-portrait > img",
          {
            yPercent: -4,
          },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: ".story-portrait",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
           },
         );


        
        gsap.fromTo(
          ".timeline-line__fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-desktop",
              start: "top 52%",
              end: "bottom 52%",
              scrub: true,
            },
          },
        );
        gsap.utils
          .toArray<HTMLElement>(".timeline-card__media")
          .forEach((element) => {
            gsap.fromTo(
              element.querySelector("img"),
              { yPercent: -5, scale: 1.05 },
              {
                yPercent: 5,
                scale: 1.05,
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          });
      });

      desktop.add("(max-width: 899px)", () => {
        gsap.fromTo(
          ".story-portrait > img",
          {yPercent: -2,},
          {
           yPercent: 2,
           ease: "none",
           scrollTrigger: {
             trigger: ".story-portrait",
             start: "top bottom",
             end: "bottom top",
            scrub: 1.2,
           },
          },
        );
      });
      return () => desktop.revert();
    }, rootRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });
    ScrollTrigger.refresh();
    return () => {
      window.removeEventListener("load", refresh);
      context.revert();
    };
  }, []);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={rootRef} className={`site-shell ${introComplete ? "site-shell--intro-ready" : "site-shell--intro-pending"}`}>
      <div className="page-progress" ref={progressRef} aria-hidden="true" />

    {!introComplete && (
      <IntroLoader onComplete={finishIntro} />
    )}

      <header className={`site-header ${headerSolid ? "site-header--solid" : ""}`}>
        <a className="site-brand" href="#home" aria-label="Ben Swann home">
          <img src="/media/ben-swann-signature.webp" alt="Ben Swann" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#story">Story</a>
          <a href="#timeline">Timeline</a>
          <a href="#work">Work</a>
          <a href="#watch">Watch</a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {[
            ["01", "Story", "#story"],
            ["02", "Timeline", "#timeline"],
            ["03", "Work", "#work"],
            ["04", "Watch", "#watch"],
          ].map(([number, label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span>{number}</span>
              {label}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
        <p>Truth has no obligation to be comfortable.</p>
      </div>

      <main>
        <Hero heroVideoReady={heroVideoReady} onVideoReady={() => setHeroVideoReady(true)} />

        <Story />

        <Press />

        <Timeline /> 


        <Companies />

         <PortraitBreak />

        <Work />

        <Watch />
      </main>

      <Footer />
    </div>
  );
}

export default App;
