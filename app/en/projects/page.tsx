export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-20">

      <div className="fixed -z-10 -top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan/10 rounded-full blur-[100px] animate-[pulse_10s_ease_infinite]"></div>
      <div className="fixed -z-10 -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple/10 rounded-full blur-[100px] animate-[pulse_10s_ease_infinite]"></div>
      
      <div className="fixed -z-10 w-1/2 h-1/3 bg-gradient-to-r from-cyan via-purple to-cyan opacity-10 rounded-full blur-[100px]"></div>

      <div className="fixed -z-10 inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-purple/5"></div>
      
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan via-purple to-cyan">
            Projekts
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          Scroll to discover.
        </p>
      </div>

      <div className="relative w-full max-w-3xl">
      

        <div className="flex flex-col space-y-8">
          <div className="w-full">
            <a href="en/projects/server" className="block w-full bg-gray-700 border-2 border-gray-500 rounded-2xl">
              <div className="p-4 text-white">
                <h2 className="text-2xl font-semibold mb-2">Server</h2>
                <p>My home server hosting a lot of cool stuff</p>
                read more --
              </div>
            </a>
          </div>
          <div className="w-full">
            <a href="en/projects/server" className="block w-full bg-gray-700 border-2 border-gray-500 rounded-2xl">
              <div className="p-4 text-white">
                <h2 className="text-2xl font-semibold mb-2">Server 2</h2>
                <p>My better home server now hosting a lot more cool stuff</p>
                read more --
              </div>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
} 