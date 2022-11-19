# 22CIS550 Course Project: Forx News

<p align="center"><img src="client/public/github/forxnews.png" alt="forxnews"></p>

## Description

Forx News is a restaurant review website based on Yelp datasets. It aims to help users search restaurants in a simplistic way, and present them with insightful restaurant reviews.

Project Wiki: [https://github.com/ruichen199801/cis550-fa22-project/wiki/Forx-News-Wiki](https://github.com/ruichen199801/cis550-fa22-project/wiki/Forx-News-Wiki)

Deployment on Heroku: [https://forxnews.herokuapp.com](https://forxnews.herokuapp.com/)

## Tech Stack

<img src="https://img.shields.io/badge/-React-000000?style=flat&logo=react&logoColor=00C8FF"> <img src="http://img.shields.io/badge/-Node.js-4DB33D?style=flat&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/-Express.js-eed718?style=flat&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/-MySQL-F29111?style=flat&logo=mysql&logoColor=white"> <img src="http://img.shields.io/badge/-Heroku-430098?style=flat&logo=heroku&logoColor=white">

## Folder Structure

We host our backend codes in the root project folder, and nest frontend codes inside the `client` folder.

```
.
├── client                  # Frontend
│   ├── public              # Static resources, such as icons and images
│   └── src
│       ├── pages           # Main pages of the app
│       ├── components      # Reusable UI components
│       ├── styles          # CSS files
│       ├── hooks           # Custom hooks
│       ├── constants       # Constants
│       ├── utils           # Helper functions
│       ├── App.js
│       ├── index.css
│       └── index.js
├── config                  # Env variables, such as API keys and secrets
├── middlewares             # Custom middleware functions
├── routes                  # Route handlers
├── services                # Third-party services, such as Passport.js
├── database.js             # MySQL connection
├── index.js                # Configures server, middlewares and routes
└── schema.js               # Schema validation rules
```

## Development Guidelines

Make sure you have installed `git`, `node`, `npm` before starting.

### Get Started

1. Clone repo: `git clone git@github.com:ruichen199801/cis550-fa22-project.git`
2. Checkout feature branch: `git checkout -b <feature branch name>`
3. Install backend dependencies: `cd cis550-fa22-project && npm i`
4. Install frontend dependencies: `cd client && npm i`
5. Run frontend and backend concurrently: `cd .. && npm run dev`

### Commit Your Work

1. Sanity check: `git status`, `git branch`
2. Push changes: `git add .`, `git commit -m <commit message>`, `git push`
3. Open pull request and assign code reviewer
4. Merge codes after approval

### Fetch from Remote

1. Stash uncommited changes on your local branch: `git stash`
2. Fetch remote changes into local main: `git checkout main && git pull origin main`
3. Sync your branch with local main: `git checkout <your branch name> && git merge main`
4. Restore changes and continue your work: `git stash pop`

### DO NOT

1. Push to main directly or force merge into main
2. Push untested or bugged codes
3. Use API keys and secrets explicitly in code
4. Include node_modules in commits
5. Overwrite package-lock.json (use `npm ci` instead for subsequent `npm install`)
