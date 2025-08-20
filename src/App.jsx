import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, CheckCircle2, Shield, Clock, Briefcase, Calculator, PieChart, FileText, Building2, ArrowRight } from "lucide-react";

// —— Quick settings ——————————————————————————————————————————————
const CONFIG = {
  firmName: "ArunaAbhi Accouting Services",
  tagline: "Reliable accounting, tax & advisory for small businesses",
  phone: "+91-9705876333",
  email: "Sankararao_kuppili71@yahoo.com",
  address: "304 C-Block Anand Arcade, Near Pollocks School, Madhurwada, Visakhapatnam, 530048 ",
  hours: "Mon–Fri: 9:00 AM – 6:00 PM",
  primaryCTA: {
    label: "Book a Free Consultation",
    href: "mailto:Sankararao_kuppili71@yahoo.com?subject=Consultation%20Request",
  },
  services: [
    {
      title: "Bookkeeping & Reporting",
      icon: PieChart,
      desc: "Monthly books, reconciliations, and management reports you can trust.",
    },
    {
      title: "Tax Planning & Filing",
      icon: FileText,
      desc: "Personal & corporate returns, quarterly estimates, and proactive strategy.",
    },
    {
      title: "Payroll & Compliance",
      icon: Building2,
      desc: "End‑to‑end payroll, filings, and compliance so you can focus on growth.",
    },
    {
      title: "CFO Advisory",
      icon: Briefcase,
      desc: "Forecasting, cash‑flow planning, KPIs, and board‑ready insights.",
    },
    {
      title: "Incorporation & Setup",
      icon: Shield,
      desc: "LLC/Corp setup, EIN, accounting systems, and first‑year playbook.",
    },
    {
      title: "Accounting System Cleanup",
      icon: Calculator,
      desc: "Catch‑ups, clean‑ups, and migrations (QuickBooks, Xero, Zoho, Wave).",
    },
  ],
  testimonials: [
    {
      quote:
        "They transformed our books and gave us clear monthly reports. Tax season stopped being scary.",
      name: "Riya S.",
      role: "Founder, Bright Tea Co.",
    },
    {
      quote:
        "Their cash‑flow forecasts helped us plan hiring confidently. Highly recommend their advisory.",
      name: "Daniel M.",
      role: "CEO, North Loop Studio",
    },
    {
      quote:
        "Responsive, precise, and proactive. Exactly what we needed from an accounting partner.",
      name: "Angela P.",
      role: "Owner, River Deli",
    },
  ],
  faqs: [
    {
      q: "What industries do you support?",
      a: "We work with service businesses, e‑commerce, healthcare clinics, restaurants, and professional firms.",
    },
    {
      q: "Do you work remotely?",
      a: "Yes. We serve clients across the U.S. securely using cloud tools and encrypted portals.",
    },
    {
      q: "Which accounting software do you support?",
      a: "QuickBooks Online, Xero, Zoho Books, and Wave. We also advise on app stacks for payroll and billing.",
    },
  ],
};

// —— Small UI helpers ——————————————————————————————————————————————
const Container = ({ children, className = "" }) => (
  <div className={`w-full px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-16 sm:py-20 ${className}`}>{children}</section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">{children}</span>
);

// —— NavBar ——————————————————————————————————————————————————————
function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <Container className="max-w-none">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            {CONFIG.firmName}
          </a>
          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-600 hover:text-gray-900">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={CONFIG.primaryCTA.href}
            className="hidden rounded-2xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black md:inline-flex items-center gap-2"
          >
            <Phone className="h-4 w-4" /> {CONFIG.primaryCTA.label}
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="pb-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-gray-700" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href={CONFIG.primaryCTA.href} className="rounded-2xl bg-gray-900 px-4 py-2 text-sm font-medium text-white inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> {CONFIG.primaryCTA.label}
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

// —— Hero —————————————————————————————————————————————————————————
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <Container className="max-w-none">
        <div className="flex flex-col items-start gap-8 py-20 sm:py-28 md:flex-row md:items-center md:gap-16">
          <div className="w-full md:w-1/2">
            <Badge>Trusted • Responsive • Precise</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              {CONFIG.firmName}
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
              {CONFIG.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={CONFIG.primaryCTA.href} className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-white hover:bg-black">
                <ArrowRight className="h-4 w-4" /> {CONFIG.primaryCTA.label}
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 hover:bg-gray-50">
                <CheckCircle2 className="h-4 w-4" /> Explore services
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /><a href={`tel:${CONFIG.phone}`}>{CONFIG.phone}</a></div>
              <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /><a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></div>
              <div className="inline-flex items-center gap-2"><Clock className="h-4 w-4" />{CONFIG.hours}</div>
            </div>
          </div>
          <div className="relative w-full md:w-1/2">
            <div className="aspect-[4/3] w-full rounded-3xl border bg-white shadow-sm">
              <div className="absolute inset-0 grid place-items-center text-center p-8">
                <p className="text-sm text-gray-500">Add a hero image or keep this clean card.</p>
                <p className="mt-2 max-w-sm text-xs text-gray-400">Tip: replace this with a team photo, office shot, or abstract financial graphic.</p>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gray-100 blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}

// —— Services —————————————————————————————————————————————————————
function Services() {
  return (
    <Section id="services" className="bg-gray-900 text-white">
      <Container className="max-w-none">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white">What we do</h2>
          <p className="mt-3 text-gray-600">Clear, fixed‑fee services tailored for owners and operators.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONFIG.services.map((s) => (
            <div key={s.title} className="group rounded-3xl border p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-2xl border p-3">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline">
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// —— About ———————————————————————————————————————————————————————
function About() {
  return (
    <Section id="about" className="bg-gray-50">
      <Container className="max-w-none">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">About us</h2>
            <p className="mt-4 text-gray-700">
              We’re a boutique team of CPAs and analysts helping founders and finance teams
              keep their numbers clean and their strategy clear. With decades of combined experience,
              we bring enterprise‑grade discipline to small and mid‑market businesses.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4" /> Dedicated account manager</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4" /> Fixed monthly pricing (no surprises)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4" /> Secure client portal & e‑signature</li>
            </ul>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <Stat label="Years experience" value="15+" />
              <Stat label="Businesses served" value="120+" />
              <Stat label="Avg response time" value="< 24h" />
              <Stat label="Client retention" value="96%" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border p-4 text-center">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-gray-500">{label}</div>
    </div>
  );
}

// —— Testimonials ———————————————————————————————————————————————
function Testimonials() {
  return (
    <Section id="testimonials" className="bg-black-60 text-white">
      <Container className="max-w-none">
        <div className="mx-auto mb-12 max-w-2xl text-center text-white">
          <h2 className="text-3xl font-semibold">Clients who trust us</h2>
          <p className="mt-3 text-gray-600">A few kind words from owners we support.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONFIG.testimonials.map((t, i) => (
            <figure key={i} className="rounded-3xl border p-6 shadow-sm">
              <blockquote className="text-sm text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium">
                {t.name} <span className="text-gray-500 font-normal">• {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// —— Contact ——————————————————————————————————————————————————————
function Contact() {
  return (
    <Section id="contact" className="bg-gray-50">
      <Container className="max-w-none">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold">Get in touch</h2>
          <p className="mt-3 text-gray-600">Tell us about your business and goals. We’ll reply within one business day.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="rounded-3xl border bg-white p-6 shadow-sm md:col-span-3">
            {/* Simple contact form that opens the user's email client */}
            <form action={`mailto:${CONFIG.email}`} method="post" encType="text/plain" className="grid gap-4">
              <div className="grid gap-2 sm:grid-cols-2">
                <input required name="name" placeholder="Your name" className="rounded-2xl border px-4 py-3 outline-none focus:ring-2" />
                <input required type="email" name="email" placeholder="Your email" className="rounded-2xl border px-4 py-3 outline-none focus:ring-2" />
              </div>
              <input name="company" placeholder="Company (optional)" className="rounded-2xl border px-4 py-3 outline-none focus:ring-2" />
              <textarea required name="message" rows={5} placeholder="How can we help?" className="rounded-2xl border px-4 py-3 outline-none focus:ring-2" />
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 font-medium text-white hover:bg-black">
                Send message <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-gray-500">Prefer email? Write to <a href={`mailto:${CONFIG.email}`} className="underline">{CONFIG.email}</a>.</p>
            </form>
          </div>
          <div className="space-y-4 md:col-span-2">
            <InfoCard icon={Phone} label="Call" value={<a href={`tel:${CONFIG.phone}`}>{CONFIG.phone}</a>} />
            <InfoCard icon={Mail} label="Email" value={<a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>} />
            <InfoCard icon={MapPin} label="Visit" value={CONFIG.address} />
            <InfoCard icon={Clock} label="Hours" value={CONFIG.hours} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-3xl border bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl border p-2"><Icon className="h-5 w-5" /></div>
        <div>
          <div className="text-sm font-medium">{label}</div>
          <div className="text-sm text-gray-700">{value}</div>
        </div>
      </div>
    </div>
  );
}

// —— Footer ———————————————————————————————————————————————————————
function Footer() {
  return (
    <footer className="border-t bg-white">
      <Container className="max-w-none">
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-gray-600 md:flex-row">
          <div>© {new Date().getFullYear()} {CONFIG.firmName}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// —— Page ——————————————————————————————————————————————————————————
export default function AccountingFirmSite() {
  return (
    <div className="antialiased text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
