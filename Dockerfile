FROM node:8.11.3

WORKDIR /JaC2

COPY ./server/package.json /JaC2/
COPY ./server/yarn-lock.json /JaC2/
COPY ./server/config/ /JaC2/config/
COPY ./server/server.bundle.js /JaC2/

RUN mkdir logs
RUN yarn

ENV NODE_ENV production
ENV MONGO_HOST mongodb://cluster0-shard-00-00-cedin.mongodb.net:27017,cluster0-shard-00-01-cedin.mongodb.net:27017,cluster0-shard-00-02-cedin.mongodb.net:27017/jac2
ENV MONGO_PASS dMERJKTvBRe1XrNa
ENV MONGO_USER jac2-server
ENV PORT 80

EXPOSE 80

CMD [ "node", "server.bundle.js" ]
