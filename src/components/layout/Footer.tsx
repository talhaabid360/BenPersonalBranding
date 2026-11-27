import { ArrowUpRight } from "lucide-react";
import { youtubeUrl } from "../../config/site";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-top shell">
          <img src="/media/ben-swann-signature2.webp?v=2" alt="Ben Swann" />
          <p>
            A record of the work, the questions and the story behind the
            journalist.
          </p>
        </div>
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} Ben Swann</span>
          <a href={youtubeUrl} target="_blank" rel="noreferrer">
            YouTube <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="#home">Back to top <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>
  );
}
