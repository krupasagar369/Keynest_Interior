"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { EnquiryModal } from "./EnquiryModal";

type OpenOptions = { projectType?: string; message?: string };

type EnquiryContextValue = {
  openEnquiry: (options?: OpenOptions) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

const SESSION_KEY = "keynest-enquiry-popup-seen";

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  return ctx;
}

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  const openEnquiry = useCallback((options?: OpenOptions) => {
    setProjectType(options?.projectType ?? "");
    setMessage(options?.message ?? "");
    setOpen(true);
  }, []);

  // Auto-open once per session, only on the homepage, 1 second after the
  // intro video has finished (or right away if the intro was already seen).
  useEffect(() => {
    if (pathname !== "/") return;

    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      /* storage unavailable: still show once per page load */
    }

    let timer: ReturnType<typeof setTimeout> | undefined;

    const schedule = () => {
      timer = setTimeout(() => {
        setProjectType("");
        setMessage("");
        setOpen(true);
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* ignore */
        }
      }, 1000);
    };

    let introSeen = false;
    try {
      introSeen = !!sessionStorage.getItem("keynest-intro-seen");
    } catch {
      /* ignore */
    }

    if (introSeen) {
      schedule();
    } else {
      window.addEventListener("keynest:intro-done", schedule, { once: true });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keynest:intro-done", schedule);
    };
  }, [pathname]);

  const value = useMemo(() => ({ openEnquiry }), [openEnquiry]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryModal
        open={open}
        onClose={close}
        initialProjectType={projectType}
        initialRequirements={message}
      />
    </EnquiryContext.Provider>
  );
}