FROM node:10
RUN apt-get update
RUN apt-get install -y \
  gcc-avr \
  binutils-avr \
  avr-libc \
  dfu-programmer
WORKDIR /app/qmk-configurator-server
COPY qmk-configurator-server/package.json /app/qmk-configurator-server
RUN npm install
COPY qmk_firmware /app/qmk_firmware
RUN rm -rf /app/qmk_firmware/keyboards/*
RUN chown -R node /app/qmk_firmware
COPY qmk-configurator-server /app/qmk-configurator-server
COPY frontend /app/frontend
CMD ["node", "src/index.js"]
EXPOSE 9000
USER node
