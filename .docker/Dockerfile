FROM node:latest

RUN mkdir -p /aws/app
WORKDIR /aws

COPY package.json /aws
COPY app /aws/app

RUN npm i --omit=dev

EXPOSE 3000/tcp

CMD [ "npm","run","start" ]

