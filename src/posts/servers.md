---
title: Messing Around with servers
date: 2024-07-27
layout: post
tags:
    - linux
    - hardware
    - tech
---
Originally, this article was going to be about setting up an email server. However, due to problems with my router and the fact that I do not like the idea of hosting an email server locally in case it goes down, I have chosen not to do that. Instead, I have decided to host a different server on my local network, and that is what this article is about!

Below is my server; it is a ThinkCentre. I do not really care about the specs because it is not going to be doing much, but it does have an Intel i7, so it’s not bad at all for what I am doing. It has 8 cores and 16 GB of memory, which should be more than enough for what I am doing.
<center>
<img width="550" src="/images/hardware/thinkcenter.png">
</center>

***

## What is on the Server?
<img class="right-image" width="250" src="/images/logos/ubuntu-logo.png">
The operating system of choice for this server is Ubuntu Server; I do know it is not the best server operating system, but I will stick with it for now because I have already set everything up. In the future, I plan to migrate to either a Debian server or an OpenBSD server due to the annoyance of Ubuntu’s snap packages and other weird stuff Ubuntu likes to do.

This is my first time using Docker. Docker allows you to contain programs, such as Apache, letting you to run multiple instances and manage them easily. It has been a pretty smooth experience so far! With Docker, I have installed the Jellyfin media server.

Originally, I planned to install Plex, but the web interface was scuffed and was stuck on the "Premium Features" popup, and none of the buttons worked. So, I removed that container and chose Jellyfin instead. I have heard good things about Jellyfin beforehand, and those have turned out to be true! So far, Jellyfin has met all my needs for a media server, and I am very content with it. If I do change the server OS, I will stick with Jellyfin. I also like that you can upload books to it but I have not tried that feature yet.

The other thing I have on this server is an instance of SearXNG on my local network, providing my own self-hosted search engine! I set it up because I wasn’t sure what else to do with the server, and it’s fun having my own private search engine. Plus, it is definitely much more private than using online search engines like DuckDuckGo or, God forbid, Google.

***
## Conclusion
Overall, this has been an enjoyable project, and I will probably migrate my server sometime in the coming weeks. As always, thank you for reading!
