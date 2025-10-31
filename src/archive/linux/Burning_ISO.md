---
title: Burning an ISO to a USB stick 💾
date: 2024-08-24
layout: linux
tags:
    - media-tutorials
---
Burning an ISO onto a USB stick on Linux is very easy, and you only need to use a few commands!

* * *

## What you will need 📋

*   A USB drive
*   A computer with Linux 🐧🖥
*   The ability to read instructions and to follow them 🧠

* * *

### Warning ⚠️

Make sure there is no valuable information on the USB stick.

* * *

## How to burn an ISO to a USB 🔥💾

1) You need to have an ISO file. I am guessing you already have one, but if you do have one, I would suggest checking out [Distrowatch](https://distrowatch.com).

* * *

2) Now that you have the ISO file, you need to plug in the USB stick. After doing that, you need to identify the name of the USB with the following command:

> $ lsblk

The USB name will be something like sdb or sdc; if you are unsure, check the size of the USB and the size of the device listed.

* * *

3) We need to make sure the USB is unmounted, and we do this with this command. Remember to use your USB name:

> $ sudo umount /dev/sdX

* * *

4) Now it is time to burn the ISO to the USB stick, use your USB name and your ISO name with this command!

> $ sudo dd if=debian.iso of=/dev/sdX bs=4M status=progress oflag=sync

* * *

5) After waiting a bit for it to burn, you now need to eject it so you are able to use it with this command:

> $ sudo eject /dev/sdX

* * *

## Finished ✅

After following all of these steps, your USB should have the ISO image burned into it. I hope this has helped you burn a Linux or BSD distro to a USB!
