FROM mhart/alpine-node:10.14.2
RUN apt-get update && \
  apt-get install -y \
  gcc-avr \
  binutils-avr \
  avr-libc \
  dfu-programmer
CMD [ "npm", "run", "server:start" ]
