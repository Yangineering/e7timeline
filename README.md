# e7timeline

## Description

This is a static html+js website built to show information regarding current and upcoming events and changes to Epic Seven.

## Tools/Frameworks Used

- [Arrow-js](https://www.arrow-js.com/)
- [Tailwind-css](https://tailwindcss.com)
- NodeJs --> [.nvmrc](./.nvmrc)
- Typescript
- Webpack

## Build pipeline
**Buildkite**

Buidlkite Agent is expected to contain:
- MY_DOCKER_LOGIN_PASSWORD
- VERCEL_AUTH_TOKEN
- VERCEL_ORG_ID
- VERCEL_PROJECT_ID

## Deploy
**Vercel**

Vercel automatically deploys to dev environments after pushes in branches
Vercel will automatically deploy a production build on push to main