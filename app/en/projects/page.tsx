type ItemPara = {
  title: string
  description: string
  href: string
  isLeft: boolean
}

function ProjectItem({title, description, href, isLeft}: ItemPara) {

  const order = isLeft ? "order-first pr-8" : "order-last pl-8"

  const buttonColor = isLeft ? "border-cyan text-cyan hover:bg-cyan hover:text-black" : "border-purple text-purple hover:bg-purple hover:text-black"

  const borderColor = isLeft ? "border-cyan/30 hover:border-cyan/70" : "border-purple/30 hover:border-purple/70"

  return(
    <div className="flex w-full">
      <div className={`w-1/2 ${order}`}>
        <a href={href} className={`block w-full bg-gray-600/60 border-2 ${borderColor} duration-300   rounded-2xl`}>
          <div className="relative w-full h-48 overflow-hidden">
            <img 
              src="/server.jpg" 
              alt={`${title} thumbnail`} 
              className="absolute w-full h-full object-cover rounded-t-2xl"
            />
            <div className="absolute w-full h-full bg-gradient-to-t from-black/70 to-transparent"/>
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
            <p className="text-gray-300 text-sm mb-3">{description}</p>
            <span className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full border-2 ${buttonColor} duration-300`}>
                Read more →
            </span>
          </div>
        </a>
      </div>
      <div className="invisible sm:block sm:w-1/2"/>
    </div>   
  )
}






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
            Projects
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          Scroll to discover.
        </p>
      </div>

      <div className="relative w-full max-w-6xl">

        <div className="absolute left-1/2 top-0 bottom-0 w-2 -ml-1 bg-gray-600"/>

        <div className="flex flex-col space-y-8">
          <ProjectItem title="server" description="coll stuff" href="/en/projects/server" isLeft={true} />
          <ProjectItem title="server" description="coll stuff" href="/en/projects/server" isLeft={false} />
          <ProjectItem title="server" description="coll stuff" href="/en/projects/server" isLeft={true} />
        </div>

      </div>
    </main>
  );
} 