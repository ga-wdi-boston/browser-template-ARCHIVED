#!/bin/bash

# add google chrome repository
# see https://www.google.com/linuxrepositories/

wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list

# add nodesource repository for node etc.
# see https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories

curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -

apt-get update
apt-get upgrade
apt-get install -y google-chrome
apt-get install -y nodejs

