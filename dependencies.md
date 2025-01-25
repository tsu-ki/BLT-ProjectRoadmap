# OWASP-BLT Dependencies

A comprehensive list of dependencies used in the OWASP-BLT project. Users can provide feedback on potential refactoring opportunities.

## Core

### Django
- Description: A Python web framework
- Usage in Code: Routing requests, rendering templates, CSRF protection, authentication (login_required), and ORM for database operations

### python-dotenv
- Description: Loads environment variables from a .env file
- Usage in Code: Used in code to privately configure tokens/credentials without committing secrets to source control

## Authentication

### django-allauth
- Description: Handles user registration and authentication through various OAuth providers
- Usage in Code: Used for integrating with GitHub, Google, and other OAuth providers for user authentication

### dj-rest-auth
- Description: Simplifies creating token-based authentication endpoints for Django REST Framework
- Usage in Code: Provides default routes for login, logout, password reset

## Database

### psycopg2-binary
- Description: PostgreSQL database driver for Python
- Usage in Code: The primary Python <-> PostgreSQL adapter for Django

### dj-database-url
- Description: Parses database URLs from environment variables
- Usage in Code: Used so the project can load databases by a DSN string (e.g., PostgreSQL, MySQL)

## Utils

### Unidecode
- Description: Converts Unicode text to plain ASCII
- Usage in Code: Often used to normalize or slugify non-ASCII text

### user-agents
- Description: Parse user agent strings (browser details, OS, device type)
- Usage in Code: Analyzing request headers to discern client information

### beautifulsoup4
- Description: HTML/XML parser
- Usage in Code: Extracting or parsing HTML markup (e.g., scraping forms or textual content)

## API

### djangorestframework
- Description: REST API framework for Django
- Usage in Code: API views, response handling, token authentication

### requests
- Description: Simplified HTTP client for Python
- Usage in Code: Making external API calls (e.g., GitHub, Slack)

## Frontend

### django-bootstrap-datepicker-plus
- Description: Date picker widget for Django forms using Bootstrap
- Usage in Code: Adds a nicer date/time picker in templates

### Pillow
- Description: Image processing library
- Usage in Code: Creating or modifying images (Image, ImageDraw, ImageFont)

## Testing

### selenium
- Description: Browser automation for testing (Chrome, Firefox, etc.)
- Usage in Code: Allows code to simulate user actions in a real browser

## AI/ML

### langchain
- Description: Ecosystem library for building LLM-powered applications
- Usage in Code: Likely used for chatbots, chain-of-thought workflows, or AI-based text processing

## Dev

### black
- Description: Code formatter enforcing consistent code style
- Usage in Code: Used in development to maintain consistent Python code formatting

## Integrations

### slack_bolt
- Description: Slack application framework
- Usage in Code: Defining Slack slash commands (/discover), responding to actions (pagination buttons), sending direct messages

### stripe
- Description: Payment processing library
- Usage in Code: Facilitates Stripe API calls (billing, charges)

### GitPython
- Description: Interact with local Git repositories
- Usage in Code: Cloning repos, checking out branches, retrieving commit info

## Monitoring

### Sentry
- Description: Error tracking and performance monitoring
- Usage in Code: Capturing application exceptions in production

