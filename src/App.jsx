// src/App.jsx
import { useEffect, useState } from "react";
import { Moon, Sun, ArrowUpRight } from "lucide-react";

/* === Personalize these === */
const YOUR_NAME = "Ravinder Mogili";
const LOCATION = "Moncton, NB, Canada";

const LINKEDIN_URL = "https://www.linkedin.com/in/ravindermogili/";
const GITHUB_URL = "https://github.com/RavinderMogili";
const EMAIL = "mogili.ravinder@gmail.com";
const LAST_UPDATED = "jul 2026";
/* ========================= */

const skillGroups = [
  { label: "Languages", items: "C, C++ (11/14/17/20), Rust, Python, C#" },
  { label: "Systems", items: "Embedded Linux, Windows, multithreading, state machines, NVRAM persistence, IPC (sockets, shared memory, message queues)" },
  { label: "Networking", items: "TCP/IP, TLS/SSL, gRPC, Protocol Buffers, WebSocket, G2S, SAS" },
  { label: "Debugging", items: "gdb, WinDbg, ETW, core-dump and watchdog analysis, structured logging" },
  { label: "Tooling", items: "Buildroot, Git, Perforce, Jenkins, TeamCity, Docker, Google Test" },
];

const projects = [
  {
    title: "Daily Math for Kids",
    year: "2025",
    summary:
      "A free site that publishes 10 new kid-friendly math problems every day, generated with AI. I built the whole thing: the site, plus a small API on Vercel + Supabase that stores submissions and tracks each kid's progress. It's live and updates itself daily.",
    tags: "JavaScript · Vercel · Supabase · OpenAI",
    live: "https://dailymathforkids.com",
    repo: "https://github.com/RavinderMogili/dailymathforkids",
    featured: true,
  },
  {
    title: "Supply Chain Analytics Engine",
    year: "2026",
    summary:
      "A C++23 planning engine: EOQ, safety stock, demand forecasting (Holt / EMA / SMA), digital-twin simulation and parallel disruption-scenario analysis. Built while teaching myself supply-chain planning from the ground up and a good excuse to push modern C++ hard.",
    tags: "C++23 · concurrency · simulation",
    repo: "https://github.com/RavinderMogili/supply-chain-analytics-engine",
  },
  {
    title: "Supply Chain Risk Assistant",
    year: "2026",
    summary:
      "A conversational planning assistant in Python. Ask it about stockout risk, safety stock, or delay causes in plain English and it runs the what-if scenarios for you. My first real build after the Oracle agentic AI courses, pairing the analytics engine above with an LLM front end.",
    tags: "Python · LLMs · agents",
    repo: "https://github.com/RavinderMogili/supply-chain-risk-assistant",
  },
  {
    title: "Packet Sniffer",
    year: "2025",
    summary:
      "A small C++ packet sniffer on libpcap. Captures live traffic and decodes Ethernet/IP/TCP/UDP headers. Built to have a clean, minimal reference for the kind of protocol work I do daily.",
    tags: "C++ · libpcap · networking",
    repo: "https://github.com/RavinderMogili/packet-sniffer",
  },
];

const experience = [
  {
    role: "Senior Embedded Software Developer, Bluberi Gaming Technologies",
    period: "2025 - now",
    bullets: [
      "Real-time firmware for cloud-connected gaming devices on Embedded Linux and custom hardware",
      "gRPC/protobuf communication between C firmware, a Rust middleware layer and cloud services",
      "Game-cycle state machines with NVRAM persistence and TLS-secured protocol handling",
      "Root-caused race conditions in power-failure recovery that were causing watchdog resets and state corruption in the field",
    ],
  },
  {
    role: "Senior Software Developer, IGT Canada",
    period: "2020 - 2025",
    bullets: [
      "Platform runtime services for gaming machines in modern C++: money management, reporting, device control",
      "Low-latency multithreaded services and IPC: shared memory, message queues, sockets",
      "G2S protocol integration, Google Test and validation on real machines under regulatory compliance",
    ],
  },
  {
    role: "Software Developer, IGT Canada",
    period: "2014 - 2020",
    bullets: [
      "Reel, Poker and Keno casino games in C/C++ for regulated markets worldwide",
      "Market-specific math models, payout structures, jackpots and bonus features",
      "System-level debugging and performance tuning on Linux",
    ],
  },
];

const certs = [
  {
    name: "Oracle Agentic AI Foundations Associate",
    year: "2026",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=663705B968EF76831E301D452780980EE82DD59A40B36496FE166A32FFC92B05",
  },
  {
    name: "Oracle Generative AI Professional",
    year: "2025",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=97892013D224A31C7AD8A38F6F09ECF5551CCDF1955D8111A47BCF17E8812E14",
  },
  {
    name: "Oracle Generative AI Foundations",
    year: "2025",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E337D23FDF2BC3D63A57FB4F0F5F92A3F255EB08922F54316810E4C8E0131429",
  },
];

function useTheme() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark"
  );
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 mt-20">
      <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-stone-400 dark:text-stone-500 mb-7">
        {title}
      </h2>
      {children}
    </section>
  );
}

function TextLink({ href, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="underline decoration-stone-300 dark:decoration-stone-600 underline-offset-4 hover:decoration-teal-600 hover:text-teal-800 dark:hover:text-teal-300 dark:hover:decoration-teal-400 transition-colors"
    >
      {children}
    </a>
  );
}

export default function App() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 dark:bg-stone-950 dark:text-stone-300 antialiased selection:bg-teal-100 dark:selection:bg-teal-900/60">
      <div className="max-w-[40rem] mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <header className="flex items-baseline justify-between">
          <a href="#home" className="font-serif text-lg text-stone-900 dark:text-stone-100">
            {YOUR_NAME}
          </a>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </header>

        {/* Intro */}
        <main id="home">
          <section className="relative mt-16 md:mt-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-12 -top-12 h-80 [background-image:radial-gradient(circle,rgba(128,124,118,0.25)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
            />
            <h1 className="relative font-serif text-3xl md:text-[2.6rem] leading-tight text-stone-900 dark:text-stone-100">
              Senior <em className="text-teal-700 dark:text-teal-400">embedded</em> software
              engineer. C++, real-time systems, networking.
            </h1>
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              12 years building firmware and platform software in regulated,
              high-reliability environments. Recently working with generative AI and
              AI agents as well.
            </p>
            <p className="mt-7 leading-relaxed">
              I work at Bluberi, building real-time firmware for cloud-connected
              devices on Embedded Linux: gRPC between C firmware and Rust middleware,
              TLS-secured protocols and the deep debugging that goes with it. Before
              that, 11 years at IGT doing platform and game software. All of it in
              regulated markets where reliability comes first.
            </p>
            <p className="mt-4 leading-relaxed">
              Those skills carry over anywhere. Lately I&apos;ve been putting them to work
              in new areas: I earned Oracle&apos;s generative and agentic AI certifications
              and built working projects in supply-chain planning and AI agents to get
              hands-on with those domains.
            </p>
            <p className="mt-7 font-mono text-[0.8rem] text-stone-500 dark:text-stone-400">
              {LOCATION} &nbsp;·&nbsp; <TextLink href={`mailto:${EMAIL}`}>email</TextLink>{" "}
              &nbsp;·&nbsp; <TextLink href={GITHUB_URL}>github</TextLink> &nbsp;·&nbsp;{" "}
              <TextLink href={LINKEDIN_URL}>linkedin</TextLink>
            </p>
          </section>

          {/* Projects */}
          <Section id="projects" title="Things I've built">
            <div className="space-y-10">
              {projects.map((p) => (
                <article key={p.title} className="relative">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-medium text-stone-900 dark:text-stone-100">
                      {p.live ? (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                        >
                          {p.title}
                          <ArrowUpRight className="h-3.5 w-3.5 text-stone-400" />
                        </a>
                      ) : (
                        p.title
                      )}
                      {p.featured && (
                        <span className="ml-2 font-mono text-[0.65rem] uppercase tracking-wider text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-900 rounded px-1.5 py-0.5 align-middle">
                          live
                        </span>
                      )}
                    </h3>
                    <span className="font-mono text-xs text-stone-400 dark:text-stone-500 shrink-0 lg:absolute lg:-left-28 lg:top-1 lg:w-20 lg:text-right">
                      {p.year}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.95rem] leading-relaxed">{p.summary}</p>
                  <p className="mt-2 font-mono text-xs text-stone-500 dark:text-stone-400">
                    {p.tags} &nbsp;·&nbsp; <TextLink href={p.repo}>source</TextLink>
                    {p.live && (
                      <>
                        {" "}&nbsp;·&nbsp; <TextLink href={p.live}>{p.live.replace("https://", "")}</TextLink>
                      </>
                    )}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm text-stone-500 dark:text-stone-400">
              More on <TextLink href={GITHUB_URL}>GitHub</TextLink>.
            </p>
          </Section>

          {/* Work */}
          <Section id="work" title="Work">
            <div className="space-y-8">
              {experience.map((e) => (
                <div key={e.role} className="relative">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-medium text-stone-900 dark:text-stone-100">{e.role}</h3>
                    <span className="font-mono text-xs text-stone-400 dark:text-stone-500 shrink-0 lg:absolute lg:-left-28 lg:top-1 lg:w-20 lg:text-right">
                      {e.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed list-disc pl-5 marker:text-stone-300 dark:marker:text-stone-600">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Skills */}
          <Section id="skills" title="Toolbox">
            <dl className="space-y-2.5">
              {skillGroups.map((g) => (
                <div key={g.label} className="grid grid-cols-[7rem_1fr] gap-3 text-[0.95rem]">
                  <dt className="font-mono text-xs pt-0.5 text-stone-400 dark:text-stone-500">
                    {g.label}
                  </dt>
                  <dd className="leading-relaxed">{g.items}</dd>
                </div>
              ))}
            </dl>
          </Section>

          {/* Certifications */}
          <Section id="certs" title="Certifications">
            <ul className="space-y-2.5">
              {certs.map((c) => (
                <li key={c.name} className="relative flex items-baseline justify-between gap-4 text-[0.95rem]">
                  <span>
                    {c.name}
                    {c.url && (
                      <>
                        {" "}
                        <span className="text-stone-300 dark:text-stone-600">·</span>{" "}
                        <span className="font-mono text-xs">
                          <TextLink href={c.url}>verify</TextLink>
                        </span>
                      </>
                    )}
                  </span>
                  <span className="font-mono text-xs text-stone-400 dark:text-stone-500 shrink-0 lg:absolute lg:-left-28 lg:top-1 lg:w-20 lg:text-right">
                    {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Contact */}
          <Section id="contact" title="Say hello">
            <p className="leading-relaxed">
              The best way to reach me is email:{" "}
              <TextLink href={`mailto:${EMAIL}`}>{EMAIL}</TextLink>. I&apos;m always happy
              to talk about systems programming, networking, or what people are actually
              doing with AI agents.
            </p>
          </Section>

          <footer className="mt-20 pt-8 border-t border-stone-200 dark:border-stone-800 font-mono text-xs text-stone-400 dark:text-stone-500 flex flex-wrap gap-2 justify-between lowercase">
            <span>© {new Date().getFullYear()} {YOUR_NAME}</span>
            <span>moncton, nb · last updated {LAST_UPDATED}</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
