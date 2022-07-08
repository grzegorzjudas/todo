FROM node:18-alpine

WORKDIR /application
ADD artifact.tar.gz .
ADD package.json .
RUN npm install

CMD [ "node", "index.js" ]
