import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[78vh] items-center pt-[72px]">
      <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="type-label text-cyanic">Error 404</p>
        <h1 className="type-display mt-6 font-display text-mist">
          This page drifted
          <br />
          <span className="text-gradient">out of orbit.</span>
        </h1>
        <p className="type-body-lg mx-auto mt-6 max-w-md text-slate-text">
          The page you are looking for does not exist or may have been moved. Let&apos;s get you
          back to the work.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_36px_-10px_rgba(79,124,255,0.75)] transition-all duration-300 hover:bg-[#628dff] active:scale-[0.98]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
