"use client"

import { ArrowDown, ArrowUp } from "lucide-react"

const Footer = () => {
  return (
    <footer className="  py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Kerolos Adly. All rights reserved.
        </p>
    
        {/* Center */}
        <p className="text-sm text-gray-800 dark:text-slate-200">
          Built with ❤️ using Next.js & Tailwind
        </p>

        {/* Right (Back to Top) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer text-sm hover:text-white transition"
        >
          Back to Top
          <ArrowUp size={20} className="animate-bounce"/>
        </button>

      </div>
    </footer>
  )
}

export default Footer