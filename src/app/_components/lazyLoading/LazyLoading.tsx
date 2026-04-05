"use client";

import dynamic from "next/dynamic";
import useInView from "../UseInView/UseInView";

// هنا بنعمل dynamic import للكومبوننت الأصلي
const Page = dynamic(() => import("../../page"), { ssr: false });

export default function LazySkills() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="">
      {inView ? (
        <Page />
      ) : (
        <p className="text-center text-xl">Loading skills...</p>
      )}
    </div>
  );
}