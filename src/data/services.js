// Single source of truth for services — reused by the nav dropdown,
// footer, home overview and services page. Content is drawn from the
// verified DigoIT company profile.

export const services = [
  {
    id: "cloud",
    icon: "cloud",
    title: "Cloud Implementation & Migration",
    short: "Secure, scalable cloud setup & migration",
    desc: "Cloud-first infrastructure, migration planning and execution, disaster recovery and data backup.",
    to: "/services/cloud-implementation-migration",
    points: [
      "Cloud infrastructure setup and management",
      "Secure, scalable cloud architectures",
      "Disaster recovery and data backup",
    ],
  },
  {
    id: "ai-ml",
    icon: "ai",
    title: "AI & ML Solutions",
    short: "Models, predictive analytics & automation",
    desc: "Machine learning and AI model development, predictive analytics, automation and NLP.",
    to: "/services#ai-ml",
    points: [
      "Machine learning and AI model development",
      "Predictive analytics & automation",
      "Natural language processing solutions",
    ],
  },
  {
    id: "sap",
    icon: "sap",
    title: "SAP Implementation",
    short: "S/4HANA deployment & process optimization",
    desc: "SAP S/4HANA deployment and migration, custom SAP solutions and process optimization.",
    to: "/services#sap",
    points: [
      "SAP S/4HANA deployment and migration",
      "Custom SAP solutions for industry needs",
      "Process optimization and automation",
    ],
  },
  {
    id: "iot",
    icon: "iot",
    title: "IoT Integrations",
    short: "Connected monitoring & real-time alerts",
    desc: "IoT-enabled monitoring and analytics, smart sensors, real-time alerts and automation.",
    to: "/services#iot",
    points: [
      "IoT-enabled monitoring and analytics",
      "Smart sensors and real-time alerts",
      "Automation for smart factories and logistics",
    ],
  },
  {
    id: "erp",
    icon: "erp",
    title: "Custom ERP & CRM",
    short: "Tailored platforms built around your workflow",
    desc: "Custom ERP and CRM development, seamless integration and advanced analytics & reporting.",
    to: "/services#erp",
    points: [
      "Custom ERP and CRM development",
      "Seamless integration with existing systems",
      "Advanced analytics and reporting",
    ],
  },
  {
    id: "security",
    icon: "shield",
    title: "Cyber Security",
    short: "Security-by-design & compliance readiness",
    desc: "Security-by-design architecture with risk mitigation and compliance readiness.",
    to: "/services#security",
    points: [
      "Security-by-design architecture",
      "Risk mitigation and compliance readiness",
      "Secure, cloud-first deployment",
    ],
  },
];

export const company = {
  name: "DigoIT Solution PVT LTD",
  brand: "DigoIT Global",
  tagline: "Innovate. Transform. Succeed.",
  mission: "Engineering Intelligent, Secure & Scalable IT Solutions",
  phone: "+91 7702480969",
  phoneHref: "tel:+917702480969",
  email: "info@digoit.com",
  website: "https://www.digoit.com",
  websiteLabel: "www.digoit.com",
  address: "Sattva Magnus, Shaikpet, Tolichowki, Hyderabad – 500008",
};
