'use client'
import { usePathname } from 'next/navigation'

export default function Navbar() {

  const pathname = usePathname()

  const localPath = pathname.replace("/de", "").replace("/en", "");

  return (
    <nav className="fixed w-full top-0 left-0 border-b border-cyan/20 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="w-11/12 sm:w-5/6">
        <div className="flex items-center justify-between h-16">
          <div className="space-x-4 sm:space-x-8 text-sm sm:text-base">
            <a href="https://yniederer.ch/en" className="text-cyan hover:text-cyanL">Home</a>
            <a href="https://yniederer.ch/en/projects" className="text-purple hover:text-purpleL">Projects</a>
            <a href="https://yniederer.ch/en/contact" className="text-cyan hover:text-cyanL">Contact</a>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 text-sm sm:text-base">
            <a href={"https://yniederer.ch/en" + localPath} className="text-cyan hover:text-cyanL">EN</a>
            <div className="h-4 w-px bg-cyan/30"></div>
            <a href={"https://yniederer.ch/de" + localPath} className="text-purple hover:text-purpleL">DE</a>
          </div>
        </div>
      </div>
    </nav>
  );
}