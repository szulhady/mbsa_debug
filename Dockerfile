# FROM node:14.15.0-alpine3.12
FROM node:12.16.3-alpine3.9

# WORKDIR /app
RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app
WORKDIR /var/www/dockerize-nuxt/nuxt-app

COPY package.json .
# COPY yarn.lock .

# RUN yarn install

COPY . .

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

CMD [ "npm", "start" ]