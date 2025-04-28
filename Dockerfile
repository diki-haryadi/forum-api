# Switch from Alpine to a regular slim image for better compatibility
FROM node:18-slim

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

# Set Node options for better debugging and memory management
ENV NODE_OPTIONS="--max-old-space-size=1024 --unhandled-rejections=strict"

# Command to run the application
CMD ["npm", "start"]
