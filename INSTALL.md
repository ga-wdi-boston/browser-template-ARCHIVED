# Installing MongoDB

Before we do anything with MongoDB, we need to install it.

## On the Mac:

Type `brew install mongo`

```
Tiresias:wdi_8_mongo_intro cwilbur$ brew install mongo
==> Downloading https://homebrew.bintray.com/bottles/mongodb-3.0.3.yosemite.bott
######################################################################## 100.0%
==> Pouring mongodb-3.0.3.yosemite.bottle.1.tar.gz
==> Caveats
To have launchd start mongodb at login:
    ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
Then to load mongodb now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
Or, if you don't want/need launchctl, you can just run:
    mongod --config /usr/local/etc/mongod.conf
==> Summary
🍺  /usr/local/Cellar/mongodb/3.0.3: 17 files, 154M
Tiresias:wdi_8_mongo_intro cwilbur$
```

Then follow its instructions to start the server every time you login: type `ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents`

```
Tiresias:wdi_8_mongo_intro cwilbur$ ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
/Users/cwilbur/Library/LaunchAgents/homebrew.mxcl.mongodb.plist -> /usr/local/opt/mongodb/homebrew.mxcl.mongodb.plist
```

And follow its instructions to start the server now: type `launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist` (you won't see any output, just a prompt)

### On Ubuntu:

Type `sudo apt-get install mongodb` then enter your password:

```
cwilbur@ubuntu:~/node_demo$ sudo apt-get install mongodb
[sudo] password for cwilbur: 
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  libboost-dev libboost-filesystem1.54.0 libboost-program-options1.54.0
  libboost-thread1.54.0 libboost1.54-dev libgoogle-perftools4 libpcrecpp0
  libsnappy1 libstdc++-4.8-dev libtcmalloc-minimal4 libunwind8 libv8-3.14.5
  mongodb-clients mongodb-dev mongodb-server
Suggested packages:
  libboost-doc libboost1.54-doc libboost-atomic1.54-dev
  libboost-chrono1.54-dev libboost-context1.54-dev libboost-coroutine.54-dev
  libboost-date-time1.54-dev libboost-exception1.54-dev
  libboost-filesystem1.54-dev libboost-graph1.54-dev
  libboost-graph-parallel1.54-dev libboost-iostreams1.54-dev
  libboost-locale1.54-dev libboost-log.54-dev libboost-math1.54-dev
  libboost-mpi1.54-dev libboost-mpi-python1.54-dev
  libboost-program-options1.54-dev libboost-python1.54-dev
  libboost-random1.54-dev libboost-regex1.54-dev
  libboost-serialization1.54-dev libboost-signals1.54-dev
  libboost-system1.54-dev libboost-test1.54-dev libboost-thread1.54-dev
  libboost-timer1.54-dev libboost-wave1.54-dev libboost1.54-tools-dev
  libmpfrc++-dev libntl-dev libstdc++-4.8-doc
The following NEW packages will be installed:
  libboost-dev libboost-filesystem1.54.0 libboost-program-options1.54.0
  libboost-thread1.54.0 libboost1.54-dev libgoogle-perftools4 libpcrecpp0
  libsnappy1 libstdc++-4.8-dev libtcmalloc-minimal4 libunwind8 libv8-3.14.5
  mongodb mongodb-clients mongodb-dev mongodb-server
0 upgraded, 16 newly installed, 0 to remove and 10 not upgraded.
Need to get 22.4 MB of archives.
After this operation, 229 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://us.archive.ubuntu.com/ubuntu/ trusty-updates/main libboost-filesystem1.54.0 amd64 1.54.0-4ubuntu3.1 [34.2 kB]
Get:2 http://us.archive.ubuntu.com/ubuntu/ trusty-updates/main libboost-program-options1.54.0 amd64 1.54.0-4ubuntu3.1 [115 kB]
Get:3 http://us.archive.ubuntu.com/ubuntu/ trusty-updates/main libboost-thread1.54.0 amd64 1.54.0-4ubuntu3.1 [26.5 kB]
Get:4 http://us.archive.ubuntu.com/ubuntu/ trusty/main libpcrecpp0 amd64 1:8.31-2ubuntu2 [14.5 kB]
Get:5 http://us.archive.ubuntu.com/ubuntu/ trusty/main libunwind8 amd64 1.1-2.2ubuntu3 [48.3 kB]
Get:6 http://us.archive.ubuntu.com/ubuntu/ trusty/main libstdc++-4.8-dev amd64 4.8.2-19ubuntu1 [1,050 kB]
Get:7 http://us.archive.ubuntu.com/ubuntu/ trusty-updates/main libboost1.54-dev amd64 1.54.0-4ubuntu3.1 [5,682 kB]
Get:8 http://us.archive.ubuntu.com/ubuntu/ trusty/main libboost-dev amd64 1.54.0.1ubuntu1 [3,076 B]
Get:9 http://us.archive.ubuntu.com/ubuntu/ trusty/main libtcmalloc-minimal4 amd64 2.1-2ubuntu1 [104 kB]
Get:10 http://us.archive.ubuntu.com/ubuntu/ trusty/main libgoogle-perftools4 amd64 2.1-2ubuntu1 [184 kB]
Get:11 http://us.archive.ubuntu.com/ubuntu/ trusty/universe libv8-3.14.5 amd64 3.14.5.8-5ubuntu2 [1,189 kB]
Get:12 http://us.archive.ubuntu.com/ubuntu/ trusty/universe mongodb-dev amd64 1:2.4.9-1ubuntu2 [982 kB]
Get:13 http://us.archive.ubuntu.com/ubuntu/ trusty/main libsnappy1 amd64 1.1.0-1ubuntu1 [11.2 kB]
Get:14 http://us.archive.ubuntu.com/ubuntu/ trusty/universe mongodb-clients amd64 1:2.4.9-1ubuntu2 [9,595 kB]
Get:15 http://us.archive.ubuntu.com/ubuntu/ trusty/universe mongodb-server amd64 1:2.4.9-1ubuntu2 [3,312 kB]
Get:16 http://us.archive.ubuntu.com/ubuntu/ trusty/universe mongodb amd64 1:2.4.9-1ubuntu2 [5,124 B]
Fetched 22.4 MB in 33s (677 kB/s)                                              
Selecting previously unselected package libboost-filesystem1.54.0:amd64.
(Reading database ... 202516 files and directories currently installed.)
Preparing to unpack .../libboost-filesystem1.54.0_1.54.0-4ubuntu3.1_amd64.deb ...
Unpacking libboost-filesystem1.54.0:amd64 (1.54.0-4ubuntu3.1) ...
Selecting previously unselected package libboost-program-options1.54.0:amd64.
Preparing to unpack .../libboost-program-options1.54.0_1.54.0-4ubuntu3.1_amd64.deb ...
Unpacking libboost-program-options1.54.0:amd64 (1.54.0-4ubuntu3.1) ...
Selecting previously unselected package libboost-thread1.54.0:amd64.
Preparing to unpack .../libboost-thread1.54.0_1.54.0-4ubuntu3.1_amd64.deb ...
Unpacking libboost-thread1.54.0:amd64 (1.54.0-4ubuntu3.1) ...
Selecting previously unselected package libpcrecpp0:amd64.
Preparing to unpack .../libpcrecpp0_1%3a8.31-2ubuntu2_amd64.deb ...
Unpacking libpcrecpp0:amd64 (1:8.31-2ubuntu2) ...
Selecting previously unselected package libunwind8.
Preparing to unpack .../libunwind8_1.1-2.2ubuntu3_amd64.deb ...
Unpacking libunwind8 (1.1-2.2ubuntu3) ...
Selecting previously unselected package libstdc++-4.8-dev:amd64.
Preparing to unpack .../libstdc++-4.8-dev_4.8.2-19ubuntu1_amd64.deb ...
Unpacking libstdc++-4.8-dev:amd64 (4.8.2-19ubuntu1) ...
Selecting previously unselected package libboost1.54-dev.
Preparing to unpack .../libboost1.54-dev_1.54.0-4ubuntu3.1_amd64.deb ...
Unpacking libboost1.54-dev (1.54.0-4ubuntu3.1) ...
Selecting previously unselected package libboost-dev.
Preparing to unpack .../libboost-dev_1.54.0.1ubuntu1_amd64.deb ...
Unpacking libboost-dev (1.54.0.1ubuntu1) ...
Selecting previously unselected package libtcmalloc-minimal4.
Preparing to unpack .../libtcmalloc-minimal4_2.1-2ubuntu1_amd64.deb ...
Unpacking libtcmalloc-minimal4 (2.1-2ubuntu1) ...
Selecting previously unselected package libgoogle-perftools4.
Preparing to unpack .../libgoogle-perftools4_2.1-2ubuntu1_amd64.deb ...
Unpacking libgoogle-perftools4 (2.1-2ubuntu1) ...
Selecting previously unselected package libv8-3.14.5.
Preparing to unpack .../libv8-3.14.5_3.14.5.8-5ubuntu2_amd64.deb ...
Unpacking libv8-3.14.5 (3.14.5.8-5ubuntu2) ...
Selecting previously unselected package mongodb-dev.
Preparing to unpack .../mongodb-dev_1%3a2.4.9-1ubuntu2_amd64.deb ...
Unpacking mongodb-dev (1:2.4.9-1ubuntu2) ...
Selecting previously unselected package libsnappy1.
Preparing to unpack .../libsnappy1_1.1.0-1ubuntu1_amd64.deb ...
Unpacking libsnappy1 (1.1.0-1ubuntu1) ...
Selecting previously unselected package mongodb-clients.
Preparing to unpack .../mongodb-clients_1%3a2.4.9-1ubuntu2_amd64.deb ...
Unpacking mongodb-clients (1:2.4.9-1ubuntu2) ...
Selecting previously unselected package mongodb-server.
Preparing to unpack .../mongodb-server_1%3a2.4.9-1ubuntu2_amd64.deb ...
Unpacking mongodb-server (1:2.4.9-1ubuntu2) ...
Selecting previously unselected package mongodb.
Preparing to unpack .../mongodb_1%3a2.4.9-1ubuntu2_amd64.deb ...
Unpacking mongodb (1:2.4.9-1ubuntu2) ...
Processing triggers for man-db (2.6.7.1-1ubuntu1) ...
Processing triggers for ureadahead (0.100.0-16) ...
ureadahead will be reprofiled on next reboot
Setting up libboost-filesystem1.54.0:amd64 (1.54.0-4ubuntu3.1) ...
Setting up libboost-program-options1.54.0:amd64 (1.54.0-4ubuntu3.1) ...
Setting up libboost-thread1.54.0:amd64 (1.54.0-4ubuntu3.1) ...
Setting up libpcrecpp0:amd64 (1:8.31-2ubuntu2) ...
Setting up libunwind8 (1.1-2.2ubuntu3) ...
Setting up libstdc++-4.8-dev:amd64 (4.8.2-19ubuntu1) ...
Setting up libboost1.54-dev (1.54.0-4ubuntu3.1) ...
Setting up libboost-dev (1.54.0.1ubuntu1) ...
Setting up libtcmalloc-minimal4 (2.1-2ubuntu1) ...
Setting up libgoogle-perftools4 (2.1-2ubuntu1) ...
Setting up libv8-3.14.5 (3.14.5.8-5ubuntu2) ...
Setting up mongodb-dev (1:2.4.9-1ubuntu2) ...
Setting up libsnappy1 (1.1.0-1ubuntu1) ...
Setting up mongodb-clients (1:2.4.9-1ubuntu2) ...
Setting up mongodb-server (1:2.4.9-1ubuntu2) ...
Adding system user `mongodb' (UID 116) ...
Adding new user `mongodb' (UID 116) with group `nogroup' ...
Not creating home directory `/home/mongodb'.
Adding group `mongodb' (GID 125) ...
Done.
Adding user `mongodb' to group `mongodb' ...
Adding user mongodb to group mongodb
Done.
mongodb start/running, process 14198
Processing triggers for ureadahead (0.100.0-16) ...
Setting up mongodb (1:2.4.9-1ubuntu2) ...
Processing triggers for libc-bin (2.19-0ubuntu6.6) ...
cwilbur@ubuntu:~/node_demo$ 
```

(The details may be different if you started out with a different combination of packages installed.)

## Verifying that it worked

On either Mac or Ubuntu: say `mongo` and you should see something like this:

```
Tiresias:mongodb-crud cwilbur$ mongo
MongoDB shell version: 3.0.3
connecting to: test
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
  http://docs.mongodb.org/
Questions? Try the support group
  http://groups.google.com/group/mongodb-user
> 
```

Then you can type `exit` to exit the mongo shell.




