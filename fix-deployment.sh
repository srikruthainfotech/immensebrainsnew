#!/bin/bash

echo "Fixing deployment issues..."

# Remove any conflicting lock files
rm -f package-lock.json yarn.lock bun.lockb

# Clean node_modules if it exists
rm -rf node_modules

# Install dependencies with pnpm
echo "Installing dependencies with pnpm..."
pnpm install

# Build the project
echo "Building the project..."
pnpm build

echo "Deployment fix complete!"
echo "You can now commit and push these changes."
