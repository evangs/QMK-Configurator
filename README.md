# QMK-Configurator
generic configurator for QMK intended to support via GUI all that QMK is capable of

http://xahlee.info/comp/unicode_computing_symbols.html

## Running the Application
- Install Docker https://www.docker.com/products/overview
- In the root directory run
```
docker build -t miniconfig .
docker run -it --rm -p 8000:80 -e PORT=80 --name my-running-app miniconfig
```
- Navigate to http://localhost:8000 in your web browser

If you start to get “No space left on device” error, run the following commands to remove unused images/containers.
```
docker rm $(docker ps -q -f 'status=exited')
docker rmi $(docker images -q -f "dangling=true")
```
