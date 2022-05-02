FROM node:14.19.1-alpine3.15

# Create app directory
WORKDIR /usr/src/api

# Bundle app source
COPY api/ .

RUN npm install --quiet node-gyp -g &&\
  npm install --production --quiet && \
  apk del native-deps

EXPOSE 8080
CMD [ "npm", "start" ]
