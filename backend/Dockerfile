# Use the latest Node.js base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire project to the container
COPY . .

# Expose the port on which your Nest.js app listens
EXPOSE 3000

# Start the Nest.js app
CMD ["npm", "run", "start:prod"]
