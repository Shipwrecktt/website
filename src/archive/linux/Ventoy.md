---
title: How to Install Ventoy with Linux 🐧🔌
date: 2024-08-25
layout: linux
tags:
    - tools
---
Installing Ventoy is pretty easy, just a few quick steps and you will be there!

* * *

## What you will need 📋

*   A USB with over 10GiB
*   A computer with Linux 🐧🖥️
*   The ability to read instructions and to follow them 🧠

* * *

### Warning ⚠️

If the USB has any useful data, please back it up before following this guide.

* * *

## Installing Ventoy with Linux 🐧🔌

1) The first thing you want to do is get a few .ISO and .IMG files. [Tails](https://tails.net/install/download/index.en.html) is a must-have on Ventoy, and you can also have a little look on [distrowatch](https://distrowatch.com) for other distros that peak your curiosity!

* * *

2) Install ventoy.tar.gz from [https://ventoy.net/en/index.html](https://ventoy.net/en/index.html), the website tells you to install it from [source forge](https://sourceforge.net/projects/ventoy/files/v1.0.99/), make sure it is the linux.tar.gz file.

* * *

3) After installing the tar.gz, you need to run the following command; this will open the compressed file, which will allow you to use Ventoy.

> $ gunzip ventoy-<version>-linux.tar.gz && tar -xvf ventoy-<version>-linux.tar

* * *

4) Next you want to enter the Ventoy directory and identify what your USB name is

> $ cd ventoy-<version>/ && lsblk

Normally the USB with the lowest amount of storage will be your USB; to make sure, check the size of your USB compared to the devices listed under lsblk.

* * *

5) This command will install Ventoy to the USB. Make sure your USB name is correct; it will be something like sdb. A good way to identify the USB is by running lsblk when the USB is out and then running lsblk while the USB is plugged in.

> $ sudo sh Ventoy2Disk.sh -i /dev/sdX
> $ Replace the X with your device letter.

* * *

6) The last command is just ejecting your USB

> $ sudo eject sdX

* * *

## All done ✅

After following all of these steps Ventoy should be installed on your USB stick, now the only thing to do is plug the USB in and put the ISO and IMG files into the USB, I hope this has helped you!
