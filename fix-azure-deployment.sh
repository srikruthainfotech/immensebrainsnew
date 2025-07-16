#!/bin/bash

# Fix Azure deployment script
echo "Fixing Azure App Service deployment..."

# 1. Clean up any existing deployment
az webapp restart --name immensebrains --resource-group immensebrains-rg

# 2. Configure app settings for proper Node.js deployment
az webapp config appsettings set \
  --resource-group immensebrains-rg \
  --name immensebrains \
  --settings \
    NODE_ENV=production \
    WEBSITE_NODE_DEFAULT_VERSION=18.17.0 \
    SCM_DO_BUILD_DURING_DEPLOYMENT=true \
    WEBSITE_RUN_FROM_PACKAGE=1 \
    PORT=8080

# 3. Set the startup command
az webapp config set \
  --resource-group immensebrains-rg \
  --name immensebrains \
  --startup-file "npm start"

# 4. Build and deploy
echo "Building application locally..."
npm ci
npm run build

# 5. Create deployment package
echo "Creating deployment package..."
zip -r deploy.zip . -x "node_modules/*" ".git/*" ".next/cache/*"

# 6. Deploy to Azure
echo "Deploying to Azure..."
az webapp deployment source config-zip \
  --resource-group immensebrains-rg \
  --name immensebrains \
  --src deploy.zip

echo "Deployment complete!"
echo "Your app should be available at: https://immensebrains.azurewebsites.net"
