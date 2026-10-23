import { useState } from "react";
import { CircleCheck, LoaderCircle, MailWarning, Send } from "lucide-react";
import { BUDGET_RANGES, CONTACT_ENDPOINT, PROJECT_TYPES, SITE } from "../utils/constants.js";

const INITIAL_VALUES = {
  name: "",
  email: "",
  projectType: PROJECT_TYPES[0],
  budget: BUDGET_RANGES[0],
  details: "",
  company: "", // honeypot — real visitors never fill this
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.details.trim()) {
    errors.details = "Please tell me a little about your project.";
  } else if (values.details.trim().length < 20) {
    errors.details = "A sentence or two more will help me understand your project.";
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | mailto
  const [statusMessage, setStatusMessage] = useState("");

  const update = (field) => (event) => {
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    if (errors[field]) {
      setErrors(validate(next));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot: silently "accept" bot submissions without sending anything.
    if (values.company) return;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    /* Mode 2 — mailto fallback (no endpoint configured).
       Honest behaviour: open the visitor's email client with the message
       pre-filled. We never claim the message was sent by the website. */
    if (!CONTACT_ENDPOINT) {
      const subject = encodeURIComponent(`New project enquiry — ${values.projectType}`);
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nProject type: ${values.projectType}\nBudget: ${values.budget}\n\nProject details:\n${values.details}`,
      );
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      setStatus("mailto");
      setStatusMessage(
        "Your email client should now open with your message pre-filled — just press send there. If nothing opened, you can reach me directly at " +
          SITE.email +
          ".",
      );
      return;
    }

    /* Mode 1 — POST to the configured endpoint. */
    setStatus("sending");
    setStatusMessage("");
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          projectType: values.projectType,
          budget: values.budget,
          details: values.details.trim(),
        }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("sent");
      setStatusMessage("Thank you — your message has been sent. I will get back to you soon.");
      setValues(INITIAL_VALUES);
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong while sending. Please try again, or email me directly at " + SITE.email + ".",
      );
    }
  };

  const fieldError = (field) =>
    errors[field] ? (
      <p id={`${field}-error`} role="alert" className="mt-2 text-sm text-red-400">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="glow-card rounded-3xl p-7 sm:p-9">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-mist">
            Full name <span className="text-cyanic" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="field"
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {fieldError("name")}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-mist">
            Email address <span className="text-cyanic" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="field"
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {fieldError("email")}
        </div>

        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-mist">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="field"
            value={values.projectType}
            onChange={update("projectType")}
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-mist">
            Budget <span className="font-normal text-slate-text">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            className="field"
            value={values.budget}
            onChange={update("budget")}
          >
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="details" className="mb-2 block text-sm font-medium text-mist">
            Project details <span className="text-cyanic" aria-hidden="true">*</span>
          </label>
          <textarea
            id="details"
            name="details"
            rows={5}
            placeholder="Tell me about your website idea, Figma design, or existing WordPress project…"
            className="field resize-y"
            value={values.details}
            onChange={update("details")}
            aria-invalid={Boolean(errors.details)}
            aria-describedby={errors.details ? "details-error" : undefined}
          />
          {fieldError("details")}
        </div>
      </div>

      {/* Honeypot — hidden from people, tempting to bots */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={update("company")}
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-electric px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_36px_-10px_rgba(79,124,255,0.75)] transition-all duration-300 hover:bg-[#628dff] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <LoaderCircle size={17} className="animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send Project Enquiry
              <Send size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>

        <div aria-live="polite">
          {status === "sent" && (
            <p className="flex items-start gap-2.5 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
              <CircleCheck size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
              {statusMessage}
            </p>
          )}
          {(status === "error" || status === "mailto") && (
            <p
              className={`flex items-start gap-2.5 rounded-2xl border px-4 py-3 text-sm ${
                status === "error"
                  ? "border-red-400/30 bg-red-400/10 text-red-300"
                  : "border-cyanic/30 bg-cyanic/10 text-cyanic"
              }`}
            >
              <MailWarning size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
              {statusMessage}
            </p>
          )}
        </div>

        {!CONTACT_ENDPOINT && (
          <p className="text-xs leading-relaxed text-slate-text/75">
            This form opens your email app with the message pre-addressed — no data is stored by
            this website.
          </p>
        )}
      </div>
    </form>
  );
}
