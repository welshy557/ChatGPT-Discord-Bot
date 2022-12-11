FROM node:16

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

ARG CHATGPT_TOKEN
ARG BOT_TOKEN
ARG CLIENT_ID

ENV CHATGPT_TOKEN ${CHATGPT_TOKEN}
ENV BOT_TOKEN ${BOT_TOKEN}
ENV CLIENT_ID ${CLIENT_ID}

CMD [ "yarn", "start" ]