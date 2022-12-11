FROM nginx:latest

COPY ./dist /usr/share/nginx/html
COPY \
  ./SpeedokuRoyaleWebGL \
  /usr/share/nginx/html/SpeedokuRoyaleWebGL
