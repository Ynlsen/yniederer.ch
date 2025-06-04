type ItemPara = {
  title: string
  description: string
  thumbnail: string
  href: string
  isLeft: boolean
}

function ProjectItem({title, description, href, thumbnail, isLeft}: ItemPara) {

  const order = isLeft ? "sm:order-first sm:pr-8" : "sm:order-last sm:pl-8"

  const buttonColor = isLeft ? "border-cyan text-cyan hover:bg-cyan hover:text-black" : "border-purple text-purple hover:bg-purple hover:text-black"

  const borderColor = isLeft ? "border-cyan/30 hover:border-cyan/70" : "border-purple/30 hover:border-purple/70"

  const dotColor = isLeft ? "ring-cyan group-hover:bg-cyan" : "ring-purple group-hover:bg-purple"

  return(
    <div className="relative flex w-full">
      <div className={`group w-full sm:w-1/2 ${order}`}>
        <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-black ring-8 hidden sm:block ${dotColor} group-hover:ring-0 group-hover:w-10 group-hover:h-10 duration-300 rounded-full`} />
        <a href={href} className={`block w-full bg-gray-800/80 border-2 ${borderColor} duration-300 rounded-2xl`}>
          <div className="relative w-full h-48 overflow-hidden">
            <img 
              src={thumbnail} 
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
  // temporary AI generated place holder project for testing
  const Projects: any[] = [
    {
      title: "Homelab Deep Dive: Setup & Architecture",
      description:
        "How I turned my old desktop into a Proxmox server to host multiple VMs & Docker services – including network configuration and automatic updates.",
      thumbnail: "/homelab-thumbnail.jpg",
      href: "/en/projects/homelab-deep-dive",
    },
    {
      title: "Production Ubuntu Server: Setup & CI/CD",
      description:
        "Why I chose Ubuntu 22.04 LTS as a base, how I installed Nginx & Docker, and configured GitLab CI/CD for deployments.",
      thumbnail: "/ubuntu-server.jpg",
      href: "/en/projects/ubuntu-server-setup",
    },
    {
      title: "Ansible Automation: My First Playbook",
      description:
        "How I used Ansible to centrally configure all my home servers and automate software updates.",
      thumbnail: "/ansible-playbook.jpg",
      href: "/en/projects/ansible-automation",
    },
    {
      title: "Nextcloud Self-Hosting: Data Security & Backups",
      description:
        "A guide on how I set up Nextcloud, enabled encryption, and sent regular backups to the cloud via Rclone.",
      thumbnail: "/nextcloud.jpg",
      href: "/en/projects/nextcloud-self-hosting",
    },
    {
      title: "Pi-Hole & DNS Filtering: Optimizing Privacy",
      description:
        "How I integrated Pi-Hole into my network to block ads and trackers – including configuring network policies on the router.",
      thumbnail: "/pihole.jpg",
      href: "/en/projects/pihole-dns-filtering",
    },
  ]

  const projectCountEven = Projects.length % 2 === 0

  const gitHubColor = projectCountEven ? "border-cyan text-cyan hover:bg-cyan" : "border-purple text-purple hover:bg-purple"

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-24 px-4">

      <div className="fixed -z-10 -top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan/10 rounded-full blur-[100px] animate-[pulse_10s_ease_infinite]"></div>
      <div className="fixed -z-10 -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple/10 rounded-full blur-[100px] animate-[pulse_10s_ease_infinite]"></div>
      <div className="fixed -z-10 inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-purple/5"></div>
      
      <div className="space-y-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan via-purple to-cyan">
            Projects
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          Scroll down to explore the project cards for a quick overview. Click any of them to read the full article.
        </p>
      </div>

      <div className="relative w-full max-w-6xl">

        <div className="absolute left-1/2 top-0 bottom-9/10 w-2 -ml-1 bg-gradient-to-b from-transparent to-gray-600/50 hidden sm:block"/>
        <div className="absolute left-1/2 top-1/10 bottom-0 w-2 -ml-1 bg-gray-600/50 hidden sm:block"/>

        <div className="flex flex-col space-y-8 pt-10 sm:pt-20">
          {Projects.map((project, index) =>(
            <ProjectItem key={project.href} {...project} isLeft={index % 2 == 0}/>
          ))}

          <div className="relative w-full flex justify-center sm:pt-8">
            <div className="w-full sm:max-w-md sm:w-1/2 bg-gray-800/80 backdrop-blur-3xl border-2 border-gray-600/50 rounded-2xl p-6 text-center">
              <p className="text-gray-300 mb-4">
                More projects coming soon... <br/>
                For now, check out my GitHub for more repos:
              </p>
              <a
                href="https://github.com/Ynlsen"
                className={`inline-block px-6 py-2.25 border-2 text-sm font-medium rounded-full ${gitHubColor} hover:text-black duration-300`}
              >
                To my GitHub →
              </a>
            </div>  
          </div>
        </div>
      </div>
    </main>
  );
} 