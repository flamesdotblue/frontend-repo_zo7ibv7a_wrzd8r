import { Wrench, Bolt, Flame, Droplets, Shield } from "lucide-react";

const services = [
  {
    title: "Plumbing",
    desc: "Burst pipes, leaks, clogs, water heater repair and installation.",
    icon: Droplets,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Electrical",
    desc: "Power outages, breaker trips, rewiring, outlet & lighting fixes.",
    icon: Bolt,
    color: "from-yellow-400 to-amber-500",
  },
  {
    title: "HVAC",
    desc: "AC not cooling, furnace issues, maintenance and emergency repair.",
    icon: Flame,
    color: "from-rose-500 to-red-600",
  },
  {
    title: "General Handyman",
    desc: "Appliance installs, door/frame fixes, quick home repairs.",
    icon: Wrench,
    color: "from-emerald-500 to-teal-600",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Popular emergency services</h2>
            <p className="mt-1 text-sm text-slate-600">
              Certified, background-checked, and insured technicians.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 sm:flex">
            <Shield size={14} /> Satisfaction guaranteed
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, icon: Icon, color }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow`}> 
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <button className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
        Learn more →
      </button>
    </div>
  );
}
