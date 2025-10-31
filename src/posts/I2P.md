---
title: Trying out I2P 🕵️
date: 2024-09-22
layout: post
tags:
    - tech
---
## What is I2P?
<img class="right-image" width="250" src="/images/logos/i2p.png">
<a href="https://i2p.net/">I2P</a> stands for "The Invisible Internet Project" and it is a totally private and encrypted private network layer. If you have ever heard of or used the <a href="https://www.torproject.org/">Tor project</a>, it is similar, but the I2P network is more secure and faster.

### What is the point of using I2P?
This is a good question. Why should you or I even use I2P? The answer is simple: it offers many interesting things, for example:
- Over 7,000 unique websites to visit
- Free fully private Email address
- Private IRCs
- Fully decentralization
- Advanced userbase
- Faster than the <a href="https://www.torproject.org/">Tor</a> and <a href="https://staging.freenetproject.org/">freenet</a>
Overall, I2P offers a lot to you and has an amazing community of friendly people.

***

## My experience
I installed i2pd onto my home server. I chose i2pd because it is written in C, making it faster than the normal I2P package.

After installing and starting up i2pd with Systemd, I had to forward the ports on my local network so that I could use I2P. This can be done by running a simple command:

> ssh -fTNL 4444:127.0.0.1:4444 -L 7070:127.0.0.1:7070 <username>

I would strongly suggest using <a href="https://librewolf.net/">Librewolf</a> to look through the I2P network.

***

Here are a few websites I do like:
- <a href="http://notbob.i2p">">http://notbob.i2p/</a>
- <a href="http://ramble.i2p">http://ramble.i2p/</a>
Most of the websites on I2P are personal sites, and I highly suggest using NotBob to look for them because some of them are really cool.

## Conclusion
Most of the websites on I2P are personal sites. I highly suggest using NotBob to look for them because some of them are really cool.
