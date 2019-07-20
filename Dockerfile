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
RUN NODE_ENV=production npm i \
  express@4.16.4 \
  body-parser@1.18.3 \
  corser@2.0.1 \
  rimraf@2.6.2 \
  shrink-ray-current@3.0.2 \
  --silent
EXPOSE 80
CMD [ "npm", "run", "server:start" ]
