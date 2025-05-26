export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-20">

      <div className="fixed -z-10 -top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan/10 rounded-full blur-[100px] animate-[pulse_10s_ease_infinite]"></div>
      <div className="fixed -z-10 -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple/10 rounded-full blur-[100px] animate-[pulse_10s_ease_infinite]"></div>
      
      <div className="fixed -z-10 w-1/2 h-1/3 bg-gradient-to-r from-cyan via-purple to-cyan opacity-10 rounded-full blur-[100px]"></div>

      <div className="fixed -z-10 inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-purple/5"></div>
      
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan via-purple to-cyan">
            Get in Touch
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          Yannick Niederer <br/>
          yannick.niederer@shinternet.ch
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-center mb-12">
        <a href="https://github.com/Ynlsen" className="px-6 py-3 border-2 border-cyan text-cyan hover:bg-cyan hover:text-black duration-300 relative">
          GitHub
        </a>
        <a href="mailto:yannick.niederer@shinternet.ch" className="px-6 py-3 border-2 border-purple text-purple hover:bg-purple hover:text-black duration-300 relative">
          Email
        </a>
        <a href="https://www.linkedin.com/in/yannick-niederer/?locale=en_US" className="px-6 py-3 border-2 border-cyan text-cyan hover:bg-cyan hover:text-black duration-300 relative">
          LinkedIn
        </a>        
      </div>

      <form className="space-y-6 w-full max-w-2xl px-4">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 bg-black border-2 border-cyan/50 hover:border-cyan/70 focus:border-cyan rounded-lg text-white focus:outline-none"/>
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-2">Email</label>
          <input type="text" className="w-full px-4 py-2 bg-black border-2 border-cyan/50 hover:border-cyan/70 focus:border-cyan rounded-lg text-white focus:outline-none"/>          
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-2">Message</label>
          <textarea rows={4} className="w-full px-4 py-2 bg-black border-2 border-cyan/50 hover:border-cyan/70 focus:border-cyan rounded-lg text-white focus:outline-none"/>          
        </div>
        <button className="w-full px-6 py-3 border-2 border-purple text-purple">Send Message</button>
      </form>
    </main>
  );
} 