import { useEffect } from "react";

type IntroLoaderProps = {
  onComplete: () => void;
};

export default function IntroLoader({
  onComplete,
}: IntroLoaderProps) {
  useEffect(() => {
    // Fallback if the animation-end event does not fire.
    const timer = window.setTimeout(onComplete, 4500);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="intro-loader"
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (
          event.target === event.currentTarget &&
          event.animationName === "signature-intro-finish"
        ) {
          onComplete();
        }
      }}
    >
      <div className="signature-intro__background" />

      <div className="signature-intro__anchor">
        <div className="signature-intro__logo">
          <img
            src="/media/ben-swann-signature.webp"
            alt=""
            fetchPriority="high"
            decoding="sync"
          />
        </div>

        <div className="signature-intro__details">
          <div className="signature-intro__progress">
            <span />
          </div>

          <span className="signature-intro__tagline">
            Journalist · Broadcaster · Founder
          </span>
        </div>
      </div>
    </div>
  );
}