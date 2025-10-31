---
title: Speeding up Pacman 🚗
date: 2024-08-23
layout: linux
tags:
    - arch-linux
---
It is very easy to speed up Pacman, and we can do it in a few easy steps, so follow this guide, and your favourite package manager will be fast as anything!

* * *

## Pacman.conf

Pacman can download packages in parallel, meaning you are able to download more than one package at a time, which makes the process of installing and updating packages way faster!

The first thing you want to do is go to the location of pacman.conf, which is located in **/etc/pacman.conf**. So you would want to run a command like this but with your preferred text editor:

> $ sudo nvim /etc/pacman.conf

Now that you are in the configuration file, you want to navigate to a section where it says **Misc options**. You want to uncomment the line where it says **'ParallelDownloads.'** It should look something like this:

> \# Misc options  <br>
> #UseSyslog  <br>
> Color  <br>
> #NoProgressBar  <br>
> CheckSpace  <br>
> #VerbosePkgLists  <br>
> ParallelDownloads = 5  <br>
> ILoveCandy

If you have a keen eye, you may have spotted the last line, which says 'I Love Candy,' and the reason why this line is here is because it gives the Pacman prompt when you run it a bit of styal with the pound signs being replaced with Pacman!

* * *

## Mirrors 🪞

If you did not know, a mirror is a server where the packages you install are hosted. Ideally, you want to download all of your packages from the fastest mirrors, so let me show you how to do that!

The first thing you will need to do is install the reflector program and run the reflector command.

> $ sudo pacman -S reflector  <br>
> $ sudo reflector --latest 10 --sort rate --save /etc/pacman.d/mirrorlist  <br>
> $ sudo pacman -Syy # To update package list from server

After running this command, your download speed should be way faster!

* * *

I hope this has helped you in making Pacman not only look better but function better!
