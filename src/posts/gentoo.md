---
title: Installing Gentoo Linux
date: 2024-08-31
layout: post
tags:
    - linux
    - tech
---

## Introduction
Over the past three days I have been trying to install Gentoo Linux, I have also been tinkering with this Linux distro!

## Installing
<img class="right-image" width="230" src="/images/logos/gentoo.png">
I found the <a href="https://wiki.gentoo.org/wiki/Handbook:Main_Page">Gentoo Handbook</a> extremely useful for installing Gentoo Linux. In the past, my attempts to install Gentoo on my test PC, which uses a BIOS system, were, just a big fail due to a bunch of small mistakes I made. But this time around I installed Gentoo on my main PC, which has 18 cores, that allows me to compile things faster. Overall, I found the installation process to be very straightforward. I simply SSHed into the computer and copied the necessary commands to install the required packages, along with some miscellaneous things like ensuring the file systems where 100% working.

***

## NVIDIA
After installing I wanted to get my desktop enviroment of <a href="https://dwm.suckless.org/">DWM</a> working. Now sadly I do have a NVIDIA Gpu and I knew before I even started installing Gentoo that I would have problems with it. So I tried the simple solution first just installing the <a href="https://www.x.org/wiki/">Xorg server</a> software and the NVIDA graphics drivers. It did not work so I did some more tinkering and updated my system with a configured kernel but I sent it into a panic. At this point I just lost all hope and I had been using Gentoo for two days at that point and I just wanted a normal desktop so I reinstalled <a href="https://archlinux.org/">Arch Linux</a> and played some video games because I was just tired at that point.

***

## Final thoughts
I really enjoyed messing around with Gentoo, even though it took a long time to do so. The documentation on their website was excellent, and I highly recommend trying it out if you're looking for a faster operating system. Personally, I plan to switch to Gentoo once I get an AMD GPU since AMD is supported way better on Linux.

My favorite thing about Gentoo is that it doesn’t require <a href="https://systemd.io/">Systemd</a> as your init system. Instead, Gentoo gives you the choice to use OpenRC, which I find to be simpler and more efficient and not to add more clean than Systemd. I also love that Gentoo requires you to compile everything, and I noticed that my system ran way faster compared to when I was using Arch Linux or any other Linux distro.

But that is all, thank you for reading!
