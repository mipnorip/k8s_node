FROM node:21.7.1-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
USER node
RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

ENTRYPOINT [ "node" ]
CMD [ "index.mjs" ]