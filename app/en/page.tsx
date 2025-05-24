export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-0">

      <div className="fixed -z-10 -top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan/10 rounded-full blur-[100px] animate-[pulse_10s_ease_infinite]"></div>
      <div className="fixed -z-10 -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple/10 rounded-full blur-[100px] animate-[pulse_10s_ease_infinite]"></div>
      
      <div className="fixed -z-10 w-1/2 h-1/3 bg-gradient-to-r from-cyan via-purple to-cyan opacity-10 rounded-full blur-[100px]"></div>

      <div className="fixed -z-10 inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-purple/5"></div>

      <div className="group relative w-56 h-56 sm:w-64 sm:h-64 mb-8 sm:mb-12 mt-4">
        <div className="absolute -inset-3 group-hover:scale-110 transition-all duration-200 ease-in-out bg-gradient-to-r from-cyan via-purple to-cyan opacity-30 rounded-full blur animate-pulse group-hover:animate-[pulse_1.5s_infinite]"></div>
        <div className="absolute -inset-0.5 group-hover:-inset-0.3 bg-gradient-to-r from-cyan via-purple to-cyan opacity-50 group-hover:scale-105 transition-all duration-200 ease-in-out rounded-full"></div>
        <img
          src="/avatar.jpg"
          alt="Yannick Niederer"
          className="relative w-full h-full group-hover:scale-105 transition-all duration-200 ease-in-out rounded-full"
        />
      </div>

      <div className="space-y-4 sm:space-y-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan via-purple to-cyan">
            Welcome to My Portfolio Website
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          Hi, I'm <span className="inline-block text-cyan hover:animate-wiggle">Yannick</span>, a Computer Science bachelor student at ETH Zurich. 
          Here you'll find some of my projects.
          Feel free to reach out through the contact page.
        </p>
      </div>

      <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-center mb-8 sm:mb-0">
        <a href="https://github.com/Ynlsen" className="px-6 py-3 border-2 border-cyan text-cyan hover:bg-cyan hover:text-black duration-300 relative">
          GitHub
        </a>
        <a href="/en/contact" className="px-6 py-3 border-2 border-purple text-purple hover:bg-purple hover:text-black duration-300 relative">
          Contact
        </a>
        <a href="/en/projects" className="px-6 py-3 border-2 border-cyan text-cyan hover:bg-cyan hover:text-black duration-300 relative">
          Projects
        </a>
      </div>
    </main>
  );
}
