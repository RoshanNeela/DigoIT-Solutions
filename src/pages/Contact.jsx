import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import Icon from "../components/Icon.jsx";
import { PageBanner, CheckList } from "../components/ui.jsx";
import { company } from "../data/services.js";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+()\-\s\d]{7,20}$/;

const validators = {
  name: (v) => (!v.trim() ? "Please enter your name." : v.trim().length < 2 ? "Name looks too short." : ""),
  email: (v) => (!v.trim() ? "Please enter your email address." : !emailRe.test(v.trim()) ? "Enter a valid email, e.g. name@company.com." : ""),
  phone: (v) => (!v.trim() ? "Please enter a phone number." : !phoneRe.test(v.trim()) ? "Enter a valid phone number." : ""),
  subject: (v) => (!v.trim() ? "Please choose a subject." : ""),
  message: (v) => (!v.trim() ? "Please tell us a little about your requirement." : v.trim().length < 10 ? "Please add a few more details (10+ characters)." : ""),
};

const empty = { name: "", email: "", phone: "", subject: "", message: "" };

const subjects = [
  "Cloud Implementation & Migration", "AI & ML Solutions", "SAP Implementation",
  "IoT Integrations", "Custom ERP & CRM", "Cyber Security", "Microsoft Licenses", "General enquiry",
];

export default function Contact() {
  usePageMeta(
    "Contact Us | DigoIT Global",
    "Contact DigoIT Solution PVT LTD — Hyderabad. Call +91 7702480969, email info@digoit.com, or send us a message."
  );

  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type, msg }

  const setField = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors((e) => ({ ...e, [name]: validators[name](value) }));
    }
  };

  const onBlur = (name) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((e) => ({ ...e, [name]: validators[name](values[name]) }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    Object.keys(validators).forEach((k) => { nextErrors[k] = validators[k](values[k]); });
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });

    const firstInvalid = Object.keys(nextErrors).find((k) => nextErrors[k]);
    if (firstInvalid) {
      setStatus({ type: "error", msg: "Please correct the highlighted fields and try again." });
      const el = document.getElementById(firstInvalid);
      if (el) el.focus();
      return;
    }

    // Honest demo submission — no live endpoint is configured in this project.
    setSubmitting(true);
    setStatus(null);
    setTimeout(() => {
      setSubmitting(false);
      setStatus({
        type: "success",
        msg: "Thanks! Your details are validated. This is a demo form — no live submission endpoint is connected yet, so please also reach us at info@digoit.com or +91 7702480969 and we'll respond quickly.",
      });
      setValues(empty);
      setTouched({});
    }, 1200);
  };

  const fieldClass = (name) => "field" + (touched[name] && errors[name] ? " has-error" : "");

  return (
    <>
      <PageBanner
        bg="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=80"
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        title="Let’s Build Intelligent Solutions — Together"
      >
        Tell us about your goals and we’ll follow up with a discovery discussion and a clear next step.
      </PageBanner>

      <section className="section">
        <div className="container contact-grid">
          {/* Info */}
          <aside className="info-card">
            <h3>Connect with us</h3>
            <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>
              Reach out directly or send a message — we usually respond quickly.
            </p>
            <div className="info-item">
              <span className="info-item__icon"><Icon name="pin" /></span>
              <div><div className="info-item__label">Office</div><span>{company.address}</span></div>
            </div>
            <div className="info-item">
              <span className="info-item__icon"><Icon name="phone" /></span>
              <div><div className="info-item__label">Phone</div><a href={company.phoneHref}>{company.phone}</a></div>
            </div>
            <div className="info-item">
              <span className="info-item__icon"><Icon name="mail" /></span>
              <div><div className="info-item__label">Email</div><a href={`mailto:${company.email}`}>{company.email}</a></div>
            </div>
            <div className="info-item">
              <span className="info-item__icon"><Icon name="globe" /></span>
              <div><div className="info-item__label">Website</div><a href={company.website} target="_blank" rel="noopener noreferrer">{company.websiteLabel}</a></div>
            </div>

            <div style={{ marginTop: "1.75rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="info-item__label" style={{ marginBottom: "0.6rem" }}>What happens next</div>
              <CheckList items={[
                "Discovery discussion to understand your goals",
                "High-level solution roadmap",
                "Clear scope, timeline & outcomes",
              ]} />
            </div>
          </aside>

          {/* Form */}
          <div className="form-card">
            <h3>Send us a message</h3>
            <p className="lead" style={{ fontSize: "1rem", margin: "0.4rem 0 1.5rem" }}>
              Fields marked <span style={{ color: "var(--color-error)" }}>*</span> are required.
            </p>

            {status && (
              <div className={"form-status is-visible form-status--" + status.type} role="alert">
                <Icon name={status.type === "success" ? "check" : "alert"} />
                <span>{status.msg}</span>
              </div>
            )}

            <form onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                <div className={fieldClass("name")}>
                  <label htmlFor="name">Name <span className="req">*</span></label>
                  <input id="name" name="name" type="text" autoComplete="name" placeholder="Your full name"
                    value={values.name} onChange={(e) => setField("name", e.target.value)} onBlur={() => onBlur("name")}
                    aria-invalid={!!(touched.name && errors.name)} />
                  <span className="field__error">{touched.name && errors.name}</span>
                </div>
                <div className={fieldClass("email")}>
                  <label htmlFor="email">Email <span className="req">*</span></label>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="name@company.com"
                    value={values.email} onChange={(e) => setField("email", e.target.value)} onBlur={() => onBlur("email")}
                    aria-invalid={!!(touched.email && errors.email)} />
                  <span className="field__error">{touched.email && errors.email}</span>
                </div>
                <div className={fieldClass("phone")}>
                  <label htmlFor="phone">Phone <span className="req">*</span></label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000"
                    value={values.phone} onChange={(e) => setField("phone", e.target.value)} onBlur={() => onBlur("phone")}
                    aria-invalid={!!(touched.phone && errors.phone)} />
                  <span className="field__error">{touched.phone && errors.phone}</span>
                </div>
                <div className={fieldClass("subject")}>
                  <label htmlFor="subject">Subject <span className="req">*</span></label>
                  <select id="subject" name="subject"
                    value={values.subject} onChange={(e) => setField("subject", e.target.value)} onBlur={() => onBlur("subject")}
                    aria-invalid={!!(touched.subject && errors.subject)}>
                    <option value="">Select a subject</option>
                    {subjects.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <span className="field__error">{touched.subject && errors.subject}</span>
                </div>
                <div className={fieldClass("message") + " field--full"}>
                  <label htmlFor="message">Message <span className="req">*</span></label>
                  <textarea id="message" name="message" placeholder="Tell us about your requirement, timeline and goals..."
                    value={values.message} onChange={(e) => setField("message", e.target.value)} onBlur={() => onBlur("message")}
                    aria-invalid={!!(touched.message && errors.message)} />
                  <span className="field__error">{touched.message && errors.message}</span>
                </div>
              </div>
              <button type="submit" className="btn btn--primary btn--lg btn--block" style={{ marginTop: "0.5rem" }} aria-busy={submitting}>
                <span className="spinner" aria-hidden="true" />
                <span className="btn__label">{submitting ? "Sending..." : "Send Message"}</span>
              </button>
              <p className="form-note">
                By submitting, you agree to be contacted about your enquiry. This demo form validates your
                details in the browser; no live submission endpoint is connected yet, so please also reach us
                at <a href={`mailto:${company.email}`}>{company.email}</a>.
              </p>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="container">
          <div className="map-wrap">
            <iframe
              title="DigoIT office location — Tolichowki, Hyderabad"
              src="https://www.google.com/maps?q=Tolichowki,+Hyderabad,+Telangana+500008&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
