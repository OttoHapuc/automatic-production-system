FROM node:20.2.0

WORKDIR /app

COPY . .

EXPOSE 5606

RUN npm i

RUN npm run build

CMD ["npm", "start"]