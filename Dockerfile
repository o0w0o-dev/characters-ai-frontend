# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json .

# Install any dependencies
RUN npm install

# Install serve
RUN npm i -g serve

# Copy the rest of the application source code from the current directory to the working directory in the container
COPY . .

# Create a production build
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# start the app
CMD [ "serve", "-s", "dist" ]
