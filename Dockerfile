FROM node:alpine3.20
WORKDIR /app
RUN npm install -g live-server
COPY . .

CMD ["live-server"]
