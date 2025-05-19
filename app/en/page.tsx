export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-64 h-64 mb-12">
        <img
          src="/avatar.jpg"
          alt="Yannick Niederer"
          className="w-full h-full rounded-full"
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




      <div>
        <a href="https://github.com/Ynlsen" className="text-white hover:underline">
          <h1 className="text-4xl font-bold">Work in Progress</h1>
        </a>
      </div>
    </main>
  );
}
