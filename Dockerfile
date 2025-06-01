# Use Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start server
CMD ["npm", "start"]
