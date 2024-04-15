#!/bin/sh

read -p 'Press your server IP: ' ip

appName=get-sub
user=root
path=/var/www/

fs-ops zip dist -o=dist/${appName}.zip

scp dist/${appName}.zip ${user}@${ip}:${path}
ssh ${user}@${ip} bash -c "'

cd ${path}

mkdir -p ${appName}/node_modules
rm -rf ${appName}-bak
mv -f ${appName} ${appName}-bak

unzip -o ${appName}.zip -d ${appName}
mv ${appName}-bak/node_modules ${appName}

cd ${appName}
npm run start:pm2

'"

