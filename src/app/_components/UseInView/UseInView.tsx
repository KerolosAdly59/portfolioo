"use client";
import { useEffect, useState, useRef } from "react";

export default function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // يفصل المراقبة بعد ما يظهر
        }
      },
      { threshold: 0.2 } // نسبة ظهور العنصر عشان يبدأ التحميل
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}