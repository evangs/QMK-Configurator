# QMK-Configurator
Generic configurator for QMK intended to support via GUI all that QMK is capable of.

![image](https://user-images.githubusercontent.com/43552143/128610769-f358c2b4-fa43-44b1-9991-3374303df644.png)


## Running the Application
1. Install Docker: https://www.docker.com/products/overview
2. Clone the repository, and fetch the QMK submodule: 
```
git clone git@github.com:evangs/QMK-Configurator.git
cd QMK-Configurator
git submodule init
git submodule update
```
3. Next, enter the QMK directory and fetch it's submodules:
```
cd qmk_firmware
make git-submodule
cd ..
```
4. Finally, spin up the Docker container to launch the server:
```
docker build -t miniconfig .
docker run -it --rm -p 8000:80 -e PORT=80 --name my-running-app miniconfig
```
5. Navigate to http://localhost:8000 in your web browser

## Additional Information

### Resources
- Keyboard key symbols: http://xahlee.info/comp/unicode_computing_symbols.html

### Troubleshooting
If you start to get “No space left on device” error, run the following commands to remove unused images/containers.
```
docker rm $(docker ps -q -f 'status=exited')
docker rmi $(docker images -q -f "dangling=true")
```

### Contributing
Feel free to make a pull request with any bug fixes, features, or support for new keyboards.
