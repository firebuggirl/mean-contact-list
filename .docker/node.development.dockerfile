
FROM node:alpine

LABEL author="Juliette Tworsey"

COPY      . /var/www
WORKDIR   /var/www

# Added process SIGINT + process SIGTERM to app.js, so don't need to use tini here
# When using tini => runs in foreground as PID 1 (main process) => shut down properly
# when using ctrl + c & docker stop (when running -d)
# check running processes in container => docker top <container_id>
#ENTRYPOINT ["/sbin/tini", "--"]

RUN npm install nodemon -g
# Double Ampersand => first command has to successfully install BEFORE the clean
# npm cache clean => make sure no left over files downloaded from NPM
RUN npm install && npm cache clean --force


EXPOSE 7777

ENTRYPOINT ["nodemon", "server.js"]
