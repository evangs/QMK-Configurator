FROM node:10.14.2
COPY . /usr/tvk/qmk
RUN apt-get update && \
  apt-get install -y \
  brotli \
  gcc-avr \
  binutils-avr \
  avr-libc \
  dfu-programmer
WORKDIR /usr/tvk/qmk
RUN NODE_ENV=production npm i --silent
EXPOSE 80
CMD [ "npm", "run", "server:start" ]
