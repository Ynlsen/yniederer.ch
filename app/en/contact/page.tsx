"use client"
import { FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;

    const token = await recaptchaRef.current!.executeAsync();
    recaptchaRef.current!.reset();

    const data = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          token: token
        }),
      });

      const result = await res.json();

      if(!res.ok){
        throw new Error(result.error || 'Unknown');
      }

      setStatus('success');
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
    }
  };

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
        <a href="https://github.com/Ynlsen" 
           className="px-6 py-3 border-2 border-cyan text-cyan hover:bg-cyan hover:text-black duration-300 relative flex items-center gap-2">
          <svg className="w-5 h-5" width="98" height="96" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>
          </svg>
          GitHub
        </a>
        <a href="mailto:yannick.niederer@shinternet.ch" 
           className="px-6 py-3 border-2 border-purple text-purple hover:bg-purple hover:text-black duration-300 relative flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email
        </a>
        <a href="https://www.linkedin.com/in/yannick-niederer/?locale=en_US" 
           className="group px-6 py-3 border-2 border-cyan text-cyan hover:bg-cyan hover:text-black duration-300 relative flex items-center gap-2">
          <svg className="w-5 h-5" height="72" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" className="fill-cyan group-hover:fill-black duration-300"/>
              <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" className="fill-black group-hover:fill-cyan duration-300"/>
            </g>
          </svg>
          LinkedIn
        </a>        
      </div>

      <form onSubmit={submit} className="space-y-6 w-full max-w-2xl px-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 text-sm mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 bg-black border-2 border-cyan/50 hover:border-cyan/70 focus:border-cyan rounded-lg text-white focus:outline-none"
                 placeholder="First & last name"
                 id="name"
                 name="name"
                 required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 text-sm mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 bg-black border-2 border-cyan/50 hover:border-cyan/70 focus:border-cyan rounded-lg text-white focus:outline-none"
                 placeholder="email@example.com"
                 id="email"
                 name="email"
                 required                           
          />          
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm mb-2">Message</label>
          <textarea rows={4} className="w-full px-4 py-2 bg-black border-2 border-cyan/50 hover:border-cyan/70 focus:border-cyan rounded-lg text-white focus:outline-none"
                    placeholder="Your message here..."
                    id="message"
                    name="message"
                    required                            
          />          
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          // PUBLIC SITE KEY
          sitekey={'6LeIX04rAAAAAKUDBk8kC0kUwKK7wh7uYTa6EaIU'} 
        />

        <button type="submit" disabled={status === 'submitting'} className="w-full px-6 py-3 border-2 border-purple text-purple hover:bg-purple hover:text-black duration-300">Send Message</button>
      </form>
    </main>
  );
}