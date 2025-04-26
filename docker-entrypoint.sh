#!/bin/sh

# Create webroot directory if it doesn't exist
mkdir -p /var/www/certbot

# Generate SSL certificate using standalone mode
certbot certonly --standalone \
    -d forum-api.haryadi.my.id \
    --non-interactive \
    --agree-tos \
    -m unpam.dik@gmail.com \
    --cert-name forum-api.haryadi.my.id

# Copy certificates to nginx ssl directory
mkdir -p /etc/nginx/ssl
cp /etc/letsencrypt/live/forum-api.haryadi.my.id/fullchain.pem /etc/nginx/ssl/
cp /etc/letsencrypt/live/forum-api.haryadi.my.id/privkey.pem /etc/nginx/ssl/

# Start nginx
nginx -g 'daemon off;'