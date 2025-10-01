"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Footer() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

  // const SOCIAL_LINKS = {
  //   twitter: "https://x.com/lynx_ai",
  // };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100;

          setIsAtBottom(isNearBottom);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed z-50 bottom-0 left-0 w-full flex justify-center items-center py-4 px-4 bg-gradient-to-br from-primary to-secondary"
          // style={{ backgroundColor: "#e78a53" }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center justify-between">
              <img
                height={32}
                width={120}
                alt="PreTGE Logo"
                className="h-6 w-auto object-contain transition-all group-hover:brightness-110"
                src="/logo/lynx-or-bl.svg"
              />
              <div className="hidden text-sm text-background lg:block font-medium">
                Copyright © {currentYear} Lynx AI. All rights reserved.
              </div>

              <div className="flex items-center justify-end gap-2">
                {/* <button
                  onClick={() => handleSocialClick(SOCIAL_LINKS.twitter)}
                  className="cursor-pointer rounded p-1 transition-colors duration-200 hover:bg-gray-100"
                  aria-label="Follow us on X (Twitter)"
                >
                  <div className="h-[18px] w-[18px] text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>social_x_line</title>
                      <g id="social_x_line" fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
                        <path
                          fill="currentColor"
                          d="M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582 5.39-6.16ZM16.5 19 6 5h1.5L18 19z"
                        />
                      </g>
                    </svg>
                  </div>
                </button> */}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
