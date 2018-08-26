FROM node

WORKDIR ./app

COPY ./package.json /app
COPY ./config /JaC2/config
COPY ./server/index.js /app/index.js
COPY ./server/dist /app/dist

RUN npm install

ENV NODE_ENV production
ENV PORT 80
EXPOSE 80

CMD [ "node", "index.js" ]
