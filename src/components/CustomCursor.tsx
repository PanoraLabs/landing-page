"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const ringX = useSpring(0, { stiffness: 150, damping: 15 });
  const ringY = useSpring(0, { stiffness: 150, damping: 15 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 5);
      ringX.set(e.clientX - 18);
      ringY.set(e.clientY - 18);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  // Hover detection in a separate useEffect
  useEffect(() => {
    if (!isVisible) return;

    const enterHandler = () => setIsHovering(true);
    const leaveHandler = () => setIsHovering(false);

    const addListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", enterHandler);
        el.addEventListener("mouseleave", leaveHandler);
      });

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", enterHandler);
          el.removeEventListener("mouseleave", leaveHandler);
        });
      };
    };

    // Initial setup
    const cleanup = addListeners();

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      cleanup();
      addListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cleanup();
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-[10px] h-[10px] bg-[#f0be2a] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 border border-[rgba(240,190,42,0.5)] rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          width: isHovering ? 60 : 36,
          height: isHovering ? 60 : 36,
        }}
        animate={{
          width: isHovering ? 60 : 36,
          height: isHovering ? 60 : 36,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
