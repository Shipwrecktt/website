---
title:  Encrypting USB with luks 🔒
date: 2025-02-17
layout: linux
tags:
    - media-tutorials
---
## What you will need 📋

*   A USB drive
*   A computer with Linux 🐧🖥
*   The ability to read instructions and to follow them 🧠

* * *

1) Install cryptsetup

> $ sudo pacman -S cryptsetup

* * *

2) Backup any information on the USB stick because this process involves formatting the USB drive.

* * *

3) Formatting USB.

> $ sudo fdisk /dev/sdX

The X being your USB drive.

Press the following keys:  
o  
n  
Press enter for the rest  
w

* * *

4) Encryption time!

> $ sudo cryptsetup luksFormat /dev/sdX1

* * *

5) Decrypt USB

> $ sudo cryptsetup luksOpen /dev/sdX1 USB

Note: The first password is your root user password, not the encryption password. I have sadly made this mistake in the past.

* * *

6) Format the Encrypted Partition

> $ sudo mkfs.ext4 /dev/mapper/USB

Depending on the size of the USB, this may take some time. For me, it took 3 minutes.

* * *

Step 7: Mount the Encrypted Partition

> $ sudo mkdir -p /mnt/USB  <hr>
> $ sudo mount /dev/mapper/USB /mnt/USB

* * *

## Finished ✅

I hope your password is good, make sure to memorize it or save it in a password manager!
