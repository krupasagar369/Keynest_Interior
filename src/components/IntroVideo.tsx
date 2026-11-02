"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const VIDEO_SRC = "/videos/intro.mp4";
const STORAGE_KEY = "keynest-intro-seen";

export function IntroVideo() {
  const [show, setShow] = useState(true);
  const [needsTap, setNeedsTap] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Skip the intro if the visitor already saw it in this session.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) setShow(false);
    } catch {}
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
    if (!show) return;
    videoRef.current?.play().catch(() => setNeedsTap(true));
  }, [show]);

  function finish() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setShow(false);
    // Tell the rest of the site the intro is over (popup waits for this).
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
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={finish}
            onError={finish}
          />

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