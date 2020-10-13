git pull

cd client 

npm config set ignore-scripts true
npm i
npm config set ignore-scripts false

npm run build

pm2 restart p2p-enterprise-server