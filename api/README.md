# Backend Architecture Nodejs

| Statements                  | Branches                | Functions                 | Lines                |
| --------------------------- | ----------------------- | ------------------------- | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-86.39%25-yellow.svg) | ![Branches](https://img.shields.io/badge/Coverage-90.32%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-77.27%25-red.svg) | ![Lines](https://img.shields.io/badge/Coverage-86.39%25-yellow.svg)    |

## The folder structure π’

```structure
ββββsrc
β       app.ts          # App entry point
β   ββββapi             # Express route controllers and middleware for all the endpoints of the app
β   ββββconfig          # Environment variables and configuration related stuff
β   ββββhandlers        # Handlers
β   ββββhelpers         # Helper methods
β   ββββinterfaces      # interfaces
β   ββββjobs            # jobs
β   ββββloaders         # Split the startup process into modules
β   ββββmodels          # data access layer
β   ββββservices        # All the business logic is here
ββββ.editorconfig       # Editorconfig setup
ββββ.env                # Environment variables
ββββ.eslintignore       # To ignore some folder
ββββ.eslintrc           # Eslint setup
ββββ.huskyrc.json       # Husky setup
ββββ.lintstagedrc.json  # lint-staged setup
ββββ.nvmrc              # Version nodejs
ββββ.prettierrc         # Prettier setup
ββββ.jest.config.ts     # Jest setup
ββββtsconfig.json       # TypeScript setup
ββββwebpack.config.ts   # Webpack setup
```

### Layer architecture

![layer architecture](https://user-images.githubusercontent.com/50475272/107291078-9759fc80-6a35-11eb-8c7a-c0ca3e9c71ac.png)

#### Raise the server, being at the root of the project

`npm run dev` for a development environment

`npm run build` prepare the project for a production environment

`npm start` for a production environment
