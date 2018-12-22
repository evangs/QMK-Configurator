<p align="center"><img height="100" src="public/icons/512x512.png" /></p>

# QMK-Configurator
Generic configurator for QMK intended to support via GUI all that QMK is capable of

## Development Requirements

- [node.js](https://nodejs.org)
- [yarn](https://yarnpkg.com)
- [docker](https://www.docker.com/)

> Use  (node version manager) to install node v10.14.2 `nvm install 10`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run server:dev`

Starts the node server in development mode.<br>
Runs on port `8000`

### `npm run server:start`

Starts the node server in production mode.<br>
Runs on port `80`

### `npm run electron:dev`

Start electron in development mode.

### `npm run electron:pack`

Builds a test package for the platform you are working on.

### `npm run electron:dist`

Builds distribution packages for OSX, Windows and Linux.

### `npm run electron:release`

Release new electron version.

> First you will need to update the version in `package.json` and create a [release](https://github.com/evangs/configurator/releases) with the same version on github.

### `npm run docker:build`

Builds the docker image

### `npm run docker:run`

Runs the docker image

### `npm run docker:clean`

Cleans the local docker server of dangling or stopped images


## TODO

### UI

- [ ] Media queries (higher order component for keyboard scale, info visibility)

### Desktop

- [ ] Test auto-updater
- [ ] Test on linux and windows
