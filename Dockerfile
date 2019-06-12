# Multistage Docker build test
# slim is not working w/tini
#FROM node:10-slim as prod
FROM node:10.15-alpine as prod

ENV NODE_ENV=production

EXPOSE 7777

RUN apk add --no-cache tini

WORKDIR WORKDIR /app

# Use wildcard * in case lock file does not yet exist
COPY package*.json  ./

# Double Ampersand => first command has to successfully install BEFORE the clean
# npm cache clean => make sure no left over files downloaded from NPM
RUN npm install --only=production && npm cache clean --force

COPY . .

# ..use this in prod if want to prevent images from building as a result of failed tests
# RUN npm test

# Added process SIGINT + process SIGTERM to app.js, so don't need to use tini here
# When using tini => runs in foreground as PID 1 (main process) => shut down properly
# when using ctrl + c & docker stop (when running -d)
# check running processes in container => docker top <container_id>
ENTRYPOINT ["/sbin/tini", "--"]

CMD ["npm", "prod"]

FROM prod as dev
ENV NODE_ENV=development
RUN npm install --only=development
RUN npm install nodemon -g
CMD ["npm", "dev"]

FROM dev as test
ENV NODE_ENV=development
# RUN npm test..comment out CMD if using this command
CMD ["npm", "test"]



# Build + run prod:
# docker build -t multistagecrud --target prod . && docker run --init -p 7777:7777 multistagecrud

# Build + run dev:
# docker build -t multistagecrud:dev --target dev . && docker run --init -p 7777:7777 multistagecrud:dev

# need the tini `--init` process for `ctrl + c`..stopping container


# Build + run test:
# docker build -t multistagecrud:test --target test . && docker run --init  multistagecrud:test
