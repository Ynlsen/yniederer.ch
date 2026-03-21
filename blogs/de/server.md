---
title: "Selbstgehosteter Homelab Server"
description: "Ein aufgerüsteter HP Tower, auf dem Proxmox als Hypervisor für mehrere VMs läuft. Mit einer Docker-basierten Haupt-VM, die persönliche Webseiten, Nextcloud, Immich, Vaultwarden und Traefik hostet."
date: "2026-03-21"
thumbnail: "/server.jpg"
github: "https://github.com/Ynlsen/andromedaLab"
---

## Motivation

Einer der besorgniserregendsten Softwaretrends unserer Zeit ist unsere ständig wachsende Abhängigkeit von Hyperscalern und der sogenannten Cloud. Ohne es wirklich zu merken oder sich darum zu kümmern, haben die meisten Menschen die Kontrolle über ihre Medien, Dateien, ihre Unterhaltung und ihr soziales Leben vollständig an diese Unternehmen abgegeben.

Ich kann es ihnen nicht wirklich verübeln. Der Verlust an Komfort sowie die Vorabkosten und das nötige Wissen, um sich von diesen Unternehmen zu befreien, sind nicht zu unterschätzen. Ich persönlich habe entschieden, dass es das wert ist, und habe diese Herausforderung angenommen.

## Hardware

Ich habe mich bei meinem Homeserver für die Budget-Variante entschieden. Es gäbe viele andere Optionen, wie zum Beispiel ganze Server Racks! Die Basis meines Homelabs ist einfach ein relativ alter HP Tower, den ich gebraucht online gekauft habe. Er kam nur mit einer CPU (und nicht einmal einer wirklich leistungsstarken) und einer kleinen SSD. 

Ich habe den Tower mit zusätzlichen 16 GB RAM aufgerüstet (zum Glück vor den extremen Preisanstiegen), was ihn auf 32 GB bringt. Zusätzlich habe ich zwei 8 TB HDDs für Speicherplatz hinzugefügt.

## Software

Auf diesem Tower lasse ich **Proxmox** laufen, was es mir erlaubt, effizient und einfach mehrere VMs gleichzeitig zu verwalten. Ich lasse zwei Android VMs laufen, die routinemässig hochfahren, um einige Automatisierungsaufgaben auszuführen, sowie meine Haupt VM, auf der im Grunde alles andere gehostet wird. Diese VM heisst [Andromeda Lab](https://github.com/Ynlsen/andromedaLab).

## Andromeda Lab

Diese Haupt VM hostet eine Vielzahl von Diensten, die alle als Docker Container laufen und für eine deklarative Kontrolle mit Docker Compose verwaltet werden.

- **Traefik**: Ein Reverse Proxy, der fast den gesamten Traffic verwaltet, der in und aus der VM fliesst. Er ist Docker nativ, was das Einrichten und Verbinden verschiedener Dienste wirklich einfach und intuitiv macht.
- **Diese Webseite**: Die Webseite, auf der du dich gerade befindest, läuft auf dem Server.
- **Webseiten anderer Leute**: Ich hoste auch Webseiten für andere Personen auf dem Server.
- **Nextcloud**: Eine sehr umfangreiche Software Suite, die Dateispeicherung einfach handhabt.
- **Immich**: Ein spezialisiertes Tool für das Backup und die Verwaltung von Fotos und Videos.
- **Vaultwarden**: Ein zuverlässiger und schlanker Passwort Manager.
- **Minecraft Server**: Selbsterklärend :)
- **Matrix**: Ein dezentraler Messenger.
- **Radicale**: Ein Kalender und ToDo Listen Server.
- **Open WebUI**: Ein KI Chat Interface.

und mehr!

## Solltest du selbst hosten? Ja,

- Wenn du die volle Kontrolle über deine Daten behalten willst.  
- Wenn du selbst entscheiden willst, wie dein Setup funktioniert und sich verhält.  
- Wenn du nicht länger von Grosskonzernen abhängig sein möchtest.  
- Und wenn du einfach Spass daran hast, eigene Tools und Services einzurichten und zu tüfteln.