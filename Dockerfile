FROM grahamdumpleton/mod-wsgi-docker:python-3.5-onbuild
RUN apt-get update && \
  apt-get install -y \
  gcc-avr \
  binutils-avr \
  avr-libc \
  dfu-programmer
RUN chown -R www-data server/qmk && \
  chmod -R 774 server/qmk
USER $MOD_WSGI_USER:$MOD_WSGI_GROUP
CMD [ "server/index.wsgi" ]
