---
title: How to start your own epic Git server!
date: 2025-02-23
layout: linux
tags:
    - the-linux-server
---
Quick guide on how to set up a git server with stagic html website.
***
## What you will need 📋
- A computer with Linux 🐧🖥️
- A VPS with Linux instaled 🐧🗄️
- Some terminal knowlage 🧠
- Ideally have a domain name
***
### 1\) Install Git
> \# sudo apt install git
***
### 2\) Create Git user 
> \# adduser git
***
### 3\) Now you need to add your SSh keys

On computer
> $ ssh-copy-id git@server_ip

If you want to allow other people to use your Git server, add their SSH keys alongside yours.

On server:
> \# su git<br>
> $ cd<br>
> $ mkdir .ssh && chmod 700 .ssh<br>
> $ touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys

***

### 4) Nearly done, now all you need to do is make a git repo.
> \# mkdir -p /srv/git<br>
> \# chown git:git /srv/git<br>
> \# su git<br>
> $ cd /srv/git<br>
> $ mkdir yourrepo.git<br>
> $ cd yourrepo.git<br>
> $ git init --bare

***

### 5) Add your server to your local repo
On computer
> $ cd yourrepo<br>
> $ git init<br>
> $ git add .<br>
> $ git commit -m 'Initial commit'<br>
> $ git remote add origin git@gitserver:/srv/git/project.git<br>
> $ git push origin master

If you already have a Git repository from another server, you can do the following to add your new Git server alongside your old one.

> $ cd yourrepo<br>
> $ git remote add server git@gitserver:/srv/git/project.git<br>
> $ git push server master && git push origin master

***

### 6) If you want to enable anybody to clone from your website do the following!

> \# sudo git daemon --reuseaddr --base-path=/srv/git/ /srv/git/ &<br>
> \# sudo systemctl enable git-daemon<br>
> \# sudo systemctl start git-daemon<br>
> \# su git<br>
> \# touch /srv/git/project.git/git-daemon-export-ok

Cloning your git repo

> git clone git://your-server-ip-address/repository.git

Now you should be able to be able to clone without a ssh key!

***
# Setting up Stagit for personal git website
Now that you have a Git server, you probably want a way to show off all of your repositories. I personally use Stagit for this because it is lightweight and stylish. I will assume you know how to make a website using Apache or Nginx.
***
### 1) First you need to install stagit (I have my own custom fork to make it easier to setup)

> \# cd /var/www<br>
> \# git clone git://shipwreckt.co.uk/Stagit.git<br>
> \# mkdir git<br>
> \# chown git:git git<br>
> \# mv stagit-fork/* git<br>
> \# cd git<br>
> \# sudo make clean install

***

### 2) Setup website.
> \# cd htmldir<br>
> \# sh example_create.sh

Your static stagit website should be generated for you! Check by going to git.yourdomain.com. 

***
### 3) Next you want to set up ownership, links, and descriptions for stagiit to display

Descriptions
> \# This is my git repo > /srv/git/yourrepo.git/description

URL
> \# git://yourdomain.com/yourrepo.git > /srv/git/yourrepo.git/url 

Owner
> \# owner > /srv/git/yourrepo.git/owner

Update stagit
> \# sh /var/www/git/htmldir/example_create.sh

Now repete for all of your repos till all is correct!

***

### 3) Now you want it so stagit updates whenever there is an update, thankfully for you I have modified the script to work whenever a git commit is made!
>  \# cp /var/www/git/example_post-receive.sh /srv/git /srv/git/yourgitrepo.git/hooks/post-receive 

Now whenever you push a commit everything should update!

***

# Overview
I hope this guide has helped you setup a kool git server! If there are any problems please contact me!




