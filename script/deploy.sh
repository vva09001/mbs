#!/bin/sh
git pull
npm install
npm run start
pm2 restart mbs
exit
