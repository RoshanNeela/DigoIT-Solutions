import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import ServiceCarousel from "../components/ServiceCarousel.jsx";
import { SectionHead, Feature, Industry, Steps, CTABand, CheckList } from "../components/ui.jsx";

const steps = [
  { title: "Discover", desc: "Understand business goals, processes and gaps." },
  { title: "Design", desc: "Solution architecture aligned with business outcomes." },
  { title: "Develop & Integrate", desc: "AI, ERP, SAP, IoT and cloud systems seamlessly connected." },
  { title: "Deploy & Secure", desc: "Cloud-first, secure and compliant deployment." },
  { title: "Optimize & Scale", desc: "Continuous improvement using AI-driven insights." },
];

export default function Home() {
  usePageMeta(
    "DigoIT Global | Intelligent, Secure & Scalable IT Solutions",
    "DigoIT Solution PVT LTD delivers AI, cloud, ERP, SAP and IoT solutions. Innovate. Transform. Succeed."
  );

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div
          className="hero__bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')" }}
        />
        <div className="container hero__inner">
          <span className="hero__brand">DigoIT Global</span>
          <h1>Innovate. Transform. <span className="accent">Succeed.</span></h1>
          <p>
            We help businesses modernize with intelligent, secure and scalable IT —
            from cloud and SAP to AI, ERP and IoT. Technology that enables growth,
            not complexity.
          </p>
          <div className="btn-row">
            <Link className="btn btn--primary btn--lg" to="/services">Explore Our Services</Link>
            <Link className="btn btn--ghost-light btn--lg" to="/contact">Contact Us</Link>
          </div>
          <div className="hero__stats">
            <div className="hero__stat"><strong>AI-First</strong><span>Embedded, not added-on</span></div>
            <div className="hero__stat"><strong>End-to-End</strong><span>Strategy to optimization</span></div>
            <div className="hero__stat"><strong>Vendor-Agnostic</strong><span>Best-fit technology</span></div>
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Engineering intelligent, secure &amp; scalable IT solutions</h2>
            <p className="lead mt-lg">
              DigoIT Solution PVT LTD helps organizations turn disconnected systems and
              manual processes into connected, data-driven operations. We bring AI, cloud,
              ERP, SAP and IoT together into solutions that are secure by design and built to scale.
            </p>
            <CheckList items={[
              "AI embedded across solutions — not bolted on afterwards",
              "Vendor-agnostic approach using best-fit technology",
              "Security and compliance readiness built in from day one",
            ]} />
            <Link className="btn btn--outline mt-xl" to="/about">Learn More About Us <span aria-hidden="true">→</span></Link>
          </div>
          <div
            className="media media--badge"
            data-badge="Turning Ideas Into Impact"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80')" }}
          />
        </div>
      </section>

      {/* Services overview */}
      <section className="section section--light">
        <div className="container">
          <SectionHead center eyebrow="What we do" title="Our key services">
            A connected set of capabilities that modernize core systems and unlock measurable business outcomes.
          </SectionHead>
          <ServiceCarousel />
          <div className="text-center mt-xl">
            <Link className="btn btn--solid" to="/services">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section--navy">
        <div className="container">
          <SectionHead center eyebrow="Why DigoIT" title="Why leading businesses choose us">
            Our advantage is a practical one — the right technology, delivered end to end, with security and scale built in.
          </SectionHead>
          <div className="grid grid--3">
            <Feature icon="ai" title="AI-First, Not AI-Added">AI is embedded across our solutions from the start, not treated as an afterthought.</Feature>
            <Feature icon="layers" title="End-to-End Ownership">From strategy and design through to deployment and continuous optimization.</Feature>
            <Feature icon="blocks" title="Vendor-Agnostic">We recommend best-fit technology for your needs, never forced or locked-in tools.</Feature>
            <Feature icon="shieldPlain" title="Security by Design">Built-in cybersecurity and compliance readiness across every engagement.</Feature>
            <Feature icon="trend" title="Scalable & Future-Ready">Architectures designed to grow with your business and adapt to what&rsquo;s next.</Feature>
            <Feature icon="bolt" title="Faster Time-to-Value">Pragmatic delivery that gets solutions into production with measurable ROI.</Feature>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="How we work" title="The DigoIT delivery framework">
            A clear, repeatable path from understanding your goals to scaling the solution that delivers them.
          </SectionHead>
          <Steps steps={steps} />
        </div>
      </section>

      {/* Industries */}
      <section className="section section--light">
        <div className="container">
          <SectionHead center eyebrow="Industries we serve" title="Solutions that deliver across sectors" />
          <div className="grid grid--3">
            <Industry icon="factory" title="Manufacturing">Smart factory analytics, predictive maintenance, ERP &amp; SAP optimization.</Industry>
            <Industry icon="truck" title="Logistics & Supply Chain">Real-time tracking, AI-driven demand forecasting, ERP + TMS integration.</Industry>
            <Industry icon="health" title="Healthcare">Secure patient data systems, compliance-driven cloud, intelligent dashboards.</Industry>
            <Industry icon="bank" title="BFSI / FinTech">Secure compliant platforms, AI-powered risk &amp; fraud analytics, modernization.</Industry>
            <Industry icon="cart" title="Retail & E-Commerce">Customer behavior analytics, inventory automation, CRM-driven personalization.</Industry>
            <Industry icon="building" title="Enterprises & SMEs">End-to-end digital transformation, cloud migration and custom ERP &amp; CRM.</Industry>
          </div>
        </div>
      </section>

      <CTABand
        title="Let’s build intelligent solutions — together"
        text="Start with a discovery discussion to understand your goals, then get a high-level solution roadmap with clear scope, timeline and outcomes."
        primary={{ to: "/contact", label: "Contact Us" }}
        secondary={{ to: "/services", label: "Explore Our Services" }}
      />
    </>
  );
}
