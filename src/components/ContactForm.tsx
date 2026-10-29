"use client";

import { useRef, useState, type FormEvent } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { budgets, timelines } from "@/data/enquiryOptions";
import { serviceDetails } from "@/data/serviceDetails";
import { siteConfig } from "@/data/siteConfig";
import { buildEnquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ErrorKey = "name" | "mobile" | "email" | "requirements" | "consent";
type Errors = Partial<Record<ErrorKey, string>>;

const control =
  "w-full rounded-lg border border-brand-charcoal/15 bg-white px-3.5 py-3 text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20 aria-[invalid=true]:border-red-500";

const serviceOptions = [...serviceDetails.map((s) => s.title), "Other"];

function Field({
  label,
  htmlFor,
  required,
  optional,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-brand-charcoal"
      >
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
        {optional && (
          <span className="ml-1.5 text-xs font-normal text-brand-charcoal/50">
            (optional)
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (key: string) => String(fd.get(key) ?? "").trim();

    const data = {
      name: get("name"),
      mobile: get("mobile"),
      email: get("email"),
      service: get("service"),
      location: get("location"),
      budget: get("budget"),
      timeline: get("timeline"),
      requirements: get("requirements"),
    };
    const consent = fd.get("consent") === "on";

    const next: Errors = {};
    if (data.name.length < 2) next.name = "Please enter your full name.";
    if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(data.mobile.replace(/[\s-]/g, ""))) {
      next.mobile = "Please enter a valid 10-digit mobile number.";
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "Please enter a valid email address, or leave it blank.";
    }
    if (data.requirements.length < 5) {
      next.requirements = "Please briefly describe your requirements.";
    }
    if (!consent) {
      next.consent = "Please tick this box so we know we can contact you.";
    }

    setErrors(next);

    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
      return;
    }

    const url = buildWhatsAppUrl(
      buildEnquiryMessage({
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        projectType: data.service,
        projectTypeLabel: "Service Required",
        location: data.location,
        budget: data.budget,
        timeline: data.timeline,
        requirements: data.requirements,
      }),
    );

    setWhatsappUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="ct-name" required error={errors.name}>
          <input
            id="ct-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={control}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "ct-name-error" : undefined}
          />
        </Field>

        <Field label="Phone Number" htmlFor="ct-mobile" required error={errors.mobile}>
          <input
            id="ct-mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            className={control}
            aria-invalid={!!errors.mobile}
            aria-describedby={errors.mobile ? "ct-mobile-error" : undefined}
          />
        </Field>

        <Field label="Email Address" htmlFor="ct-email" optional error={errors.email}>
          <input
            id="ct-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={control}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "ct-email-error" : undefined}
          />
        </Field>

        <Field label="Service Required" htmlFor="ct-service">
          <select id="ct-service" name="service" defaultValue="" className={control}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Project Location" htmlFor="ct-location" optional>
          <input
            id="ct-location"
            name="location"
            type="text"
            placeholder="City or area"
            className={control}
          />
        </Field>

        <Field label="Estimated Budget" htmlFor="ct-budget" optional>
          <select id="ct-budget" name="budget" defaultValue="" className={control}>
            <option value="">Select budget</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Preferred Start Date / Timeline"
          htmlFor="ct-timeline"
          optional
          className="sm:col-span-2"
        >
          <select id="ct-timeline" name="timeline" defaultValue="" className={control}>
            <option value="">Select timeline</option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Project Requirements"
          htmlFor="ct-requirements"
          required
          error={errors.requirements}
          className="sm:col-span-2"
        >
          <textarea
            id="ct-requirements"
            name="requirements"
            rows={5}
            placeholder="Tell us about your space, what you're looking for, and any specific requirements..."
            className={cn(control, "resize-y")}
            aria-invalid={!!errors.requirements}
            aria-describedby={errors.requirements ? "ct-requirements-error" : undefined}
          />
        </Field>
      </div>

      <div className="mt-5">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-brand-charcoal/80">
          <input
            name="consent"
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 cursor-pointer accent-brand-teal"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "ct-consent-error" : undefined}
          />
          <span>
            I agree to be contacted by KeyNest Interiors regarding my enquiry.
            <span className="ml-0.5 text-red-600">*</span>
          </span>
        </label>
        {errors.consent && (
          <p id="ct-consent-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-md bg-[#128C7E] px-7 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f7a6c] hover:shadow-lg"
      >
        <WhatsAppIcon className="size-5" />
        Send via WhatsApp
      </button>

      {whatsappUrl ? (
        <div
          role="status"
          className="mt-5 rounded-lg border border-brand-gold/40 bg-brand-ivory p-4 text-sm leading-relaxed text-brand-charcoal/80"
        >
          <p>
            We opened WhatsApp with your details filled in. Please press{" "}
            <strong>Send</strong> there to share your enquiry. It is only
            delivered once you send it.
          </p>
          <p className="mt-2">If WhatsApp did not open, you can:</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#128C7E] px-4 py-2 font-semibold text-white transition hover:bg-[#0f7a6c]"
            >
              <WhatsAppIcon className="size-4" />
              Try WhatsApp again
            </a>
            {siteConfig.phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-charcoal/20 bg-white px-4 py-2 font-semibold text-brand-charcoal transition hover:border-brand-teal hover:text-brand-teal"
              >
                <Phone className="size-4" />
                Call {p.display}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-4 text-xs leading-relaxed text-brand-charcoal/55">
          Clicking the button will open WhatsApp with your details prefilled.
          You&apos;ll need to send the message to complete your enquiry.
        </p>
      )}
    </form>
  );
}