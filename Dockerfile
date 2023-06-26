FROM node:20.2.0

WORKDIR /usr/src

COPY . .

EXPOSE 3000

RUN npm install

RUN npm run build

CMD ["npm", "start"]