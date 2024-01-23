# Cine Beat • frontend

![Static Badge](https://img.shields.io/badge/status-finished-success) ![Static Badge](https://img.shields.io/badge/JavaScript-gray?logo=JavaScript) ![Static Badge](https://img.shields.io/badge/CSS-gray?logo=CSS3) ![Static Badge](https://img.shields.io/badge/BEM-gray?logo=BEM) ![Static Badge](https://img.shields.io/badge/React-gray?logo=React) ![Static Badge](https://img.shields.io/badge/React_Router-gray?logo=reactrouter)

Front-end React application for the project **Cine Beat** — service for keeping a personal movie collection of the Beat Film Festival catalogue. The project made at **"WEB-development"** course at [**Yandex.Practicum**](https://practicum.yandex.ru/ 'Yandex.Practicum'). Demo is available here: [cinebeat.semenkatz.com](https://cinebeat.semenkatz.com)

## Features

- landing page with information about the author ant the project;
- user authorization;
- authentication via **JWT** stored safely in httpOnly cookies;
- editing user profile data;
- searching and filtering movies;
- managing bookmarked movies;
- form validation;
- errors handling.

## Project structure and setup

### Directories

```
src
├── components // React components with styles
├── contexts // React contexts
├── images // image assets
├── utils // helper functions and constants
├── vendor // extra libs and fonts
└── ...
```

### Usage

```bash
## Install dependencies (clean install recommended)
npm ci

## Run project in development mode
npm start

## Build project for production
npm run build
```

### Env

API address need to be specified in **.env** file located in root folder.

#### Example of .env file config for develop mode

```text
REACT_APP_API_BASE_URL=http://localhost:3002
```
