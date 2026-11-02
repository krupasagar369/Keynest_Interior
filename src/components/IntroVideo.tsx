"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const DESKTOP_VIDEO = "/videos/intro.mp4";
const MOBILE_VIDEO = "/videos/intro-mobile.mp4";
const MOBILE_QUERY = "(max-width: 767px)";
const STORAGE_KEY = "keynest-intro-seen";

export function IntroVideo() {
  const [show, setShow] = useState(true);
  const [src, setSrc] = useState<string | null>(null);
  const [needsTap, setNeedsTap] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Skip if already seen this session, otherwise pick the right video.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) {
        setShow(false);
        return;
      }
    } catch {}
    setSrc(
      window.matchMedia(MOBILE_QUERY).matches ? MOBILE_VIDEO : DESKTOP_VIDEO,
    );
  }, []);

  // Lock page scroll while the video is on screen, always unlock after.
  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  // Some browsers block autoplay; show a Play button if that happens.
  useEffect(() => {
    if (!show || !src) return;
    videoRef.current?.play().catch(() => setNeedsTap(true));
  }, [show, src]);

  function finish() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setShow(false);
    window.dispatchEvent(new Event("keynest:intro-done"));
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] bg-black"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {src && (
            <video
              ref={videoRef}
              src={src}
              className="h-full w-full object-cover"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={finish}
              onError={finish}
            />
          )}

          {needsTap && (
            <button
              onClick={() => {
                setNeedsTap(false);
                videoRef.current?.play();
              }}
              className="absolute inset-0 m-auto h-14 w-40 rounded-full bg-white text-sm font-semibold text-black"
            >
              ▶ Play
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}