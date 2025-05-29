# Project Context for Claude

## Site Name: franGPT

## Key Concepts
- Interactive AI-powered portfolio site
- Users can chat with the site to modify it in real-time
- Target audience: developers, investors, customers
- Goal: Blow people away with something beyond normal

## Features to Implement
- Chat interface that controls the website itself
- Dynamic backgrounds and styling via chat commands
- Interactive CV/resume that users can query
- LLM integration via OpenAI-compatible APIs

## User Preferences
- Has access to plenty of LLM inference
- Wants to push boundaries ("wild shit")
- No traditional demos, but creative AI interactions

## Tech Stack
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS + Framer Motion
- Deployment: Netlify
- Testing: Jest + Playwright
- LLM: kluster.ai (OpenAI-compatible)

## LLM Integration - MUST USE kluster.ai
- OpenAI-compatible API
- API Key: (stored in .env as api_key)
- Base URL: https://api.kluster.ai/v1

## Development Approach
- Test-driven development
- Screenshot testing for UI iterations
- Continuous deployment via Netlify

## Git Workflow - CRITICAL
1. Initial setup: main branch
2. For EVERY new feature:
   - Create feature branch
   - Develop and test
   - Commit when tests pass
   - Create PR
   - Merge to main
3. This ensures clean history and safe deployment

## Memories
- How to access GitHub: Use SSH keys or personal access token for authentication. Clone repositories using SSH URL (git@github.com:username/repo.git) or HTTPS URL. Always use two-factor authentication for account security.