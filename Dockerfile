FROM node:14.15-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm i -g concurrently @angular/cli @nestjs/cli
RUN yarn
COPY . .
