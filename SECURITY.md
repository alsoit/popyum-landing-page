# Security Policy

## 🛡️ Supported Versions

We actively maintain and provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | ✅ Yes             |
| Previous| ❌ No              |

**Note**: As this is a landing page project, we only support the latest deployed version on the main branch.

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability in the Popyum landing page, please report it responsibly:

### 📧 Private Disclosure
- **Email**: [security@popyum.co.uk](mailto:security@popyum.co.uk)
- **Subject**: `[SECURITY] Vulnerability Report - Popyum Landing Page`

### 📋 What to Include
Please provide the following information:
- **Description** of the vulnerability
- **Steps to reproduce** the issue
- **Potential impact** assessment
- **Suggested fix** (if known)
- **Your contact information** for follow-up

### ⏱️ Response Timeline
- **Initial Response**: Within 48 hours
- **Assessment**: Within 5 business days
- **Fix & Deployment**: Within 10 business days (for confirmed vulnerabilities)
- **Public Disclosure**: After fix is deployed (coordinated disclosure)

## 🔒 Security Measures

### Automated Security
- ✅ **Dependabot** - Automatic dependency vulnerability scanning
- ✅ **CodeQL** - Static code analysis for security issues
- ✅ **npm audit** - Package vulnerability checking in CI/CD
- ✅ **Branch Protection** - Required status checks before merge

### Development Security
- ✅ **TypeScript** - Type safety to prevent common errors
- ✅ **ESLint** - Code quality and security linting rules
- ✅ **Secure Deployment** - Azure Static Web Apps with HTTPS
- ✅ **Environment Variables** - Secure secret management

### Regular Maintenance
- 🔄 **Weekly dependency updates** via Dependabot
- 🔄 **Scheduled security scans** every Monday
- 🔄 **Manual security reviews** for major changes

## 🚫 Out of Scope

The following are **not considered security vulnerabilities**:
- Issues in third-party services (Azure, GitHub, etc.)
- Social engineering attacks
- Physical attacks
- Denial of service attacks
- Issues requiring physical access to devices
- Self-XSS requiring user interaction

## 🏆 Recognition

We appreciate security researchers who help keep our project safe:
- **Responsible disclosure** contributors will be acknowledged (with permission)
- **Credit** will be given in release notes for significant findings
- **Contact us** if you'd like recognition for your contribution

## 📚 Security Resources

### Useful Links
- [GitHub Security Advisories](https://github.com/alsoit/popyum-landing-page/security/advisories)
- [Dependabot Alerts](https://github.com/alsoit/popyum-landing-page/security/dependabot)
- [CodeQL Results](https://github.com/alsoit/popyum-landing-page/security/code-scanning)

### Best Practices for Contributors
- Always run `npm audit` before submitting PRs
- Keep dependencies up to date
- Follow secure coding practices
- Report any suspicious dependencies or behavior

## 📞 Contact

For security-related questions or concerns:
- **Security Email**: security@popyum.co.uk
- **General Issues**: [GitHub Issues](https://github.com/alsoit/popyum-landing-page/issues)
- **Project Maintainer**: [@alsoit](https://github.com/alsoit)

---

**Last Updated**: December 2024  
**Next Review**: March 2025 