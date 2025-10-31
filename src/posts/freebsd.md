---
title: Trying out FreeBSD
date: 2024-07-22
layout: post
tags:
    - bsd
    - tech
---
## Introduction
Today, I had the pleasure of trying out FreeBSD, the open source, Unix-like operating system. In this post, I will share my experience with FreeBSD based on my time using it.

***

## Instillation
### Install script
Installing FreeBSD is relatively easy; you are provided with a nice terminal user interface that supports mouse input. Below is a screenshot.
To my surprise installing FreeBSD was relatively easy; the user is provided with a nice terminal user interface powered by <a href="https://invisible-island.net/ncurses/announce.html">ncurses</a> which even supports mouse input allowing for new users to easily adapt.
<br><br>
<center>
Screenshot of ncurses using the bsdinstall script
<img width="800" src="/images/bsd/bsdinstall-choose-mode.png">
</center>
<br>
Thankfully I had no issues whilst using the stock install script, however I did encounter an external problem with <a href="https://www.ventoy.net/en/index.html">Ventoy</a>, for some reason FreeBSD is not supported on Ventoy so I had to burn the FreeBSD iso onto another USB stick. I do hope that in the future this is fixed because for me personally it is easier just to dump the ISO files onto my Ventoy USB.

### Wi-Fi
During the install since my test computer has an unusual Wi-FI card, this caused me to be unable to install FreeBSD over Wi-Fi. Unlike some people I do understand firmware for Wi-Fi cards is a pain so I am happy to over-look this issue. To solve this problem I used Ethernet so I could install the operating system, it also helps that Ethernet is way faster.

### Wheel
Like Arch Linux when installing you have to add your user(s) to the 'wheel' group, this grants the selected users the ability to gain root access, however if you believe this is a security threat you can just do all root operations using the root user and using cron scripts to automate tasks.

***

## Post install - Unix
After the install process, I booted up my test pc into FreeBSD. Instantly I noticed the terminal commands on BSD are basically the same as Linux, this realisation made me feel at ease with using the BSD operating system.

The reason why both operating systems function in a similar manner is because of the UNIX operating system. GNU/Linux as we know it today started as the GNU operating system which is an ongoing attempt to create a fully <a href="https://www.gnu.org/philosophy/free-sw.html">Libre software</a> UNIX-like operating system, however during this same period of time the BSD operating system was starting to emerge at Berkeley University from UNIX. This is why the commands used on both operating systems are virtually the same.

***

## Superuser access 
When I started using BSD I quickly realised that I had no superuser program that'll allow me to run commands from my user with root privileges, this is vital for tasks such as package management. So I went and installed one, here are two superuser programs you can install.


### Commands
| Keyword       | Meaning       |
| ------------- | ------------- |
|       $       | Current user  |
|       #       | Root user     |
|      pkg      | BSD package manager |
|   sudo / doas | superuser programs |


> $ su<br>
> \# pkg install sudo

Or alternatively 

> $ su<br>
> \# pkg install doas

I do suggest that you install doas because from what I know it is much more secure then sudo, especially when you configure it. It also helps that doas was developed for BSD especially.

***

## Xorg and user programs
After doing all of that, my next step was getting a graphical user interface, so I proceeded to install <a href="https://x.org/">X.Org</a> with <a href="https://dwm.suckless.org/">dwm</a>. I did not bother with installing a display manager (login screen) because I would just use <a href="https://www.x.org/releases/X11R7.6/doc/man/man1/startx.1.xhtml">startx</a>, so I focused on installing Git and my <a href="https://gitlab.com/Shipwreckt/dotfiles">dwm config</a>.

However sadly when trying to compile the code for dwm I ran into a problem, however fortunately for myself there was an easy fix thanks to a helpful post on the <a href="https://forums.freebsd.org/threads/installing-dwm-manually-vs-pkg.74687/">FreeBSD forums</a>. After applying that fix I was able to use my dwm setup successfully. After doing this I checked if my two most-used programs, <a href="https://alacritty.org/">Alacritty</a>, <a href="https://librewolf.net/"></a> were available and functional on FreeBSD. To my surprise they were available and both were functional without any issues.

***

<center>
<img width="800" src="/images/bsd/BSDneo.png">
Screenshot of my BSD setup running Neofetch
</center>

***

### Conclusion

Overall I really enjoyed using FreeBSD and tinkering with it; and I do believe that I could BSD as a daily driver since it does support nearly all of my programs. I appreciate that it is a UNIX operating system and has many of the same features as Linux, however for now I shall be staying with Linux, this is because I am more comfortable and knowledgable about Linux (especially <a href="https://archlinux.org">Arch Linux</a>. But in the future I do believe I will try and setup a server with OpenBSD since I have heard exellent things about BSD servers, particularly in regards to security. Anyways I would like to thank you for reading all of this, I hope you have an amazing day, God bless.
