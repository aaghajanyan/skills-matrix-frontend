1. AUTHOR

Instigate Mobile CJSC
E-mail: info@instigatemobile.com
Tel: +1-408-454-6172
     +49-893-8157-1771
     +374-60-445500
www.instigatemobile.com

2. INTRODUCTION

//TODO

3. USAGE

3.1 Dependencies

//TODO

3.2 Configuration

Install serve module - npm install -g serve

Change configs in src/config/env-settings.json config file.

Install the node modules - npm ci

3.3 Run

Run the service in development mode - npm run start

Run the service in production mode - 

npm run build

serve -s build

4. DIRECTORY STRUCTURE

```
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
└── src
    ├── App.jsx
    ├── assets
    │   ├── css
    │   │   ├── Home.css
    │   │   └── Register.css
    │   └── images
    │       └── logo.png
    ├── client
    │   ├── invitations.js
    │   └── users.js
    ├── components
    │   ├── FormInputs.jsx
    │   └── RegisterForm.jsx
    ├── config
    │   ├── config.js
    │   └── env-settings.json
    ├── helpers
    │   └── userDataInputConfigs.js
    ├── index.js
    └── views
        ├── Home.jsx
        └── Register.jsx
```
