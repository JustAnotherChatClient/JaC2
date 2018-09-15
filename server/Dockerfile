FROM node

WORKDIR /jac2

COPY ./package.json /jac2
COPY ./yarn.lock /jac2
COPY ./config /jac2/config
COPY ./server.bundle.js /jac2

RUN yarn
RUN mkdir logs

ENV NODE_ENV production
ENV MONGO_HOST mongodb://cluster0-shard-00-00-cedin.mongodb.net:27017,cluster0-shard-00-01-cedin.mongodb.net:27017,cluster0-shard-00-02-cedin.mongodb.net:27017/jac2
ENV MONGO_PASS dMERJKTvBRe1XrNa
ENV MONGO_USER jac2-server
ENV PORT 80

EXPOSE 80

CMD [ "node", "server.bundle.js" ]
