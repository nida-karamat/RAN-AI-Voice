import { useEffect } from "react";

export default function ScrollToHashElement() {
  useEffect(() => {
    // Check if page was opened with a hash like #ai-voice
    const hash = window.location.hash;
    if (hash) {
      // Wait for React to finish rendering
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 600); // delay to ensure sections exist
    }
  }, []);

  return null;
}
