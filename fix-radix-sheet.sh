#!/bin/bash

echo "Fixing @radix-ui/react-sheet dependency issue..."

# Remove any existing lock files and node_modules
rm -f pnpm-lock.yaml package-lock.json yarn.lock bun.lockb
rm -rf node_modules

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Verify the installation
echo "Verifying installation..."
pnpm list @radix-ui/react-dialog

echo "Fix complete! The sheet component now uses @radix-ui/react-dialog as the base."
