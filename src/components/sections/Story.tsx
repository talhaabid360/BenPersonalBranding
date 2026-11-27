import { ArrowDown } from "lucide-react";

export default function Story() {
  return (
    <section className="story" id="story">
          <div className="story-grid">
            <div className="story-copy" data-reveal>
              <p className="eyebrow">01 — The story</p>
              <h2>
                FROM NEWSROOMS TO INDEPENDENT MEDIA: A CAREER BUILT
                ON ASKING THE QUESTIONS OTHERS WOULDN’T. 
              </h2>
              <p className="story-lede">
                For more than two decades, Ben Swann has moved through local
                newsrooms, national broadcasts, and independent media, building a
                career defined by investigation, independence, and a willingness to challenge the prevailing narrative.
              </p>
              <a className="text-link" href="#timeline">
                Follow the full timeline <ArrowDown aria-hidden="true" />
              </a>
            </div>
            <div className="story-portrait" data-reveal>
              <div className="story-portrait__ring" aria-hidden="true" />
              <img
                src="/media/ben-cutout.webp"
                alt="Ben Swann"
                fetchPriority="high"
              />
             
            </div>
          </div>
          <div className="facts" data-reveal>
            <article>
              <span>01</span>
              <strong>Two degrees <br /> by the age of 16</strong>
              <p>Early academic discipline shaped a research-led career.</p>
            </article>
            <article>
              <span>02</span>
              <strong>Murrow & Emmy winner</strong>
              <p>Recognition earned through local and investigative reporting.</p>
            </article>
            <article>
              <span>03</span>
              <strong>Truth in Media founder</strong>
              <p>An independent platform built beyond the newsroom.</p>
            </article>
          </div>
        </section>
  );
}
