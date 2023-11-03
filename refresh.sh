#!/bin/bash
echo ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
echo beginning program refresh...
git pull
pm2 delete VERTEXserveComunityResourcesAPI
pm2 start ./server/VERTEXserveComunityResourcesAPI.js
echo refresh complete!
echo ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
