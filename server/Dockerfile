FROM node:16.17 as dev

WORKDIR /server

COPY package.json .
COPY . .

RUN npm install

EXPOSE 4001

CMD node server.js

FROM node:16.17 as prod

WORKDIR /server

COPY package.json .
COPY . .

RUN npm install

EXPOSE 4001

CMD node server.js