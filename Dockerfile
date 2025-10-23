# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker layer caching
COPY package.json package-lock.json ./

# Install dependencies (including dev dependencies for building)
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js application for production
RUN npm run build

# Stage 2: Create a lightweight production image
FROM node:20-alpine AS runner

WORKDIR /app

# Set environment variables for Next.js production mode
ENV NODE_ENV=production

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js listens on (default is 3000)
EXPOSE 3000

# Command to start the Next.js application in production mode
CMD ["npm", "start"]