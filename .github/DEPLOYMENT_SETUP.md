# Azure Static Web Apps Deployment Setup

This document provides step-by-step instructions for setting up your Next.js application deployment to Azure Static Web Apps using GitHub Actions.

## 🚀 Deployment Pipeline Overview

The project uses **two separate GitHub Actions workflows**:

### 📋 **Validation Pipeline** (`validate.yml`)
- **Triggers**: Only on Pull Requests to `main` branch
- **Purpose**: Code quality assurance before merging
- **Jobs**:
  - 🔍 **Code Quality & Validation** - ESLint, TypeScript checking, formatting
  - 🏗️ **Build Test** - Validates the application builds successfully
  - 🔒 **Security & Dependency Check** - npm audit and outdated package detection

### 🚀 **Deployment Pipeline** (`deploy.yml`)
- **Triggers**: Only on pushes/merges to `main` branch
- **Purpose**: Production deployment to Azure Static Web Apps
- **Jobs**:
  - 🚀 **Build and Deploy** - Compiles and deploys to Azure
  - 🧹 **Close PR Deployment** - Cleans up preview deployments when PRs are closed

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
     --output-location "out"
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
     - **Branch**: `main`
     - **Build Presets**: `Next.js`
     - **App location**: `/`
     - **Output location**: `out`

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
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Azure Static Web Apps
  output: 'export',
  
  // Add trailing slash to URLs for better static hosting compatibility
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
};

export default nextConfig;
```

### Step 4: Verify Deployment Configuration

The workflows are configured with the following settings:

#### **Validation Pipeline** (`validate.yml`)
- **Triggers**: Pull requests to `main` branch only
- **Node.js version**: 20
- **Jobs**: Code validation → Build test → Security check
- **Purpose**: Ensure code quality before merging

#### **Deployment Pipeline** (`deploy.yml`)
- **Triggers**: Pushes to `main` branch only
- **Node.js version**: 20
- **Build command**: `npm run build`
- **Output directory**: `out`
- **App location**: `/` (root of repository)
- **Purpose**: Deploy validated code to production

## 🔧 Workflow Jobs Breakdown

### Validation Pipeline Jobs

#### 1. Code Quality & Validation
- **Purpose**: Ensure code meets quality standards
- **Steps**:
  - Checkout code with full history
  - Setup Node.js with npm caching
  - Install dependencies with `npm ci`
  - Run ESLint for code quality
  - TypeScript type checking
  - Prettier formatting check (if configured)

#### 2. Build Test
- **Purpose**: Verify the application builds successfully
- **Dependencies**: Runs after validation passes
- **Steps**:
  - Checkout code
  - Setup Node.js
  - Install dependencies
  - Test build process
  - Verify static export generation

#### 3. Security & Dependency Check
- **Purpose**: Check for security vulnerabilities and outdated packages
- **Steps**:
  - Checkout code
  - Setup Node.js
  - Install dependencies
  - Run `npm audit` for security issues
  - Check for outdated packages

### Deployment Pipeline Jobs

#### 1. Build and Deploy
- **Purpose**: Deploy to Azure Static Web Apps
- **Conditions**: Only runs on `main` branch pushes
- **Steps**:
  - Checkout code
  - Setup Node.js
  - Install dependencies
  - Build for production
  - Deploy to Azure Static Web Apps using official action

#### 2. Close PR Deployment
- **Purpose**: Clean up preview deployments
- **Conditions**: Only runs when pull requests are closed
- **Steps**:
  - Close the associated preview deployment in Azure

## 🎯 Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

### 2. Create Pull Request
- Create PR from feature branch to `main`
- **Validation pipeline automatically runs**:
  - Code quality checks
  - Build testing
  - Security audit
- Review and approve PR

### 3. Merge to Production
```bash
# Merge PR to main (via GitHub UI)
# Deployment pipeline automatically runs:
# - Builds the application
# - Deploys to Azure Static Web Apps
```

## 🐛 Troubleshooting

### Common Issues

1. **Validation pipeline fails with ESLint errors**
   ```bash
   # Fix locally before pushing
   npm run lint:fix
   ```

2. **TypeScript compilation errors**
   ```bash
   # Check types locally
   npx tsc --noEmit
   ```

3. **Build test fails**
   ```bash
   # Test build locally
   npm run build
   # Check if 'out' directory is generated
   ls -la out/
   ```

4. **Azure deployment token invalid**
   - Regenerate token in Azure Portal: **Static Web App** → **Manage deployment token**
   - Update GitHub secret: **Settings** → **Secrets and variables** → **Actions**

5. **Deployment fails with output location error**
   - Ensure Azure Static Web App is configured with `output_location: "out"`
   - Verify `next.config.ts` has `output: 'export'`

### Useful Commands

```bash
# Local development and testing
npm run dev                 # Start development server
npm run build              # Test production build
npm run lint               # Check code quality
npm run lint:fix           # Auto-fix linting issues
npx tsc --noEmit          # TypeScript type checking

# Debugging build output
ls -la out/               # Check static export files
du -sh out/               # Check build size
```

## 🔄 Pipeline Monitoring

### GitHub Actions
- Navigate to your repository → **Actions** tab
- Monitor workflow runs in real-time
- Check individual job logs for debugging

### Azure Static Web Apps
- Go to Azure Portal → Your Static Web App
- Monitor deployments in **Functions** → **Deployment**
- View live site metrics and logs

## 📚 Additional Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**✅ Success Criteria**: 
- Validation pipeline passes on all PRs
- Deployment pipeline successfully deploys to Azure on main branch merges
- Live site is accessible and functional
- No security vulnerabilities in dependencies 