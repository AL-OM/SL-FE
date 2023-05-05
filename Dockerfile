FROM node:16-alpine3.16 as build

WORKDIR /sl-fe

COPY . .

RUN yarn build

CMD ["yarn", "start"]