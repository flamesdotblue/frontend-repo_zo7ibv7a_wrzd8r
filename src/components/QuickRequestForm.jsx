import { useState } from "react";
import { PhoneCall, MapPin, Wrench } from "lucide-react";

const initialState = {
  name: "",
  phone: "",
  address: "",
  service: "Plumbing",
  urgency: "Emergency (within 2 hrs)",
  details: "",
};

export default function QuickRequestForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend calls yet; this is a front-end confirmation only.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm(initialState);
  }

  return (
    <section id="request" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold sm:text-3xl">Request immediate help</h2>
            <p className="mt-2 text-slate-600">
              Share a few details and we’ll assign the closest certified technician.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><PhoneCall size={16} className="text-blue-600"/> 24/7 hotline: <a href="tel:+18001234567" className="font-semibold text-blue-700">(800) 123-4567</a></li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-blue-600"/> Average arrival 60–90 minutes</li>
              <li className="flex items-center gap-2"><Wrench size={16} className="text-blue-600"/> Fully insured & background-checked pros</li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              {submitted && (
                <div className="absolute inset-x-4 top-4 z-10 rounded-lg bg-emerald-50 p-3 text-emerald-800 ring-1 ring-emerald-200">
                  Request received! We’ll call you shortly to confirm the details.
                </div>
              )}

              <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-sm font-medium text-slate-700">Full name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 555-5555"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-slate-700">Address</label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder="123 Main St, City, State"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-blue-500 focus:ring"
                  >
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>HVAC</option>
                    <option>Locksmith</option>
                    <option>Handyman</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Urgency</label>
                  <select
                    name="urgency"
                    value={form.urgency}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-blue-500 focus:ring"
                  >
                    <option>Emergency (within 2 hrs)</option>
                    <option>Same day</option>
                    <option>Schedule (choose date)</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-slate-700">Details</label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the issue briefly"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow hover:bg-blue-700"
                  >
                    Submit request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
