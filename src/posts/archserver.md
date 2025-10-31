---
title: Arch Linux Server!
date: 2024-08-26
layout: post
tags:
    - linux
    - tech
---
## Introduction
Today I have installed <a href="https://archlinux.org">Arch Linux</a> on my <a href="/posts/servers">home server</a>; I will be honest it has been so smooth!

I use Arch Linux as my desktop Linux distro, and I knew that you could use it as a server, but I never really thought of doing it. The only reason why I have done this is just to see how good it actually is because, well, I do not hear about people using it as a server much.

***

## What do I have on the server? 📋
I have all the same services that I hosted on my previous server install and more!

- Searxng 🔎
- qBittorrent ⟳
- Jellyfin 📺
- MariaDB 📋 

I was thinking about adding Nextcloud to my server, but I can just use the scp command for backups, plus I do not have much to put on it due to the fact all my work is hosted on Gitlab.

***


## Searxng 🔎

Searxng is a metasearch engine that takes results from other search services. It does not track you; even the public ones don't! I like it because it gives me good results and it is easy to self-host, so I know 100%  that I am not being tracked. I did try to install it without Docker, but the guidedid not work for me, so I basically took the easy way out with the official Docker image that worked.

## qBittorrent ⟳

I have the web UI of qBittorrent installed on my Arch Linux server. I used the Arch Linux guide on how to set it up, and I only really needed to install two programs. Then, just like that, everything is installed and working! It was really easy, and I am more satisfied with it. The reason why I have a torrent is just to support some Linux distros I like and have the ISOs ready when I need them.

## Jellyfin 📺

Jellyfin is a free, as in freedom software, self-hosted media server. If you have ever used <a href="https://www.plex.tv/">Plex</a>, it is kind of like that, but Jellyfin is better because it has a whole load of <a href="https://jellyfin.org/docs/general/server/plugins/#official-plugins">plugins</a> and is licensed under the GPL-2.0, which makes it free software! But overall, it is an amazing media server, way better than Plex, so if you are able to switch over. I will be mostly hosting a few movies and books on it! 

## MariaDB 📋

MariaDB is a database server forked from <a href="https://www.mysql.com/">MySQL</a>. The reason why I have this installed on my server is because I want to start learning how to use a database on a server because, from what I can tell, it looks really good on a CV, and you never know, it could be useful to me in the future!

*** 

## Last words

I will probably only use Arch Linux for servers because it is hassle-free and easy to use! That is all there is to say it was easy and less of a headache than <a href="https://ubuntu.com/">Ubuntu</a>, at least in my experience.

But thank you for reading!
