# Immense Brains Website

A luxury software development company website built with Next.js and deployed on Azure App Services.

## 🚀 Features

- **Modern Design**: Luxury-themed responsive design
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Beautiful UI components
- **Azure Ready**: Optimized for Azure App Services deployment

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Deployment**: Azure App Services
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/immense-brains-website.git
cd immense-brains-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to Azure App Services

### Prerequisites

1. Azure subscription
2. GitHub repository
3. Azure App Service created

### Setup Instructions

1. **Create Azure App Service**:
   - Go to Azure Portal
   - Create a new App Service
   - Choose Node.js 18 LTS runtime
   - Note down the app name (immensebrains)

2. **Configure GitHub Actions**:
   - Go to your Azure App Service
   - Navigate to Deployment Center
   - Choose GitHub as source
   - Authorize and select your repository
   - Azure will automatically create the workflow file

3. **Add Secrets to GitHub**:
   - Go to your GitHub repository settings
   - Navigate to Secrets and variables > Actions
   - Add `AZURE_WEBAPP_PUBLISH_PROFILE` secret
   - Get the publish profile from Azure App Service > Get publish profile

4. **Update Environment Variables**:
   - Update `AZURE_WEBAPP_NAME` to `immensebrains` in `.github/workflows/azure-deploy.yml`
   - Add any environment variables in Azure App Service configuration

### Manual Deployment

If you prefer manual deployment:

\`\`\`bash
# Build the application
npm run build

# Deploy using Azure CLI
az webapp up --name immensebrains --resource-group your-resource-group
\`\`\`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

\`\`\`env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

For production, set these in Azure App Service configuration.

### Azure App Service Settings

In Azure Portal > App Service > Configuration:

- **General Settings**:
  - Stack: Node
  - Major version: 18
  - Minor version: 18 LTS
  - Startup Command: `npm start`

- **Application Settings**:
  - `NODE_ENV`: `production`
  - `WEBSITE_NODE_DEFAULT_VERSION`: `18.17.0`
  - `SCM_DO_BUILD_DURING_DEPLOYMENT`: `true`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── solutions/        # Solutions page
│   ├── careers/          # Careers pages
│   ├── contact/          # Contact page
│   └── admin/            # Admin dashboard
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   └── footer.tsx        # Footer component
├── public/               # Static assets
├── .github/              # GitHub Actions workflows
├── server.js             # Custom server for Azure
├── web.config            # IIS configuration
└── next.config.mjs       # Next.js configuration
\`\`\`

## 🧪 Testing

\`\`\`bash
# Run linting
npm run lint

# Run type checking
npx tsc --noEmit
\`\`\`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- CSRF protection
- Secure headers configuration
- Environment variable protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 🆘 Support

For support, contact the development team or create an issue in the repository.

---

Built with ❤️ by Immense Brains LLC
