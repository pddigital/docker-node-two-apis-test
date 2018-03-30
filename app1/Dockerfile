FROM node:8.10.0-alpine
RUN mkdir -p /var/www/app
WORKDIR /var/www/app
COPY ./package*.json /var/www/app/
RUN npm install pm2 -g
RUN npm install cross-env -g
RUN npm install
ENV NODE_PATH /var/www/app/node_modules/
COPY . /var/www/app/
RUN npm run build
EXPOSE 8080