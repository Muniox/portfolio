# Etap 1: Wybieramy bazę - lekki serwer Nginx na Alpine Linux
FROM nginx:alpine

# Etap 2: Kopiujemy Twoje pliki do wnętrza obrazu
# Kopiujemy zawartość folderu 'src' do domyślnego katalogu serwowania w Nginx
COPY ./src /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Informujemy Dockera, że kontener nasłuchuje na porcie 80
EXPOSE 80

# Nginx uruchamia się automatycznie, więc nie potrzebujemy CMD