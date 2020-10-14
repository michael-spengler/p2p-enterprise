git pull

npm config set ignore-scripts true
cd /root/p2p-enterprise/client && npm i
npm config set ignore-scripts false

npm run build

pm2 restart p2p-enterprise-server
