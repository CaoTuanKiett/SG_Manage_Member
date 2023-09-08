# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /www/app/build/

# Install necessary depedencies

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

RUN npm install @babel/core @babel/cli

# Copy the application source code to the container
COPY . .

RUN npm run build-src

# Expose the port on which the application will run (assuming it's 3000)
EXPOSE 3000

# CMD ["node", "build/server.js"]
CMD [ "npm","run", "build" ]

