FROM node:18-alpine AS builder

# Add curl for healthcheck
RUN apk --no-cache add curl

# Create app directory
WORKDIR /app

# Install dependencies and generate package-lock.json
COPY package.json ./
RUN npm install

# Copy source
COPY . .

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set ownership
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 5000


# Start command
CMD ["npm", "start"]
