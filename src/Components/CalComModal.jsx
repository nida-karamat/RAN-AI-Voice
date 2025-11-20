import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load the Cal component (FASTEST)
const Cal = React.lazy(() => import("@calcom/embed-react"));

const CalModal = ({
  isOpen,
  onClose,
  eventLink = "ran-ai/30min?overlayCalendar=true",
}) => {
  const [preloaded, setPreloaded] = useState(false);

  // Preload Cal.com script BEFORE modal opens
  useEffect(() => {
    const preloadScript = document.createElement("link");
    preloadScript.rel = "preload";
    preloadScript.as = "script";
    preloadScript.href = "https://app.cal.com/embed/embed.js";
    document.head.appendChild(preloadScript);

    // Preload iframe background load
    setTimeout(() => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://app.cal.com/${eventLink}&theme=light`;
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      setPreloaded(true);
    }, 50); // background preload

    return () => {
      preloadScript.remove();
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative min-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-8 text-white/80 hover:text-white z-20 text-3xl"
            >
              ✕
            </button>

            <div className="w-full min-h-screen flex justify-center items-center">
              <React.Suspense
                fallback={
                  <div className="text-white text-xl animate-pulse">
                    Loading…
                  </div>
                }
              >
                <Cal
                  calLink={`${eventLink}&theme=light`}
                  style={{ width: "100%", height: "100vh" }}
                  iframeClassName="w-full h-full"
                />
              </React.Suspense>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CalModal;
