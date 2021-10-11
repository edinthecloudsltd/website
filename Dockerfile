FROM node:latest

COPY . /src/app

WORKDIR /src/app

RUN npm ci

CMD npm run dev