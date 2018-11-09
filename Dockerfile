FROM node:8

WORKDIR /dockertest/similarlistings

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1128

CMD [ "npm", "run", "server" ]