import { ArrowUpRight, Play } from "lucide-react";
import { youtubeUrl } from "../../config/site";

export default function Watch() {
  return (
    <section className="watch" id="watch">
          <div className="watch-grid shell">
            <div className="watch-copy" data-reveal>
              <p className="eyebrow">04 — Watch Ben Swann</p>
              <h2>
                <span>The story</span>{" "}
                <span>continues</span>{" "}
                <span>in real time.</span>
              </h2>
              <p>
                Reporting, investigations, analysis and conversations from Ben
                Swann’s official YouTube channel.
              </p>
              <div className="watch-actions">
  <a
    className="primary-button"
    href={youtubeUrl}
    target="_blank"
    rel="noreferrer"
  >
    Visit the channel <ArrowUpRight aria-hidden="true" />
  </a>

  <a
    className="primary-button"
    href="https://sonsdaughterspodcast.com/"
    target="_blank"
    rel="noreferrer"
  >
    Podcast <ArrowUpRight aria-hidden="true" />
  </a>
</div>
            </div>
            <a
              className="watch-visual"
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Watch Ben Swann on YouTube"
            >
              <img src="/media/ben-cutout.webp" alt="" />
              <span className="watch-visual__play">
                <Play aria-hidden="true" fill="currentColor" />
              </span>
              <span className="watch-visual__word" aria-hidden="true">
                Watch
              </span>
            </a>
          </div>
        </section>
  );
}
