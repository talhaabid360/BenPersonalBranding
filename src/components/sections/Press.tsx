import { pressLogos } from "../../data/press";

export default function Press() {
  return (
    <section className="press" aria-labelledby="press-title">
          <div className="press-heading shell" data-reveal>
            <h2 id="press-title">Empowering masses <br /> with what’s truth in media.</h2>
          </div>
          <div className="press-marquee" data-overflow-allowed>
            <div className="press-marquee__track">
              {[...pressLogos, ...pressLogos,...pressLogos,...pressLogos].map((logo, index) => (
                <figure key={`${logo.src}-${index}`} aria-hidden={index >= pressLogos.length}>
                  <img src={logo.src} alt={index < pressLogos.length ? logo.alt : ""} />
                </figure>
              ))}
            </div>
          </div>
        </section>
  );
}
