FROM node:alpine

# set up global packages
RUN npm install -g yarn
RUN yarn global add nodemon

# set up app environment & packages
RUN mkdir /app
WORKDIR /app
COPY ./package.json /app/package.json
RUN yarn install

# copy app
VOLUME db
COPY ./server /app/server
COPY ./public /app/public
COPY ./nodemon.json /app/nodemon.json

# start!
EXPOSE 3000
CMD [ "npm", "start" ]