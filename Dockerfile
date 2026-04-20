# Etap 1: Wybieramy bazę - lekki serwer Nginx na Alpine Linux
FROM nginx:alpine

# Etap 2: Kopiujemy konfigurację nginx (routing językowy PL/EN + fallback na PL)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Etap 3: Kopiujemy Twoje pliki do wnętrza obrazu
# Kopiujemy zawartość folderu 'src' (assets + /pl + /en) do domyślnego katalogu serwowania w Nginx
COPY ./src /usr/share/nginx/html

# Informujemy Dockera, że kontener nasłuchuje na porcie 80
EXPOSE 80

# Nginx uruchamia się automatycznie, więc nie potrzebujemy CMD
