FROM node:14
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build
EXPOSE 8080
CMD [ "node", "dist/index.js" ]