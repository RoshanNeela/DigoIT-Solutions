import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import ServiceCard from "../components/ServiceCard.jsx";
import Icon from "../components/Icon.jsx";
import { PageBanner, SectionHead, Split, CheckList, CTABand } from "../components/ui.jsx";
import { services } from "../data/services.js";

// Detail sections for anchor navigation (/services#ai-ml, etc).
const details = [
  {
    id: "ai-ml", eyebrow: "AI & ML Solutions", mediaRight: false, light: true,
    title: "Intelligence embedded across your operations",
    media: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1000&q=80",
    lead: "Turn data into decisions with machine learning, predictive analytics and automation designed around your processes.",
    points: ["Machine learning and AI model development", "Predictive analytics & automation", "Natural language processing solutions", "AI-driven insights for continuous optimization"],
    cta: "Discuss an AI project",
  },
  {
    id: "sap", eyebrow: "SAP Implementation", mediaRight: true, light: false,
    title: "Modern SAP, tailored to your industry",
    media: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    lead: "Deploy and migrate SAP with confidence, and optimize the processes that run your business.",
    points: ["SAP S/4HANA deployment and migration", "Custom SAP solutions for industry needs", "Process optimization and automation", "Integration with ERP, CRM and cloud ecosystems"],
    cta: "Talk to us about SAP",
  },
  {
    id: "iot", eyebrow: "IoT Integrations", mediaRight: false, light: true,
    title: "Connected monitoring and real-time insight",
    media: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1000&q=80",
    lead: "Bring physical operations online with sensors, analytics and automation for factories and logistics.",
    points: ["IoT-enabled monitoring and analytics", "Smart sensors and real-time alerts", "Automation for smart factories and logistics", "IoT-powered real-time monitoring aligned to business goals"],
    cta: "Explore IoT with us",
  },
  {
    id: "erp", eyebrow: "Custom ERP & CRM", mediaRight: true, light: false,
    title: "Platforms built around how you work",
    media: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    lead: "Replace disconnected tools with integrated ERP and CRM that centralize operations and surface live data.",
    points: ["Custom ERP and CRM development", "Seamless integration with existing systems", "Advanced analytics and reporting", "Integrated ERP, CRM & SAP ecosystems"],
    cta: "Plan your ERP/CRM",
  },
  {
    id: "security", eyebrow: "Cyber Security", mediaRight: false, light: true,
    title: "Security and compliance, built in",
    media: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    lead: "Protect data and systems with a security-by-design approach that addresses growing threats and regulatory pressures.",
    points: ["Security-by-design architecture", "Risk mitigation and compliance readiness", "Secure, cloud-first deployment", "Improved security posture across the stack"],
    cta: "Strengthen your security",
  },
];

export default function Services() {
  usePageMeta(
    "Services | DigoIT Global",
    "Explore DigoIT's services — Cloud Implementation & Migration, AI & ML, SAP, IoT, Custom ERP & CRM, Cyber Security and Microsoft Licenses."
  );

  return (
    <>
      <PageBanner
        bg="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        title="Our Services"
      >
        Intelligent, secure and scalable capabilities — delivered end to end and connected across your business.
      </PageBanner>

      {/* Overview grid */}
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="Capability overview" title="What we deliver">
            Select a service to jump to details, or explore our flagship Cloud Implementation &amp; Migration page.
          </SectionHead>
          <div className="grid grid--3">
            {services.map((s) => <ServiceCard key={s.id} service={s} showPoints />)}
          </div>
          <div className="pill-list mt-xl" style={{ justifyContent: "center" }}>
            <span className="pill"><Icon name="license" /> Microsoft Licenses available</span>
            <span className="pill"><Icon name="check" /> Vendor-agnostic delivery</span>
            <span className="pill"><Icon name="shieldPlain" /> Secure by design</span>
          </div>
        </div>
      </section>

      {/* Detail sections */}
      {details.map((d) => (
        <section className={"section" + (d.light ? " section--light" : "")} id={d.id} key={d.id}>
          <Split eyebrow={d.eyebrow} title={d.title} media={d.media} mediaRight={d.mediaRight}>
            <p className="lead mt-lg">{d.lead}</p>
            <CheckList items={d.points} />
            <Link className="btn btn--outline mt-xl" to="/contact">{d.cta} <span aria-hidden="true">→</span></Link>
          </Split>
        </section>
      ))}

      <CTABand
        title="Not sure where to start?"
        text="Begin with a discovery discussion. We’ll map a high-level solution roadmap with clear scope, timeline and outcomes."
        primary={{ to: "/contact", label: "Contact Us" }}
        secondary={{ to: "/services/cloud-implementation-migration", label: "See Cloud Services" }}
      />
    </>
  );
}
