FROM nginx:latest

# Copy NGINX config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy Built image
COPY ./dist /usr/share/nginx/html

# Copy Built Unity game
COPY \
  ./SpeedokuRoyaleWebGL \
  /usr/share/nginx/html/SpeedokuRoyaleWebGL
