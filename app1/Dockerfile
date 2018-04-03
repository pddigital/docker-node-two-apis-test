FROM node:8.10.0-alpine
RUN mkdir -p /var/www/app
WORKDIR /var/www/app1
COPY ./package*.json /var/www/app/
RUN npm cache verify
RUN npm install pm2 -g
RUN npm install cross-env -g
RUN npm install
COPY . /var/www/app1/
EXPOSE 8080