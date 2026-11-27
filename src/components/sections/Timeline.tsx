import { ArrowRight, MapPin } from "lucide-react";
import { timeline } from "../../data/timeline";

export default function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
          <div className="timeline-heading shell" data-reveal>
            <p className="eyebrow">02 — The record</p>
            <h2>
              A life behind
              <br />
              And beyond the headlines.
            </h2>
            <p>From an accelerated education to award-winning broadcasting, independent media and public controversy.</p>
          </div>

          <div className="timeline-desktop shell">
            <div className="timeline-line" aria-hidden="true">
              <span className="timeline-line__fill" />
            </div>
            {timeline.slice(0, 5).map((entry, index) => (
              <article
                className={`timeline-card ${index % 2 ? "timeline-card--right" : "timeline-card--left"}`}
                key={`${entry.year}-${entry.title}`}
              >
                <div className="timeline-card__year" aria-hidden="true">
                  {entry.year}
                </div>
                <div className="timeline-card__dot" aria-hidden="true" />
                <div className="timeline-card__media">
                  <img
                    src={entry.image}
                    alt={entry.imageAlt}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <div className="timeline-card__copy" data-reveal>
                  <span className="timeline-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{entry.title}</h3>
                  <p className="timeline-card__location">
                    <MapPin aria-hidden="true" /> {entry.location}
                  </p>
                  <p>{entry.description}</p>
                  {entry.quote && (
                    <blockquote>
                      “{entry.quote}”
                      <cite>{entry.quoteAttribution}</cite>
                    </blockquote>
                  )}
                </div>
              </article>
            ))}
          </div>
         <div className="timeline-more shell">
            <a className="timeline-more__button" href="/timeline">
              See full timeline <ArrowRight aria-hidden="true" />
            </a>
          </div>

       <div className="timeline-mobile" data-overflow-allowed>
         <div className="timeline-mobile__viewport">
           <div className="timeline-mobile__track">
             <span className="timeline-mobile__line" aria-hidden="true" />

             {timeline.map((entry, index) => (
               <article
                 className={`timeline-mobile-card ${
                   index % 2 === 0
                     ? "timeline-mobile-card--image-top"
                     : "timeline-mobile-card--text-top"
                 }`}
                 key={`mobile-${entry.year}-${entry.title}`}
               >
                 <div className="timeline-mobile-card__image">
                   <img
                     src={entry.image}
                     alt={entry.imageAlt}
                     loading="lazy"
                   />
                 </div>

                 <strong className="timeline-mobile-card__year">
                   {entry.year}
                 </strong>

                 <div className="timeline-mobile-card__copy">
                   <h3>{entry.title}</h3>

                   <p className="timeline-card__location">
                     <MapPin aria-hidden="true" /> {entry.location}
                   </p>

                  <p>{entry.description}</p>

                  {entry.quote && (
                    <blockquote>
                      “{entry.quote}”
                      <cite>{entry.quoteAttribution}</cite>
                    </blockquote>
                  )}
                </div>
              </article>
            ))}
          </div>
         </div>
       </div>
       </section>
  );
}
