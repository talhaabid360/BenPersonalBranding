import { pressLogos } from "../../data/press";

export default function Press() {
  return (
    <section className="press" aria-labelledby="press-title">
      <div className="press-heading shell" data-reveal>
        <h2 id="press-title">
          Empowering masses <br /> with what’s truth in media.
        </h2>
      </div>

      <div className="press-marquee" data-overflow-allowed>
        <div className="press-marquee__track">
          {[0, 1, 2, 3].map((group) => (
            <div
              className="press-marquee__group"
              key={group}
              aria-hidden={group !== 0}
            >
              {pressLogos.map((logo, index) => (
                <figure key={`${logo.src}-${index}`}>
                  <img
                    src={logo.src}
                    alt={group === 0 ? logo.alt : ""}
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
