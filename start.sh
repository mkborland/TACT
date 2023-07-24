#!/bin/bash

echo "=========================================================================="
echo "Clean up PM2 apps"
echo "=========================================================================="
pm2 stop all
pm2 delete all

echo "=========================================================================="
echo "Executing npm install and sequelize migrations for frontend and API"
echo "=========================================================================="

cd Client
npm install

cd ..
cd Server
npm install
npm run migrate

cd ..

echo "=========================================================================="
echo "Starting API"
echo "=========================================================================="
cd Server
pm2 start npm --name "tact-api" -- start --watch=true
cd ..

echo "=========================================================================="
echo "Starting Frontend"
echo "=========================================================================="
cd Client
pm2 start npm --name "tact-client" -- start --watch=true
cd ..

pm2 ps
pm2 monit
