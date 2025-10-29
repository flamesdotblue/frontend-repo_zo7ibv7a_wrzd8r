import { PhoneCall, Shield, Clock } from "lucide-react";

export default function HeaderHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute right-0 -bottom-10 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur">
              <Shield size={16} /> Trusted professionals, 24/7
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Emergency Home Services
              <span className="block text-blue-100">Fast help when you need it most</span>
            </h1>
            <p className="mt-4 max-w-xl text-blue-50/90">
              Plumbing leaks, electrical faults, HVAC issues, lockouts and more — book a certified pro in minutes. We operate day and night so your home stays safe and comfortable.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:+18001234567"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 shadow hover:bg-blue-50"
              >
                <PhoneCall size={18} /> Call now
              </a>
              <a
                href="#request"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                Book a pro
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-blue-50/90">
              <div className="flex items-center gap-2">
                <Clock size={16} /> 60–90 min average arrival
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} /> Vetted & insured experts
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto h-80 w-80 rounded-3xl bg-white/10 p-4 backdrop-blur md:h-96 md:w-96">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-tr from-white/80 to-white/30">
                <div className="grid grid-cols-2 gap-4 p-4 text-blue-700">
                  <Feature icon={<span className=\"font-bold\">H2O</span>} label="Plumbing" />
                  <Feature icon={<span className=\"font-bold\">⚡</span>} label="Electrical" />
                  <Feature icon={<span className=\"font-bold\">❄️</span>} label="HVAC" />
                  <Feature icon={<span className=\"font-bold\">🔐</span>} label="Locksmith" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-3 text-blue-800 shadow-sm">
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white">
        {icon}
      </div>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}
