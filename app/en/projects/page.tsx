type ItemPara = {
  title: string
  description: string
  href: string
}

function ProjectItem({title, description, href}: ItemPara) {
  return(
    <div className="w-full">
     <a href={href} className="block w-full bg-gray-700 border-2 border-gray-500 rounded-2xl">
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src="/avatar.jpg" 
          alt={`${title} thumbnail`} 
          className="absolute w-full h-full object-cover rounded-t-2xl"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-black/70 to-transparent"/>
      </div>
      <div className="p-5">
         <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
         <p className="text-gray-300 text-sm mb-3">{description}</p>
         <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full border-2">
            Read more →
         </span>
      </div>
     </a>
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
            Projekts
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          Scroll to discover.
        </p>
      </div>

      <div className="relative w-full max-w-3xl">

        <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gray-600"/>

        <div className="flex flex-col space-y-8">
          <ProjectItem title="server" description="coll stuff" href="/en/projects/server"/>
          <ProjectItem title="server" description="coll stuff" href="/en/projects/server"/>
          <ProjectItem title="server" description="coll stuff" href="/en/projects/server"/>
        </div>

      </div>
    </main>
  );
} 