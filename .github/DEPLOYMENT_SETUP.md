# Azure Static Web Apps Deployment Setup

This document provides step-by-step instructions for setting up your Next.js application deployment to Azure Static Web Apps using GitHub Actions.

## 🚀 Deployment Pipeline Overview

The GitHub Actions workflow includes:

1. **🔍 Code Validation** - ESLint, TypeScript checking, and optional formatting checks
2. **🏗️ Build Application** - Compiles Next.js app and uploads build artifacts
3. **🚀 Deploy to Azure** - Deploys to Azure Static Web Apps (main/master branch only)
4. **🧹 Close PR Deployment** - Cleans up preview deployments when PRs are closed

## 📋 Prerequisites

Before setting up the deployment, ensure you have:

- [x] An Azure account with an active subscription
- [x] A GitHub repository with your Next.js application
- [x] Admin access to both your Azure subscription and GitHub repository

## 🛠️ Setup Instructions

### Step 1: Create Azure Static Web App

1. **Navigate to Azure Portal**
   - Go to [portal.azure.com](https://portal.azure.com)
   - Sign in with your Azure account

2. **Create a new Static Web App**
   ```bash
   # Using Azure CLI (optional)
   az login
   az staticwebapp create \
     --name "popyum-landing-page" \
     --resource-group "your-resource-group" \
     --source "https://github.com/yourusername/popyum-landing-page" \
     --location "East US 2" \
     --branch "main" \
     --app-location "/" \
     --output-location ".next"
   ```

3. **Or use the Azure Portal**
   - Search for "Static Web Apps" in the Azure portal
   - Click "Create"
   - Fill in the details:
     - **Subscription**: Your Azure subscription
     - **Resource Group**: Create new or use existing
     - **Name**: `popyum-landing-page`
     - **Plan type**: Free (for development) or Standard (for production)
     - **Region**: Choose closest to your users
   - In the deployment details:
     - **Source**: GitHub
     - **Organization**: Your GitHub username/organization
     - **Repository**: `popyum-landing-page`
     - **Branch**: `main` (or `master`)
     - **Build Presets**: `Next.js`
     - **App location**: `/`
     - **Output location**: `.next`

### Step 2: Configure GitHub Repository Secret

1. **Get the deployment token**
   - After creating the Static Web App, go to the resource in Azure Portal
   - Navigate to "Overview" → "Manage deployment token"
   - Copy the deployment token

2. **Add secret to GitHub**
   - Go to your GitHub repository
   - Navigate to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: Paste the deployment token from Azure
   - Click **Add secret**

### Step 3: Configure Next.js for Static Export

Update your `next.config.ts` to ensure proper static export:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Step 4: Verify Deployment Configuration

The workflow is configured with the following settings:

- **Triggers**: 
  - Push to `main`/`master` branches
  - Pull requests (for preview deployments)
- **Node.js version**: 20
- **Build command**: `npm run build`
- **Output directory**: `.next`
- **App location**: `/` (root of repository)

## 🔧 Workflow Jobs Breakdown

### 1. Validate Job
- **Purpose**: Code quality checks before deployment
- **Steps**:
  - Checkout code
  - Setup Node.js with caching
  - Install dependencies
  - Run ESLint
  - TypeScript type checking
  - Prettier formatting check (if configured)

### 2. Build Job
- **Purpose**: Compile and validate the application
- **Dependencies**: Runs after `validate` job passes
- **Steps**:
  - Checkout code
  - Setup Node.js
  - Install dependencies
  - Build Next.js application
  - Upload build artifacts for debugging

### 3. Deploy Job
- **Purpose**: Deploy to Azure Static Web Apps
- **Dependencies**: Runs after both `validate` and `build` jobs pass
- **Conditions**: Only runs on pushes to main/master branch
- **Steps**:
  - Checkout code
  - Setup Node.js
  - Install dependencies
  - Build for production
  - Deploy to Azure Static Web Apps

### 4. Close PR Job
- **Purpose**: Clean up preview deployments
- **Conditions**: Only runs when pull requests are closed
- **Steps**:
  - Close the associated preview deployment

## 🎯 Testing the Pipeline

1. **Commit and push changes**
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment pipeline"
   git push origin main
   ```

2. **Monitor the deployment**
   - Go to your GitHub repository
   - Navigate to **Actions** tab
   - Watch the workflow execution
   - Check each job's logs for any issues

3. **Verify deployment**
   - Once complete, visit your Azure Static Web App URL
   - Your site should be live and accessible

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with TypeScript errors**
   - Run `npm run lint` locally to fix issues
   - Check `tsconfig.json` configuration

2. **Azure deployment token invalid**
   - Regenerate the token in Azure Portal
   - Update the GitHub secret

3. **Next.js build issues**
   - Ensure `next.config.ts` is properly configured for static export
   - Check for dynamic imports or server-side features that need adjustment

4. **Preview deployments not working**
   - Verify the workflow triggers include pull requests
   - Check that the Azure Static Web App supports staging environments

### Useful Commands

```bash
# Test build locally
npm run build

# Test linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npx tsc --noEmit
```

## 🔄 Updating the Pipeline

To modify the deployment pipeline:

1. Edit `.github/workflows/deploy.yml`
2. Test changes on a feature branch first
3. Use pull requests to review changes
4. Monitor deployments after merging

## 📚 Additional Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Next.js Static Export Documentation](https://nextjs.org/docs/advanced-features/static-html-export)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Note**: This setup provides a production-ready CI/CD pipeline with proper validation, building, and deployment steps. The pipeline will automatically deploy your site whenever you push to the main branch, and create preview deployments for pull requests. 