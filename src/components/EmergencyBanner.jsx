import { PhoneCall, Clock } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="sticky top-0 z-40 w-full border-b border-blue-100 bg-blue-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-sm text-blue-900">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-blue-700" />
          <span className="font-medium">Open 24/7</span>
          <span className="hidden text-blue-800/70 sm:inline">— Immediate dispatch for emergencies</span>
        </div>
        <a
          href="tel:+18001234567"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1.5 font-semibold text-white shadow hover:bg-blue-700"
        >
          <PhoneCall size={16} /> (800) 123-4567
        </a>
      </div>
    </div>
  );
}
