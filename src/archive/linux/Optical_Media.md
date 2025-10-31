---
title:  Burning optical media in Linux 💿
date: 2024-08-23
layout: linux
tags:
    - media-tutorials
---
This is a quick tutorial to show you how to burn any file to a piece of optical disk media!

***

### Warning ⚠️

Once you burn an optical disk you cannot reburn it.

Optical media does not have the best storage, normally under 1GiB so make sure your files align with the size of the optical media.

***

## What you will need 📋

* Optical drive capable of writing to a CD
* A computer with Linux 🐧🖥️
* The ability to read instructions and to follow them 🧠

***

## Steps to burn 🔥

You will only need one program to burn media to a CD; the name of that program is [wodim](https://linux.die.net/man/1/wodim), and it is part of a collection of programs called [cdrkit](https://packages.debian.org/source/sid/cdrkit), as in thename ofe this collection of programs that allow you to do a whole variaty of things withopticall media!

***

1) Install cdrkit, on some Linux distrobutions cdrkit is already installed, but on my main Linux distrobution [Arch Linux](https://archlinux.org), it is not so check you have it installed, the package on your distro will most likely be called cdrkit.
  

> sudo pacman -S cdrkit

  

***

 2) You want to get whatever data you want into an ISO file, so if you had a file called movies that held movies you would use the command. As an example, I will be using the location of the Fallout 1 installation files on my system.
  

> mkisofs -o Fallout.iso -V "Fallout 1" ~/Downloads/Fallout<br>
>Fallout.iso being the output ISO and ~/Downloads/Fallout being the directory with the movies in there.

***

 3) Now the last command is the actual event of burning the optical media! So insert it into your optical drive and type this command.
  

> cdrecord -v dev=/dev/cdrom ~/Downloads/Fallout.iso<br>
> movies.iso being the output ISO from the last command.

***

## Overview
Now it is time to sit back and wait for it to burn; do not get impatient; give it time, and it will burn. When it is done, you may enject the optical media from the CD drive, and it should have all the files you desire.
