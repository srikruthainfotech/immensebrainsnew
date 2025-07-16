#!/bin/bash

# Azure CLI deployment script
# Make sure you're logged in: az login

# Variables
RESOURCE_GROUP="immensebrains-rg"
APP_NAME="immensebrains"
LOCATION="East US"

# Build the application
echo "Building application..."
npm run build

# Create resource group (if it doesn't exist)
az group create --name $RESOURCE_GROUP --location "$LOCATION"

# Create App Service plan (if it doesn't exist)
az appservice plan create \
  --name "${APP_NAME}-plan" \
  --resource-group $RESOURCE_GROUP \
  --sku B1 \
  --is-linux

# Create web app (if it doesn't exist)
az webapp create \
  --resource-group $RESOURCE_GROUP \
  --plan "${APP_NAME}-plan" \
  --name $APP_NAME \
  --runtime "NODE:18-lts"

# Configure app settings
az webapp config appsettings set \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME \
  --settings NODE_ENV=production \
             WEBSITE_NODE_DEFAULT_VERSION=18.17.0 \
             SCM_DO_BUILD_DURING_DEPLOYMENT=true

# Deploy the application
echo "Deploying to Azure..."
az webapp up \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME \
  --runtime "NODE:18-lts"

echo "Deployment complete!"
echo "Your app is available at: https://${APP_NAME}.azurewebsites.net"
