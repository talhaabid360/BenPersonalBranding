import { gallery } from "../../data/gallery";

export default function Work() {
  return (
    <section className="work" id="work">
          <div className="work-heading shell" data-reveal>
            <p className="eyebrow">03 — In the room</p>
            <h2>The work is public.<br />The purpose is personal.</h2>
          </div>
          <div className="gallery" data-overflow-allowed>
            {gallery.map((image, index) => (
              <figure className={`gallery-item gallery-item--${index + 1}`} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
              </figure>
            ))}
          </div>
        </section>
  );
}
