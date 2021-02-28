FROM node:14
WORKDIR /app
COPY . .
RUN yarn
# RUN yarn prisma generate
RUN yarn build
# RUN yarn prisma migrate dev --name init --preview-feature
EXPOSE $PORT
CMD [ "node", "dist/index.js" ]
# FROM node:14
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN yarn --production
# # RUN yarn prisma generate
# COPY . .
# # RUN yarn prisma migrate dev --name init --preview-feature
# EXPOSE $PORT
# CMD [ "yarn", "start" ]