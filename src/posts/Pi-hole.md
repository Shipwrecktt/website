---
title: Pi-hole
date: 2024-09-18
layout: post
tags:
    - linux
    - tech
---
## Introduction
I've been rather busy with school lately, but I still have time to tinker! For a while now, I have wanted to use Pi-hole with my router, but I've either been busy with <a href="/posts/gentoo">Gentoo</a> or school. However, I have finally found the time and inspiration to install Pi-hole on my home server!

***

## What is Pi-hole ?
<img class="right-image" width="250" src="/images/logos/pihole.png">
<a href="https://pi-hole.net/">Pi-hole</a> is a DNS sinkhole that can be used with your router to protect your other devices without installing any client-side software. For the most part, Pi-hole is used for only blocking ads, but there is more you can do with it, for example, logging internet activity and blocking websites.

### benefits of using Pi-Hole
- Network wide adblocker
- Saves bandwith due to adblocker
- Adblocker on all mobile apps
- Free of cost
- Can function as a DHCP server
- Easy-to-install
***
## Installing
Since I'm using Arch Linux as my server OS, the only real option I had was to use the <a href="https://github.com/pi-hole/docker-pi-hole">Docker</a> container. It was relatively easy to install, though I did encounter some issues, mostly due to me not reading what to do. Overall, I'd say it was easy to set up and configure for all my devices to use.

## Blocklist
I have a number of websites blocked to avoid visiting suspicious sites or being tracked. The best source for blocklists from what I can tell is <a href="https://firebog.net/">Firebog</a>. I recommend using only the lists marked in green, as those coloured blue are either no longer maintained or may interfere with your normal day to day web browsing. Additionally I would just add the top three lists from each category to cover a good enought basis.

***

## Conclusion 
I really do like Pi-hole and I see myself using it for the forseeable future as it just does a whole bunch of intresting bits that help me be more secure online.
