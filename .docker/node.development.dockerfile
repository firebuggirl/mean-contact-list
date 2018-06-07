
FROM node:latest

LABEL author="Juliette Tworsey"

COPY      . /var/www
WORKDIR   /var/www


RUN npm install nodemon -g
RUN npm install

EXPOSE 7777

ENTRYPOINT ["nodemon", "server.js"]
