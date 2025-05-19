export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative w-64 h-64 mb-12">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan/50 to-purple/50 rounded-full"></div>
        <img
          src="/avatar.jpg"
          alt="Yannick Niederer"
          className="relative w-full h-full rounded-full"
        />
      </div>

      <div className="space-y-6 text-center">
        <h1 className="text-5xl font-bold mx-auto bg-gradient-to-r from-cyan to-purple text-transparent bg-clip-text">
          Welcome to My Website
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed. 
          Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center space-x-6">
        <a href="https://github.com/Ynlsen" className="px-6 py-3 border-2 border-cyan text-cyan hover:bg-cyan hover:text-black relative">
          GitHub
        </a>
        <a href="/contact" className="px-6 py-3 border-2 border-purple text-purple hover:bg-purple hover:text-black relative">
          Contact
        </a>
        <a href="/projects" className="px-6 py-3 border-2 border-cyan text-cyan hover:bg-cyan hover:text-black relative">
          Projects
        </a>
      </div>
    </main>
  );
}
