import usePageMeta from "../hooks/usePageMeta.js";
import { PageBanner, SectionHead, Feature, Steps, CTABand } from "../components/ui.jsx";

const steps = [
  { title: "Discover", desc: "Understand business goals, processes & gaps." },
  { title: "Design", desc: "Architecture aligned with business outcomes." },
  { title: "Develop & Integrate", desc: "AI, ERP, SAP, IoT & cloud seamlessly connected." },
  { title: "Deploy & Secure", desc: "Cloud-first, secure, compliant deployment." },
  { title: "Optimize & Scale", desc: "Continuous improvement with AI-driven insights." },
];

export default function About() {
  usePageMeta(
    "About Us | DigoIT Global",
    "About DigoIT Solution PVT LTD — an AI-first, vendor-agnostic IT partner engineering intelligent, secure and scalable solutions across cloud, SAP, ERP, AI and IoT."
  );

  return (
    <>
      <PageBanner
        bg="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
        title="About DigoIT"
      >
        An AI-first technology partner helping businesses turn ideas into measurable impact.
      </PageBanner>

      {/* Intro */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Technology should enable growth, not complexity</h2>
            <p className="lead mt-lg">
              DigoIT Solution PVT LTD is an IT services company focused on engineering
              intelligent, secure and scalable solutions. We help organizations connect
              fragmented systems, replace manual processes and make decisions on real-time data.
            </p>
            <p className="mt-lg">
              Our work spans AI and machine learning, cloud, SAP, custom ERP &amp; CRM, IoT and
              cybersecurity. We bring these together with an AI-first mindset and a vendor-agnostic
              approach, so every solution is built around your goals rather than a fixed toolset.
              We help you build systems that work today — and scale for tomorrow.
            </p>
          </div>
          <div
            className="media media--badge"
            data-badge="Turning Ideas Into Impact"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80')" }}
          />
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section section--light section--tight">
        <div className="container grid grid--2">
          <div className="card">
            <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></svg></div>
            <h3>Our Mission</h3>
            <p>To engineer intelligent, secure and scalable IT solutions that help businesses modernize operations, make data-driven decisions and grow with confidence.</p>
          </div>
          <div className="card">
            <div className="card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" /><circle cx="12" cy="12" r="3" /></svg></div>
            <h3>Our Vision</h3>
            <p>To be a trusted, AI-first technology partner that turns ideas into impact — building systems that work today and scale for tomorrow.</p>
          </div>
        </div>
        <p className="container form-note" style={{ marginTop: "1rem" }}>
          Mission and vision statements are drawn from the company profile messaging and are editable placeholders pending final approved copy.
        </p>
      </section>

      {/* Advantage */}
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="The DigoIT Advantage" title="What sets our approach apart" />
          <div className="grid grid--3">
            <Feature icon="ai" title="AI-First, Not AI-Added">AI embedded across solutions, not as an add-on.</Feature>
            <Feature icon="layers" title="End-to-End Ownership">From strategy to deployment and optimization.</Feature>
            <Feature icon="blocks" title="Vendor-Agnostic Approach">Best-fit technology, not forced tools.</Feature>
            <Feature icon="shieldPlain" title="Security by Design">Built-in cybersecurity and compliance readiness.</Feature>
            <Feature icon="trend" title="Scalable & Future-Ready">Solutions that grow with your business.</Feature>
            <Feature icon="check" title="Measurable Outcomes">Operational efficiency, faster time-to-value and sustainable growth.</Feature>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section section--navy">
        <div className="container">
          <SectionHead center eyebrow="Our capabilities & approach" title="How we deliver measurable outcomes">
            A clear delivery framework keeps every engagement aligned to your business goals.
          </SectionHead>
          <Steps steps={steps} />
        </div>
      </section>

      <CTABand
        title="Ready to modernize with DigoIT?"
        text="Let’s talk about your goals and map a clear, practical path to intelligent, secure and scalable technology."
        primary={{ to: "/contact", label: "Get in Touch" }}
        secondary={{ to: "/services", label: "See What We Do" }}
      />
    </>
  );
}
