FROM node

WORKDIR ./app

COPY ./package.json /app/
COPY ./yarn.lock /app/
COPY ./config /app/config
COPY ./index.js /app/
COPY ./server.bundle.js /app/

RUN yarn

ENV NODE_ENV production
ENV PORT 80

EXPOSE 80

CMD [ "node", "index.js" ]
