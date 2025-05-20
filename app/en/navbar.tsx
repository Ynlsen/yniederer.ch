'use client'
import { usePathname } from 'next/navigation'

export default function Navbar() {

  const pathname = usePathname()

  const localPath = pathname.replace("/de", "").replace("/en", "");

  return (
    <nav className="fixed w-full top-0 left-0 border-b border-cyan/20 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="w-5/6">
        <div className="flex items-center justify-between h-16">
          <div className="space-x-8">
            <a href="/en" className="text-cyan hover:text-cyanL">Home</a>
            <a href="/en/projects" className="text-purple hover:text-purpleL">Projects</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href={"/en" + localPath} className="text-cyan hover:text-cyanL">EN</a>
            <div className="h-4 w-px bg-cyan/30"></div>
            <a href={"/de" + localPath} className="text-purple hover:text-purpleL">DE</a>
          </div>
        </div>
      </div>
    </nav>
  );
}