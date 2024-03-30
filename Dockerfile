FROM httpd
COPY . ./usr/local/apache2/htdocs/
Expose 80
