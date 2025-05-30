# Popyum Landing Page

A modern, responsive landing page built with **Next.js 15** and **TypeScript**, featuring automated CI/CD deployment to Azure Static Web Apps.

## 🚀 Live Demo

🌐 **Production Site**: https://popyum.co.uk

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Azure Static Web Apps
- **CI/CD**: GitHub Actions

## 📋 Features

- ✅ **Static Export Ready** - Optimized for Azure Static Web Apps
- ✅ **TypeScript Support** - Full type safety and IntelliSense
- ✅ **Modern Styling** - Tailwind CSS with latest features
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Automated CI/CD** - GitHub Actions pipelines
- ✅ **Code Quality** - ESLint, TypeScript validation
- ✅ **Security Scanning** - Automated dependency auditing

## 🔄 CI/CD Pipeline Architecture

This project uses **two separate GitHub Actions workflows** for optimal development experience:

### 📋 **Validation Pipeline** (`validate.yml`)
**Triggers**: Pull Requests to `main` branch
```
🔍 Code Quality → 🏗️ Build Test → 🔒 Security Check
```

### 🚀 **Deployment Pipeline** (`deploy.yml`)  
**Triggers**: Pushes to `main` branch
```
🚀 Build & Deploy → 🧹 Preview Cleanup
```

## 💻 Local Development

### Prerequisites
- **Node.js 20+** (LTS recommended)
- **npm** (comes with Node.js)
- **Git**

### Quick Start

```bash
# Clone the repository
git clone https://github.com/alsoit/popyum-landing-page.git
cd popyum-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Available Scripts

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run build            # Build for production
npm run start            # Start production server (after build)

# Code Quality
npm run lint             # Check code with ESLint
npm run lint:fix         # Auto-fix ESLint issues

# Testing & Validation
npx tsc --noEmit        # TypeScript type checking
npm audit               # Security vulnerability check
npm outdated            # Check for outdated packages
```

## 🎯 Development Workflow

### 1. **Feature Development**
```bash
# Create and switch to feature branch
git checkout -b feature/your-feature-name

# Make changes and test locally
npm run dev                # Test in development
npm run lint              # Check code quality  
npm run build             # Verify production build

# Commit and push
git add .
git commit -m "Add your feature description"
git push origin feature/your-feature-name
```

### 2. **Quality Assurance**
- Create Pull Request to `main` branch
- **Validation Pipeline runs automatically**:
  - ✅ ESLint code quality checks
  - ✅ TypeScript compilation validation
  - ✅ Production build testing
  - ✅ Security and dependency auditing

### 3. **Production Deployment**
- Merge approved PR to `main` branch
- **Deployment Pipeline runs automatically**:
  - ✅ Builds optimized static export
  - ✅ Deploys to Azure Static Web Apps
  - ✅ Updates live production site

## 🔧 Pipeline Configuration

### **Validation Triggers**
- ✅ Pull Request opened/updated targeting `main`
- ❌ No triggers on feature branch pushes (for faster development)
- ❌ No deployment (validation only)

### **Deployment Triggers**  
- ✅ Push/merge to `main` branch
- ❌ No validation needed (already validated in PR)
- ✅ Automatic production deployment

### **Build Settings**
```yaml
# Next.js Configuration
Output: Static export to 'out/' directory
Images: Unoptimized (for static hosting)
Trailing Slash: Enabled for better hosting compatibility

# Azure Static Web Apps
App Location: "/" (repository root)
Output Location: "out" (static export directory) 
Build Command: "npm run build"
Node Version: 20 (LTS)
```

## 📖 Documentation

- 📋 **[Deployment Setup Guide](.github/DEPLOYMENT_SETUP.md)** - Azure configuration and secrets
- 🚀 **[Pipeline Overview](.github/PIPELINE_OVERVIEW.md)** - Detailed workflow documentation

## 🛡️ Security & Maintenance

### **Automated Security**
- **Dependency Scanning**: npm audit on every PR
- **Vulnerability Alerts**: GitHub Dependabot integration  
- **Code Quality**: ESLint rules with security plugins

### **Regular Maintenance**
```bash
# Update dependencies
npm update                # Update to latest compatible versions
npm outdated              # Check for major version updates
npm audit --fix          # Fix known security vulnerabilities
```

## 🐛 Troubleshooting

### **Common Issues**

#### Build Failures
```bash
# Check Next.js configuration
npm run build             # Test build locally
ls -la out/               # Verify static export generation
```

#### Linting Errors
```bash  
npm run lint              # Identify issues
npm run lint:fix          # Auto-fix where possible
```

#### TypeScript Errors
```bash
npx tsc --noEmit         # Check type issues
npm run build            # Test full compilation
```

### **Pipeline Failures**
- **Validation fails**: Fix code quality issues locally before pushing
- **Deployment fails**: Check Azure token in GitHub repository secrets
- **Build issues**: Verify `next.config.ts` static export configuration

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Test locally**: `npm run lint && npm run build`
4. **Commit changes**: `git commit -m 'Add amazing feature'`
5. **Push to branch**: `git push origin feature/amazing-feature`  
6. **Create Pull Request** to `main` branch
7. **Wait for validation pipeline** to pass
8. **Request review** and merge after approval

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 **Issues**: [GitHub Issues](https://github.com/alsoit/popyum-landing-page/issues)
- 📖 **Documentation**: Check the `.github/` folder for detailed guides
- 🚀 **Actions**: Monitor pipelines in the repository Actions tab

---

**Built with ❤️ using Next.js and deployed with Azure Static Web Apps**
