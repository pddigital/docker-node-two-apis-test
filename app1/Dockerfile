FROM node:8.10.0-ubuntu
WORKDIR ./
COPY package*.json ./
RUN npm install pm2 -g
RUN npm install
COPY . .
EXPOSE 8080
CMD ["pm2-runtime", "process.yml"]