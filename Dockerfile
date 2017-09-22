FROM grahamdumpleton/mod-wsgi-docker:python-3.5-onbuild
RUN apt-get update
RUN apt-get install -y \
  gcc-avr \
  binutils-avr \
  avr-libc \
  dfu-programmer
RUN chown -R www-data /app/qmk_firmware
RUN chmod -R 774 /app/qmk_firmware
USER $MOD_WSGI_USER:$MOD_WSGI_GROUP
CMD [ "configurator.wsgi" ]
