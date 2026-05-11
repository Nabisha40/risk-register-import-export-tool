# Security Policy

## Supported Versions

| Version | Supported |
|----------|------------|
| 1.0.x    | Yes |

---

# Security Measures

This project implements multiple security protections to ensure secure backend and frontend communication.

## Authentication
- JWT-based authentication
- Protected API endpoints
- Stateless session management

## Authorization
- Role-based access support
- Protected resources require authentication

## Password Security
- BCrypt password hashing
- Secure credential handling

## API Security
- Spring Security integration
- CORS protection configured
- Request validation enabled

## Data Protection
- Sensitive credentials excluded from GitHub
- Environment variables used for secrets
- Secure configuration management

## Validation
- Request body validation using Jakarta Validation
- Invalid requests blocked before processing

## Database Security
- H2 database isolation
- Flyway migration support

## Best Practices Followed
- No hardcoded secrets
- Layered architecture
- DTO-based request/response handling
- Exception-safe API responses

---

# Reporting Security Issues

If a security vulnerability is discovered, report it privately to the project maintainer.