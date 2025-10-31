---
title: How To Clean Arch Linux 🧹 
date: 2024-07-21
layout: linux
tags:
    - arch-linux
---
In this artical I will be telling you how to clean up your [Arch Linux system](https://archlinux.org) in the same way I do so.

* * *

## Package Cache

The first thing you want to do is clean the Pacman cache, as Pacman does not automatically clean it. This is because Pacman retains the cache in case you need to downgrade a package or reinstall it after uninstalling. To clean the cache, use the following commands:

> $ sudo pacman -Sc # Remove packages from cache not installed<br>
> $ sudo pacman -Scc # Remove packages from cache both installed and not installed

Some people like to automate this task of cleaning the cache with [paccache](https://wiki.archlinux.org/title/Pacman#Cleaning_the_package_cache), but personally I would not because it is something that takes around five minutes max to do. However, it is your choice if you want to do so to avoid the trouble of doing it manually. Regardless of whether you choose to do this manually or automatically, I suggest cleaning the cache monthly.

* * *

## Removing Orphan Packages

Orphan packages are those installed as dependencies for other software but are no longer needed. For example, when you install [LibreWolf](https://librewolf.net/), it downloads a package called librewolf-debug as a dependency. Once the installation is complete, librewolf-debug becomes an orphan package because it is no longer used by LibreWolf.

> $ sudo pacman -Qtdq # Identify orphan packages<br>
> $ sudo pacman -Rns $(pacman -Qtdq) # Uninstall orphan packages

I suggest uninstalling Orphan packages every month or so, just like cleaning the Pacman cache.

* * *

## Cache

Sometimes you want to clean out the ~/.cache directory, as it can accumulate a large number of files from various programs on your system. The cache directory contains temporary files used by different applications to speed up their processes. In general, it is safe to delete all items in this directory, but be cautious if you have specific applications with unusual caching mechanisms. To clean the cache directory run the following command:

> $ rm -rf ~/.cache/\* # Clear the cache directory

* * *

That is all for now, I hope this artical has helped you clean your system.
