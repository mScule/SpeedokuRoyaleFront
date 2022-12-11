FROM nginx:latest

COPY ./dist /usr/share/nginx/html
COPY \
  /var/lib/jenkins/workspace/UnityProject/Builds/SpeedokuRoyaleWebGL \
  /usr/share/nginx/html/SpeedokuRoyaleWebGL/
