# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install -f

# Copy the entire project directory to the working directory 
COPY . .

# Expose the port on which the backend application will listen
EXPOSE 3000

# Run the backend application
CMD [ "npm", "run", "dev"]

