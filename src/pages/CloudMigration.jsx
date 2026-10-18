import usePageMeta from "../hooks/usePageMeta.js";
import Icon from "../components/Icon.jsx";
import { PageBanner, SectionHead, Steps, CTABand } from "../components/ui.jsx";

const capabilities = [
  { icon: "cloud", title: "Cloud Implementation", desc: "Design and set up of secure, scalable cloud infrastructure aligned to your workloads and growth plans.", points: ["Cloud infrastructure setup and management", "Secure, scalable cloud architectures"] },
  { icon: "chart", title: "Migration Planning", desc: "Assessment of current systems, dependencies and risks to produce a clear, prioritized migration roadmap.", points: ["Current-state assessment & dependency mapping", "Prioritized, phased migration roadmap"] },
  { icon: "upload", title: "Migration Preparation & Execution", desc: "Hands-on migration of workloads and data with controls that minimize downtime and protect integrity.", points: ["Environment preparation & cutover planning", "Controlled workload & data migration"] },
  { icon: "blocks", title: "System Integration & Deployment", desc: "Connect cloud systems with your ERP, CRM, SAP and IoT ecosystems for seamless, unified operations.", points: ["Integration with existing business systems", "Automated, repeatable deployment"] },
  { icon: "verify", title: "Post-Migration Validation", desc: "Testing and validation to confirm performance, security and functionality after migration.", points: ["Functional, performance & security validation", "Disaster recovery and data backup checks"] },
  { icon: "support", title: "Ongoing Support & Optimization", desc: "Continuous monitoring, support and optimization to keep your cloud secure, efficient and cost-effective.", points: ["Monitoring, support & cost optimization", "Continuous improvement with AI-driven insights"] },
];

const steps = [
  { title: "Discover", desc: "Assess workloads, goals and readiness." },
  { title: "Design", desc: "Architecture & migration strategy." },
  { title: "Migrate", desc: "Prepare, integrate and execute." },
  { title: "Secure", desc: "Validate, harden and back up." },
  { title: "Optimize", desc: "Monitor, support and scale." },
];

export default function CloudMigration() {
  usePageMeta(
    "Cloud Implementation & Migration | DigoIT Global",
    "DigoIT Cloud Implementation & Migration — implementation, migration planning and execution, integration, and post-migration validation and support."
  );

  return (
    <>
      <PageBanner
        bg="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
        crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Cloud Implementation & Migration" }]}
        title="Cloud Implementation & Migration"
      >
        A secure, cloud-first foundation — planned, migrated and supported with minimal disruption to your business.
      </PageBanner>

      {/* Overview */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Overview</span>
            <h2>Move to the cloud with confidence</h2>
            <p className="lead mt-lg">
              Cloud is central to how modern businesses scale, stay resilient and control cost.
              We help you set up secure, scalable cloud infrastructure and migrate existing systems
              in a planned, low-risk way.
            </p>
            <p className="mt-lg">
              The capabilities below describe how we approach cloud engagements. They are presented
              as service capabilities and editable draft scope — a starting point for a tailored plan,
              not a record of delivered work.
            </p>
            <div className="pill-list mt-lg">
              <span className="pill"><Icon name="shieldPlain" /> Secure by design</span>
              <span className="pill"><Icon name="trend" /> Built to scale</span>
              <span className="pill"><Icon name="refresh" /> Disaster recovery ready</span>
            </div>
          </div>
          <div
            className="media media--badge"
            data-badge="Cloud-first architecture"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80')" }}
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--light">
        <div className="container">
          <SectionHead center eyebrow="What’s included" title="Capabilities across the cloud journey">
            End-to-end support from first assessment through to ongoing optimization.
          </SectionHead>
          <div className="grid grid--3">
            {capabilities.map((c) => (
              <article className="card" key={c.title}>
                <div className="card__icon"><Icon name={c.icon} /></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <ul className="card__list">
                  {c.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="How we work" title="Our cloud delivery process">
            Following the DigoIT delivery framework, adapted to cloud engagements.
          </SectionHead>
          <Steps steps={steps} />
        </div>
      </section>

      {/* Vendor note */}
      <section className="section section--light section--tight">
        <div className="container">
          <div className="card" style={{ maxWidth: "860px", marginInline: "auto" }}>
            <h3>A vendor-agnostic approach</h3>
            <p className="mt-lg">
              We take a vendor-agnostic approach and recommend the best-fit cloud platform for your
              requirements. Specific cloud provider partnerships or certifications are not claimed here
              and can be added once confirmed.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Planning a cloud move?"
        text="Let’s scope your migration together — starting with a discovery discussion and a high-level roadmap."
        primary={{ to: "/contact", label: "Contact Us" }}
        secondary={{ to: "/services", label: "Back to All Services" }}
      />
    </>
  );
}
