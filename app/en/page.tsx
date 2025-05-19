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

      <div>
        <h1 className="text-5xl text-cyan">
          Welcome to My Website
        </h1>
      </div>




      <div>
        <a href="https://github.com/Ynlsen" className="text-white hover:underline">
          <h1 className="text-4xl font-bold">Work in Progress</h1>
        </a>
      </div>
    </main>
  );
}
