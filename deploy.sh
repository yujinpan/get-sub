#!/bin/sh

read -p 'Press your server IP: ' ip

appName=get-sub
user=root
path=/var/www/

scp dist/${appName}.zip ${user}@${ip}:${path}
ssh ${user}@${ip} bash -c "'

cd ${path}

if [ -d ${appName} ]; then
  rm -rf ${appName}-bak
  mv -f ${appName} ${appName}-bak
fi

unzip -o ${appName}.zip -d ${appName}

if [ -d ${appName}-bak ]; then
  for file in node_modules package-lock.json
  do
    if [ -f ${appName}-bak/\${file} ] || [ -d ${appName}-bak/\${file} ]; then
      mv ${appName}-bak/\${file} ${appName}/\${file}
    fi
  done
fi

cd ${appName}
npm run start:pm2

exit
'"
