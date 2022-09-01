FROM node:16.17 as dev

WORKDIR /client

COPY package.json .
COPY . .

RUN npm install

EXPOSE 4002

CMD npm run start

FROM node:16.17 as prod

WORKDIR /client

COPY package.json .
COPY . .

RUN npm install

EXPOSE 4002

CMD npm run start