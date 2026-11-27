import { ArrowDown } from "lucide-react";

export default function Hero({ heroVideoReady, onVideoReady }: { heroVideoReady: boolean; onVideoReady: () => void }) {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <picture className="hero-media__poster">
              <source
                srcSet="/media/video/hero-mobile-poster.webp"
                media="(max-width: 699px)"
              />
              <img
                src="/media/video/hero-desktop-poster.webp"
                alt=""
                fetchPriority="high"
              />
            </picture>
            <video
              className={heroVideoReady ? "hero-media__video--ready" : ""}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={onVideoReady}
            >
              <source
                src="/media/video/hero-mobile.mp4"
                media="(max-width: 699px)"
                type="video/mp4"
              />
              <source src="/media/video/hero-desktop.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-name">
            <div className="hero-name__mask">
              <h1 className="hero-name__main" id="hero-title">
                Ben Swann
              </h1>
            </div>
           
            <p className="hero-kicker">
  <span>Journalist · Broadcaster · Founder</span>
  <span className="hero-kicker__separator"> · </span>
  <span className="hero-kicker__second">
    Entrepreneur &amp; a Father
  </span>
</p>
          </div>
          <a className="hero-scroll-cue" href="#story">
            <span>Enter the story</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </section>
  );
}
