FROM node:18-alpine

# Set the working directory correctly
WORKDIR /app

# Copy package files first for better caching
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]