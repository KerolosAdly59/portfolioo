"use client";

import dynamic from "next/dynamic";
import useInView from "../UseInView/UseInView";

const SkillsContent = dynamic(() => import("./Skills"), { ssr: false });

export default function LazySkills() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="">
      {inView ? (
        <SkillsContent />
      ) : (
        <p className="text-center text-xl"></p>
      )}
    </div>
  );
}