#!/bin/bash

# Azure App Service startup script
echo "Starting Immense Brains application..."

# Set environment variables
export NODE_ENV=production
export PORT=${PORT:-8080}

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm ci --production=false --legacy-peer-deps
fi

# Build the application if .next doesn't exist
if [ ! -d ".next" ]; then
    echo "Building application..."
    npm run build
fi

# Start the application
echo "Starting Next.js application on port $PORT..."
npm start
