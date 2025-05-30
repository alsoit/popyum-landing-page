# 🚀 GitHub Actions Pipeline Overview

## Separated Pipeline Architecture

The project uses **two independent GitHub Actions workflows** for better separation of concerns:

### 📋 **Validation Pipeline** (`validate.yml`)
```
┌─────────────────┐
│   Pull Request  │
│   to main       │
└─────────┬───────┘
          │
    ┌─────▼─────┐
    │🔍 Code     │ ← ESLint, TypeScript, Formatting
    │ Quality    │
    └─────┬─────┘
          │
    ┌─────▼─────┐
    │🏗️ Build    │ ← Test Next.js Build, Verify Output
    │ Test       │
    └─────┬─────┘
          │
    ┌─────▼─────┐
    │🔒 Security │ ← npm audit, Dependency Check
    │ Check      │
    └───────────┘
```

### 🚀 **Deployment Pipeline** (`deploy.yml`)
```
┌─────────────────┐
│  Push to main   │
│    branch       │
└─────────┬───────┘
          │
    ┌─────▼─────┐
    │🚀 Build &  │ ← Build + Deploy to Azure
    │  Deploy    │
    └───────────┘

┌─────────────────┐
│   PR Closed     │ ← Independent trigger
└─────────┬───────┘
          │
    ┌─────▼─────┐
    │🧹 Cleanup  │ ← Remove preview deployments
    │ Preview    │
    └───────────┘
```

## Workflow Triggers & Conditions

| Event | Validation Pipeline | Deployment Pipeline |
|-------|-------------------|-------------------|
| **PR to main** (open/update) | ✅ **Runs Full Validation** | ❌ No deployment |
| **Push to main** | ❌ No validation needed | ✅ **Deploy to Production** |
| **Push to feature branch** | ❌ No triggers | ❌ No triggers |
| **PR closed** | ❌ No validation | ✅ **Cleanup previews** |

## Job Dependencies & Flow

### **Validation Pipeline Jobs**
```
Code Quality & Validation
         ↓
    Build Test
         ↓
Security & Dependency Check
```
- **Sequential execution** for efficient resource usage
- **Fail-fast approach** - stops on first failure
- **No deployment** - validation only

### **Deployment Pipeline Jobs**
```
Build & Deploy to Azure
         +
Close PR Deployment (independent)
```
- **Independent jobs** running as needed
- **Production deployment** only on main branch
- **Automatic cleanup** when PRs are closed

## Key Features

### 🔍 **Code Quality Gates**
- **ESLint validation** with configurable rules
- **TypeScript compilation** checking
- **Prettier formatting** (optional, continues on error)
- **Zero-tolerance policy** for quality issues

### 🏗️ **Build Verification**
- **Next.js static export** testing
- **Output directory validation** (`out/` folder)
- **Build artifact inspection**
- **Size and structure reporting**

### 🔒 **Security & Dependencies**
- **npm audit** for vulnerability scanning
- **Dependency freshness** checking
- **High-severity issue** detection
- **Continuous monitoring** of package health

### 🚀 **Deployment Automation**
- **Azure Static Web Apps** integration
- **Automatic production deployment** on main merges
- **Preview environment cleanup**
- **Build artifact optimization**

## Configuration Details

### **Environment Variables**
```yaml
NODE_VERSION: '20'                    # Node.js LTS version
NEXT_TELEMETRY_DISABLED: 1           # Disable Next.js telemetry
```

### **Build Configuration**
```yaml
# Deployment Pipeline
app_location: "/"                     # Repository root
api_location: ""                      # No API functions
output_location: "out"                # Static export directory
app_build_command: "npm run build"    # Build command
skip_app_build: false                 # Let Azure handle build
```

### **Caching Strategy**
- **Node.js dependencies** cached with `actions/setup-node@v4`
- **npm cache** automatically managed
- **Build artifacts** preserved for deployment

## Security & Secrets

| Secret | Required For | Auto-Provided |
|--------|-------------|---------------|
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | Azure deployment | ❌ **Manual setup required** |
| `GITHUB_TOKEN` | Repository operations | ✅ **Automatic** |

## Quick Commands for Local Development

```bash
# 🔍 Code Quality (matches validation pipeline)
npm run lint                  # ESLint checking
npm run lint:fix             # Auto-fix issues
npx tsc --noEmit            # TypeScript validation

# 🏗️ Build Testing (matches build test)
npm run build               # Test production build
ls -la out/                 # Verify static export
du -sh out/                 # Check build size

# 🔒 Security Checking (matches security job)
npm audit                   # Security audit
npm audit --fix            # Fix auto-fixable issues
npm outdated                # Check outdated packages

# 🚀 Local Development
npm run dev                 # Development server
npm start                   # Production preview
```

## Monitoring & Debugging

### **GitHub Actions Monitoring**
- **Real-time logs** in repository Actions tab
- **Job status indicators** with detailed error reporting
- **Artifact downloads** for build debugging
- **Re-run capabilities** for failed workflows

### **Azure Static Web Apps Monitoring**
- **Deployment history** in Azure Portal
- **Build logs** and error diagnostics
- **Live site metrics** and performance data
- **Custom domain** and SSL configuration

## Development Workflow Best Practices

### **1. Feature Development**
```bash
# Work on feature branches (no pipeline triggers)
git checkout -b feature/new-feature
# Make changes, commit locally, push when ready
```

### **2. Quality Assurance**
```bash
# Test locally before creating PR
npm run lint && npm run build && npx tsc --noEmit
```

### **3. Pull Request Process**
- Create PR → **Validation pipeline runs automatically**
- Review code + pipeline results
- Merge after validation passes

### **4. Production Deployment**
- Merge to main → **Deployment pipeline runs automatically**
- Monitor deployment in GitHub Actions + Azure Portal
- Verify live site functionality

## Troubleshooting Common Issues

### **Validation Failures**
```bash
# ESLint errors
npm run lint:fix              # Auto-fix formatting
npm run lint -- --fix         # More aggressive fixing

# TypeScript errors  
npx tsc --noEmit              # Check specific errors
npm run build                 # Test full compilation
```

### **Build Test Failures**
```bash
# Check Next.js configuration
cat next.config.ts            # Verify export settings
npm run build                 # Test build locally
ls -la out/                   # Check output generation
```

### **Deployment Failures**
- Verify Azure token in GitHub secrets
- Check Azure Static Web App configuration
- Ensure `output_location: "out"` in Azure settings
- Monitor Azure deployment logs

---

**🎯 Pipeline Goals**: 
- **Quality First** - No broken code reaches production
- **Fast Feedback** - Quick validation on every PR  
- **Reliable Deployment** - Automated, consistent releases
- **Zero Downtime** - Seamless production updates  