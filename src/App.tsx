import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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


gsap.registerPlugin(ScrollTrigger);


function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);

  const [introSize, setIntroSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);


  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setTimeout(
      () => setIntroComplete(true),
      reduceMotion ? 60 : 2600,
    );
    return () => window.clearTimeout(timer);
  }, []);

useLayoutEffect(() => {
  const element = introRef.current;
  if (!element) return;

  const updateSize = () => {
    setIntroSize({
      width: element.clientWidth,
      height: element.clientHeight,
    });
  };

  updateSize();

  const observer = new ResizeObserver(updateSize);
  observer.observe(element);

  return () => observer.disconnect();
}, []);
  

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
      gsap
        .timeline({ delay: 0.85, defaults: { ease: "power4.out" } })
        .fromTo(
          ".hero-name__main",
          { yPercent: 110, rotate: 1.5 },
          { yPercent: 0, rotate: 0, duration: 1.25 },
        )
        .fromTo(
          ".hero-name__echo",
          { xPercent: -12, opacity: 0 },
          { xPercent: 0, opacity: 0.26, duration: 1.1 },
          "-=0.8",
        )
        .fromTo(
          ".hero-kicker, .hero-scroll-cue",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          "-=0.65",
        );

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
  const { width: introW, height: introH } = introSize;

const introMobile = introW <= 640;

const signatureWidth = Math.min(
  introW * (introMobile ? 0.70 : 0.42),
  410,
);

const signatureHeight = signatureWidth * 0.34;

const signatureCenterY = introH * 0.49;

const signatureX = (introW - signatureWidth) / 2;

const signatureY =
  signatureCenterY - signatureHeight / 2;

const signatureOrigin = `${introW / 2}px ${signatureCenterY}px`;

  return (
    <div ref={rootRef} className="site-shell">
      <div className="page-progress" ref={progressRef} aria-hidden="true" />

<div
  ref={introRef}
  className={`intro-loader ${
    introComplete ? "intro-loader--complete" : ""
  }`}
  aria-hidden="true"
>
  <svg
    className="intro-fly__layer"
    viewBox={`0 0 ${introW} ${introH}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        id="intro-signature-filter"
        colorInterpolationFilters="sRGB"
      >
        <feColorMatrix
          type="matrix"
          values="
            -1.5 0 0 0 1
            -1.5 0 0 0 1
            -1.5 0 0 0 1
             0   0 0 1 0
          "
        />
      </filter>

      <mask
        id="intro-signature-mask"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={introW}
        height={introH}
        style={{ maskType: "luminance" }}
      >
        <rect
          width={introW}
          height={introH}
          fill="white"
        />

        <g
          className="intro-fly__cut"
          style={{ transformOrigin: signatureOrigin }}
        >
          <image
            href="/media/ben-swann-signature.webp"
            x={signatureX}
            y={signatureY}
            width={signatureWidth}
            height={signatureHeight}
            filter="url(#intro-signature-filter)"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </mask>
    </defs>

    <rect
      className="intro-fly__matte"
      width={introW}
      height={introH}
      fill="#000000"
      mask="url(#intro-signature-mask)"
    />

    <g
      className="intro-fly__signature"
      style={{ transformOrigin: signatureOrigin }}
    >
      <image
        href="/media/ben-swann-signature.webp"
        x={signatureX}
        y={signatureY}
        width={signatureWidth}
        height={signatureHeight}
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  </svg>

  <div
    className="intro-fly__details"
    style={{
      top: signatureY + signatureHeight + 20,
    }}
  >
    <div className="intro-fly__progress">
      <span />
    </div>

    <span className="intro-fly__tagline">
      Journalist · Broadcaster · Founder
    </span>
  </div>
</div>

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
