"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { buttonVariants } from "./ui/Button";
import { budgets, projectTypes, timelines } from "@/data/enquiryOptions";
import { siteConfig } from "@/data/siteConfig";
import { buildEnquiryMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  initialProjectType?: string;
  initialRequirements?: string;
};

type Errors = Partial<
  Record<"name" | "mobile" | "projectType" | "requirements", string>
>;

const control =
  "w-full rounded-lg border border-brand-charcoal/15 bg-white px-3.5 py-2.5 text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20 aria-[invalid=true]:border-red-500";

export function EnquiryModal(props: ModalProps) {
  return (
    <AnimatePresence>
      {props.open && (
        <EnquiryDialog
          key="enquiry-dialog"
          onClose={props.onClose}
          initialProjectType={props.initialProjectType}
          initialRequirements={props.initialRequirements}
        />
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-brand-charcoal"
      >
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
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

function EnquiryDialog({
  onClose,
  initialProjectType,
  initialRequirements,
}: {
  onClose: () => void;
  initialProjectType?: string;
  initialRequirements?: string;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  // Focus handling, scroll lock, Escape key, and focus trap.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    dialogRef.current?.querySelector<HTMLElement>("input")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [onClose]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (key: string) => String(fd.get(key) ?? "").trim();

    const data = {
      name: get("name"),
      mobile: get("mobile"),
      projectType: get("projectType"),
      location: get("location"),
      budget: get("budget"),
      timeline: get("timeline"),
      requirements: get("requirements"),
    };

    const next: Errors = {};
    if (data.name.length < 2) next.name = "Please enter your full name.";
    if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(data.mobile.replace(/[\s-]/g, ""))) {
      next.mobile = "Please enter a valid 10-digit mobile number.";
    }
    if (!data.projectType) next.projectType = "Please select a project type.";
    if (data.requirements.length < 5) {
      next.requirements = "Please briefly describe your requirements.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstInvalid = Object.keys(next)[0];
      dialogRef.current
        ?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
      return;
    }

    const url = buildWhatsAppUrl(buildEnquiryMessage(data));
    setWhatsappUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-brand-charcoal/60 backdrop-blur-sm sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[92dvh] w-full overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:max-w-lg sm:rounded-2xl"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative bg-brand-teal px-6 pb-6 pt-7 text-white sm:px-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="absolute right-4 top-4 inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
          <span className="mb-3 block h-0.5 w-10 bg-brand-gold" />
          <h2 id={titleId} className="text-2xl font-semibold">
            Let&apos;s Design Your Dream Space.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            Tell us a little about your project, and let&apos;s start planning
            something beautiful.
          </p>
        </div>

        {whatsappUrl ? (
          <div className="space-y-4 px-6 py-8 text-center sm:px-8">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7E]">
              <WhatsAppIcon className="size-7" />
            </div>
            <h3 className="text-xl font-semibold">Your message is ready</h3>
            <p className="text-sm leading-relaxed text-brand-charcoal/70">
              We opened WhatsApp with your details filled in. Please press{" "}
              <strong>Send</strong> in WhatsApp to share your enquiry with us.
              It is only delivered once you send it.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "teal", size: "md" }))}
              >
                <WhatsAppIcon className="size-4" />
                Open WhatsApp again
              </a>
              <a
                href={siteConfig.phones[0].href}
                className={cn(buttonVariants({ variant: "outline", size: "md" }))}
              >
                Call {siteConfig.phones[0].display}
              </a>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer text-sm text-brand-charcoal/60 underline-offset-4 hover:underline"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4 px-6 py-6 sm:px-8">
            <Field label="Full name" htmlFor="eq-name" required error={errors.name}>
              <input
                id="eq-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                className={control}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "eq-name-error" : undefined}
              />
            </Field>

            <Field label="Mobile number" htmlFor="eq-mobile" required error={errors.mobile}>
              <input
                id="eq-mobile"
                name="mobile"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="10-digit mobile number"
                className={control}
                aria-invalid={!!errors.mobile}
                aria-describedby={errors.mobile ? "eq-mobile-error" : undefined}
              />
            </Field>

            <Field label="Project type" htmlFor="eq-type" required error={errors.projectType}>
              <select
                id="eq-type"
                name="projectType"
                defaultValue={initialProjectType ?? ""}
                className={control}
                aria-invalid={!!errors.projectType}
                aria-describedby={errors.projectType ? "eq-type-error" : undefined}
              >
                <option value="" disabled>
                  Select project type
                </option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Project location" htmlFor="eq-location">
              <input
                id="eq-location"
                name="location"
                type="text"
                placeholder="City or area (optional)"
                className={control}
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Approximate budget" htmlFor="eq-budget">
                <select id="eq-budget" name="budget" defaultValue="" className={control}>
                  <option value="">Select (optional)</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="When do you plan to start?" htmlFor="eq-timeline">
                <select id="eq-timeline" name="timeline" defaultValue="" className={control}>
                  <option value="">Select (optional)</option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field
              label="Describe your requirements"
              htmlFor="eq-requirements"
              required
              error={errors.requirements}
            >
              <textarea
                id="eq-requirements"
                name="requirements"
                rows={3}
                defaultValue={initialRequirements ?? ""}
                placeholder="Tell us about your space, style, and needs"
                className={cn(control, "resize-none")}
                aria-invalid={!!errors.requirements}
                aria-describedby={errors.requirements ? "eq-requirements-error" : undefined}
              />
            </Field>

            <div className="flex flex-col gap-3 pt-2">
              <button
                type="submit"
                className={cn(buttonVariants({ variant: "teal", size: "lg" }), "w-full")}
              >
                <WhatsAppIcon className="size-5" />
                Send Enquiry on WhatsApp
              </button>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer py-1 text-sm font-medium text-brand-charcoal/60 transition hover:text-brand-charcoal"
              >
                Maybe Later
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}