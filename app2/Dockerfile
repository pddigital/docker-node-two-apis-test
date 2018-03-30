FROM node:8.10.0-alpine
RUN mkdir -p /var/www/app2
WORKDIR /var/www/app2
COPY ./package*.json /var/www/app2/
RUN npm install pm2 -g
RUN npm install cross-env -g
RUN npm install nodemon -g
RUN npm install
ENV NODE_PATH /var/www/app2/node_modules/
COPY . /var/www/app2/
EXPOSE 8090