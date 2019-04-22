#! /bin/bash
read -p "enter admin email:" ADMIN_EMAIL
read -p "enter admin password:" ADMIN_PASSWORD

export ADMIN_EMAIL
export ADMIN_PASSWORD
node $HOME/xunbao_backend/backend/scripts/createAdmin.js

echo done

