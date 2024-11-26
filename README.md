# Technical Documentation

[![Deploy to GitHub Pages](https://github.com/uma-hive/docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/uma-hive/docs/actions/workflows/deploy.yml)

Technical documentation is built using [Docusaurus](https://docusaurus.io/).

Live documentation is available at [https://uma-hive.github.io/docs/](https://uma-hive.github.io/docs/).

### Installation

```
npm install
```

### Local Development

```
npm run start
```

This command starts a local development server at [http://localhost:3000/docs](http://localhost:3000/docs).
Most changes are reflected live without having to restart the server.


### Update Documentation

The documentation is written in Markdown. The documentation files are located in the `docs` directory.

### Build and Run production build locally

```
npm run build && npm run serve
```

This command generates static content into the `build` directory and then serves it at [http://localhost:3000/docs](http://localhost:3000/docs).

### Deployment

The deployment is done automatically by GitHub Actions and triggered by pushing to the `main` branch.

The deployment configuration is in `.github/workflows/deploy.yml`.
