import { companies } from "../../data/companies";

export default function Companies() {
  return (
    <section className="companies" id="companies">
  <div className="shell">
    <div className="companies-heading" data-reveal>
      <h2>
        <span>Beyond the newsroom.</span>
        <span>Building what's next.</span>
      </h2>
    </div>

    <div className="companies-content" data-reveal>
      <h3 className="companies-role">
        Founder &amp; CEO
      </h3>

      <div className="companies-grid">
        {companies.map((company) => (
          <article
            className="company-card"
            key={company.name}
          >
            <img
              src={company.logo}
              alt={company.name}
              loading="lazy"
              decoding="async"
            />
          </article>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}
