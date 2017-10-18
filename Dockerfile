# specify the node base image with your desired version node:<version>
FROM node:8.7.0-alpine

RUN mkdir -p /src/app/api

WORKDIR /src/app/api

# For npm@5 or later, copy package-lock.json as well
COPY package.json /src/app/api

RUN npm cache clean --force && rm -rf ./node_modules

RUN npm install --silent --progress=false

COPY . /src/app/api

CMD [ "npm", "start" ]