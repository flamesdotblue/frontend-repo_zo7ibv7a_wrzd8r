import HeaderHero from "./components/HeaderHero";
import ServicesGrid from "./components/ServicesGrid";
import QuickRequestForm from "./components/QuickRequestForm";
import EmergencyBanner from "./components/EmergencyBanner";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <EmergencyBanner />
      <HeaderHero />
      <ServicesGrid />
      <QuickRequestForm />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} RapidHome Assist. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#services" className="text-slate-600 hover:text-slate-900">Services</a>
            <a href="#request" className="text-slate-600 hover:text-slate-900">Request Help</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
