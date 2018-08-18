FROM node:8.11.3

WORKDIR ./JaC2

COPY ./package.json /JaC2/
COPY ./package-lock.json /JaC2/
COPY ./config/ /JaC2/config/
COPY ./server/index.js /JaC2/
COPY ./server/dist/ /JaC2/dist/

RUN npm i npm@latest -g
RUN npm install

ENV NODE_ENV production
ENV PORT 80
EXPOSE 80

CMD [ "node", "index.js" ]