# QMK-Configurator
generic configurator for QMK intended to support via GUI all that QMK is capable of

http://xahlee.info/comp/unicode_computing_symbols.html

## Running the Application
- Install Docker https://www.docker.com/products/overview
- In the root directory run
```
docker build -t qmk .
docker run -it --rm -p 8000:80 -e PORT=80 --name my-running-app qmk
```
- Navigate to http://localhost:8000 in your web browser

If you start to get “No space left on device” error, run the following commands to remove unused images/containers.
```
docker rm $(docker ps -q -f 'status=exited')
docker rmi $(docker images -q -f "dangling=true")
```

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


## TODO

### Web Flash

- [ ] port dfu-programmer to web assembly
- [ ] implement chrome usb api

https://developer.chrome.com/apps/usb
http://www.atmel.com/Images/doc7618.pdf
https://github.com/evangs/chrome_tab_garbage_collector/tree/master/src


https://github.com/dfu-programmer/dfu-programmer/tree/master/src
https://developers.google.com/web/updates/2018/03/emscripting-a-c-library

### UI

- [ ] Media queries
- [ ] Icon sets, SEO and Open Graph

### Desktop

- [ ] Flash function for desktop
