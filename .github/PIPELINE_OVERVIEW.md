# 🚀 GitHub Actions Pipeline Overview

## Pipeline Structure

```
┌─────────────────┐
│  Code Push/PR   │
└─────────┬───────┘
          │
    ┌─────▼─────┐
    │ Validate  │ ← ESLint, TypeScript, Formatting
    │    Job    │
    └─────┬─────┘
          │
    ┌─────▼─────┐
    │   Build   │ ← Compile Next.js, Upload Artifacts
    │    Job    │
    └─────┬─────┘
          │
    ┌─────▼─────┐
    │  Deploy   │ ← Azure Static Web Apps (main/master only)
    │    Job    │
    └───────────┘

    ┌─────────────┐
    │  PR Closed  │ ← Clean up preview deployments
    └─────────────┘
```

## Job Dependencies

- **Validate** → **Build** → **Deploy**
- **Close PR** (independent, triggered on PR close)

## Trigger Conditions

| Event | Validate | Build | Deploy | Close PR |
|-------|----------|-------|--------|----------|
| Push to main/master | ✅ | ✅ | ✅ | ❌ |
| Push to feature branch | ✅ | ✅ | ❌ | ❌ |
| Open/Update PR | ✅ | ✅ | 🔄* | ❌ |
| Close PR | ❌ | ❌ | ❌ | ✅ |

*🔄 = Preview deployment (if configured in Azure)

## Key Features

- **🔍 Code Quality Gates**: ESLint and TypeScript validation before deployment
- **🏗️ Parallel Processing**: Independent validation and build stages
- **🚀 Automatic Deployment**: Only deploys validated, successful builds
- **📦 Artifact Caching**: Node.js dependencies cached between runs
- **🔄 Preview Deployments**: Automatic staging environments for PRs
- **🧹 Cleanup**: Automatic removal of PR preview deployments

## Security & Secrets

- `AZURE_STATIC_WEB_APPS_API_TOKEN` - Required for Azure deployment
- `GITHUB_TOKEN` - Automatically provided by GitHub Actions

## Build Configuration

- **Node.js Version**: 20 (LTS)
- **Package Manager**: npm with `npm ci` for reproducible builds
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (configured for static export)
- **App Location**: `/` (repository root)

## Quick Commands

```bash
# Test locally before pushing
npm run lint          # Check code quality
npm run build         # Test build process
npx tsc --noEmit      # Check TypeScript

# Fix common issues
npm run lint:fix      # Auto-fix ESLint issues
```

---
**💡 Tip**: Monitor deployments in the GitHub Actions tab and Azure Static Web Apps portal for real-time status updates. 