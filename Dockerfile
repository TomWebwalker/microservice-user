FROM node:13-alpine
WORKDIR /app

COPY . .
RUN npm install -s

CMD ["npm", "run", "start"]