# Porfolio Backend
Este proyecto es la parte complementaria a [Porfolio](https://github.com/MikeJGT/Porfolio),
aquí encontrarás el mail service que empleo en la sección [contacto](https://porfolio2.onrender.com/contact).

## Dependencias
Este proyecto se ha realizado con las tecnologías [NodeJS](https://nodejs.org/en), [ExpressJS](https://expressjs.com/es/) y [Nodemailer](https://nodemailer.com/).

## Instalación 
Para usar este proyecto necesitas tener instalado NodeJS y Angular.

Puedes descargar la carpeta comprimida desde la pestaña code o darle a fork si ya tienes una cuenta de github.

Crea un fichero .env con las variables de entorno necesarias en la raíz del proyecto.

```
user="your user"
clientId="your clientId"
clientSecret="your clientsecret"
refreshToken="your refreshtoken"
MAIL_USERNAME="your mail"

```
Si necesitas información de como autenticarte con OAuth2, puedes consultar el siguiente enlace [link](https://nodemailer.com/smtp/oauth2/) 

Una vez has creado el .env y tienes el proyecto, abre la carpeta en tu terminal y escribe:

```
npm i 
npm run dev
```

Si todo ha ido bien obtendrás la REST API en localhost:3000.  
Ahora ya puedes incorporar esta ruta en la variable de entorno [MAIL_HOST](https://github.com/MikeJGT/Porfolio/tree/main/src/environments).
