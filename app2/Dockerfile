FROM node:8.10.0
WORKDIR ./
COPY package*.json ./
RUN npm install pm2 -g
RUN npm install
COPY . .
EXPOSE 8090
CMD ["pm2-runtime", "process.yml"]