---
title: "Self Hosted Homelab Server"
description: "An upgraded HP tower running Proxmox as the hypervisor for multiple VMs. With a Docker-based main VM hosting personal sites, Nextcloud, Immich, Vaultwarden, and Traefik."
date: "2026-03-21"
thumbnail: "/server.jpg"
github: "https://github.com/Ynlsen/andromedaLab"
---

## Motivation

One of the most worrisome software trends of our time is our ever-growing reliance on hyperscalers and the so-called cloud. Without really noticing or caring, most people have completely surrendered control of their media, files, entertainment, and social lives to these companies. 

I can't really blame them. The loss of convenience, along with the upfront cost and knowledge required to free oneself from these companies, is not to be underestimated. I personally decided that it is worth it and have taken up this challenge.

## Hardware

I decided on going the budget route for my home server. There were many other options, like entire server racks! The basis of my homelab is simply a relatively old HP tower I got secondhand online. It only has a CPU (and not even a really powerful one) and a small SSD. 

I upgraded the tower with an additional 16 GB of RAM (luckily before the extreme price hikes), bringing it to 32 GB. Additionally, I added two 8 TB HDDs for storage.

## Software

On this tower, I run **Proxmox**, which allows me to efficiently and easily manage multiple VMs at once. I run two Android VMs, which periodically boot up to run some automation tasks, and my main VM, where basically everything else is hosted. This VM is called [Andromeda Lab](https://github.com/Ynlsen/andromedaLab).

## Andromeda Lab

This main VM is hosting a multitude of services, all running as Docker containers and managed with Docker Compose for declarative control.

- **Traefik**: The reverse proxy managing nearly all the traffic running in and out of the VM. It is Docker native, which makes setting up and connecting different services really easy and intuitive.
- **This website**: The website you are currently on is running on the server.
- **Other people's websites**: I also host websites for other people on the server.
- **Nextcloud**: A very extensive software suite that easily handles file storage.
- **Immich**: A specialized photo and video backup management solution.
- **Vaultwarden**: A reliable and lean password manager.
- **Minecraft server**: Self-explanatory :)
- **Matrix**: A distributed messaging service.
- **Radicale**: A calendar and todo list server.
- **Open WebUI**: An AI chat interface.

and more!

## So, should you self-host? Yes,

- If you want control of your data.  
- If you want to decide for yourself how your services should work and behave.  
- If you want to no longer be dependent on large corporations.  
- And if you simply have fun and are interested in tinkering and setting up software solutions yourself.