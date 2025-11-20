# BlocoManager Environment Strategy

This document outlines the three-tier environment strategy for BlocoManager deployment and development workflow.

## 🏗️ Environment Overview

### **Development (dev)**
- **Location**: Local machine only
- **Access**: `http://localhost:5173`
- **Purpose**: Active development and immediate testing
- **Trigger**: `npm run dev`
- **Base Path**: `/` (root)

### **Quality Assurance (qa)**
- **Location**: Netlify 
- **Access**: Dynamic URLs per PR (e.g., `https://deploy-preview-1--blocomanager-qa.netlify.app`)
- **Purpose**: Feature testing and staging before production
- **Triggers**: 
  - Pull requests to `main` branch (created, updated, or new commits pushed)
- **Base Path**: `/` (root)
- **Environment**: `qa-environment`
- **Branch Aliases**: Each branch gets its own deployment URL

### **Production (prod)**
- **Location**: GitHub Pages
- **Access**: `https://gerryatsxf.github.io/blocomanagersite/`
- **Purpose**: Live production site
- **Trigger**: Push/merge to `main` branch only
- **Base Path**: `/blocomanagersite/`
- **Environment**: `production`

## 🔄 Development Workflow

1. **Feature Development**: Work on `qa-env` or feature branches
2. **QA Testing**: Push to `qa-env` triggers automatic deployment for testing
3. **Production Release**: Merge to `main` triggers production deployment

## 🛡️ Environment Isolation

- **Separate GitHub Environments**: QA and Production use different environment configurations
- **Branch Protection**: Production only deploys from `main` branch
- **Workflow Separation**: Prevents accidental production deployments during development
- **Debian Containers**: Both QA and Production use consistent Debian-based build environments

## 📝 Configuration

- **Vite Config**: Environment-aware base path configuration
- **GitHub Actions**: Separate workflows for each environment
- **DNS**: Custom domain configuration planned for production environment

This strategy ensures safe development practices while maintaining reliable deployments across all environments.