FROM node:8.10.0-alpine
WORKDIR ./
COPY package*.json ./
RUN npm install pm2 -g
RUN npm install
COPY . .
EXPOSE 8080