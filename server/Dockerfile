FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn --production
# RUN yarn prisma generate
COPY . .
# RUN yarn prisma migrate dev --name init --preview-feature
CMD [ "yarn", "serve" ]