---
title:  Formatting USBs With Linux 🔌🔥
date: 2024-08-23
layout: linux
tags:
    - media-tutorials
---
Formatting a USB in Linux is easier then [burning an ISO](01BurningIsos) and only needs a few quick commands!

* * *

## What you will need 📋

*   A USB drive
*   A computer with Linux 🐧🖥
*   The ability to read instructions and to follow them 🧠

* * *

## Formatting the USB

1) The first thing you want to do is plug in your USB stick and identify the USB stick's name.

lsblk

Normally the USB will be something like sdX; a tip on identifying it is by looking at the size of the USB in the table that lsblk gives you!

* * *

2) Now you need to use a program called [fdisk](https://linux.die.net/man/8/fdisk) that will allow you to create a new partition table for the USB, this will format the USB.

sudo fdisk /dev/sdX

You will need to press the following keys to make a new partition table for the USB.

*   o - Creates a new DOS partition table
*   n - New partition, press enter to all that follows
*   w - Writes the partition table

Give fdisk a minute to write the new partition to the USB.

* * *

3) Now is the time to give that partition a file system. You should look into this beforehand to see what file system you want, but I will use fat32 because it works with all operating systems.

sudo mkfs.fat -F 32 -n "Backup-USB" /dev/sdXx

The small x represents the number of the partition; the -L flag is used to give the USB stick a name.

* * *

## Finished ✅

All done! Now you have an empty USB stick you can use for all your files!
