---
title: VPS Server 🗄️
date: 2025-02-21
layout: post
tags:
    - linux
    - tech
---
## Introduction
If you have read any of my posts in the past, you may know of my aspiration to host my website and email server on a VPS. Well, that day has come! Finally.

So far my VPS (virtual private server) is doing three things:

- Git server: <a href="https://git.shipwreckt.co.uk">git.shipwreckt.co.uk</a>
- Email server: <a href="https://git.shipwreckt.co.uk/">git.shipwreckt.co.uk</a>
- CalDEV server: Allows me to sync all my contacts and calendar between devices!
- Website hosting! This enables me to try other web languages like <a href="https://www.php.net/">PHP</a> out

***
## Why?

### Why host an email server ?
A better question would be why not host an email server. When you sign up for Gmail or Protonmail you give them full trust over your email communications. Well, I trust myself way more than any company to handle my personal communications. Sadly, I can only receive emails until I can get some ports unblocked, but I am happy as is!

### Why host a Git server?
I will be honest: the main reason why I host a Git server is because it is really cool, in my opinion; it has enabled me to learn more about Git as a programme. It is also good to have a personal server that is fully under my control, unlike GitLab!

Sadly, I will not do HTTPS or HTTP Git cloning because it is not needed since I am using the Git daemon to allow people to clone from my server! Whilst on the topic of HTTP and HTTPS, I am using the Stagit static HTML programme to have a kind of front end to my server so you can view all my repositories! Due to it being complex (at least for me), I may write a tutorial on how to get it up and running smoothly.

### Why host a CalDEV server?


Hosting a CalDAV server is one of the most satisfying things I have ever done. Having everything synchronised just makes me happy! I have all my calendars synced and all of my contacts synced too. I love having a CalDAV server for all the rubbish I have planned, and I hope that I can get more use out of it! Also if you are curious I am using the <a href="https://radicale.org/">radicale</a> software for the CalDEV server.

***

## Overview
Overall, I am just happy to have a whole server that I can use for whatever I want! This has opened up a whole new world for me of tinkering and stress. I hope this VPS serves me well!
