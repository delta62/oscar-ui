FROM node:6-alpine

# Set env vars
ENV NODE_ENV=production

# Install app
RUN [ "mkdir", "-p", "/usr/local/app" ]
COPY [ "package.json", "/usr/local/app" ]
COPY [ ".", "/usr/local/app/" ]
WORKDIR /usr/local/app
RUN npm install

# Expose ports
EXPOSE 8080

# Start application
CMD [ "npm", "start" ]
