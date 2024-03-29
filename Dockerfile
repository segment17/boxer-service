FROM node:12
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 50051
ENTRYPOINT [ "node", "index.js" ]
