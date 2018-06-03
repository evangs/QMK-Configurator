# QMK-Configurator
generic configurator for QMK intended to support via GUI all that QMK is capable of

http://xahlee.info/comp/unicode_computing_symbols.html


I’m also seeing “No space left on device” suddenly. My Docker.qcow2 file is 62G. Is there a way to fix this without blowing away every single existing image?

Edit: Actually I was able to free up space and get going again by removing unused images/containers:
docker rm $(docker ps -q -f 'status=exited')
docker rmi $(docker images -q -f "dangling=true")
