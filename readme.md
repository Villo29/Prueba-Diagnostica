# Flores Villo

Esta es una API RESTful para administrar el catálogo de productos y realizar pedidos en una tienda de flores. La API está construida con Node.js, Express y MongoDB Atlas.

## Requisitos

- Node.js (versión 12 o superior)
- npm (gestor de paquetes de Node)
- MongoDB Atlas (base de datos en la nube)

## Instalación

Sigue los pasos a continuación para levantar los servicios de la API en tu máquina local.

### 1. Clona el repositorio

```bash
https://github.com/Villo29/Prueba-Diagnostica.git
cd Prueba-Diagnostica

2. Instala las dependencias
npm install

3. Configura las variables de entorno
Crea un archivo .env en el directorio raíz del proyecto y añade la URL de conexión a tu base de datos MongoDB Atlas:

MONGO_URI=mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/flower_shop?retryWrites=true&w=majority
PORT=3000

MONGO_URI: Reemplaza <usuario> y <password> con tus credenciales de MongoDB Atlas.
PORT: El puerto en el que correrá tu servidor (por defecto, 3000).

4. Conexión a MongoDB
Este proyecto utiliza MongoDB Atlas como base de datos. Puedes crear una cuenta gratuita y configurar un cluster en MongoDB Atlas. Asegúrate de obtener tu cadena de conexión y añadirla al archivo .env como se indicó anteriormente.

5. Levanta el servidor
npm start

Esto iniciará el servidor en el puerto especificado en el archivo .env. Por defecto, estará disponible en http://localhost:3000.


Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript.
Express: Framework web para Node.js.
MongoDB Atlas: Base de datos NoSQL en la nube.
Mongoose: ORM para interactuar con MongoDB.
Postman: Herramienta para pruebas y documentación de APIs.

Contribuciones
Si deseas contribuir a este proyecto, realiza un fork del repositorio, crea una nueva rama y realiza un pull request.
Con este archivo `README.md`, tus usuarios podrán levantar la API, conectarse a la base de datos y utilizar **Postman** para interactuar con los endpoints que has definido. También proporciona ejemplos claros de cómo realizar solicitudes a la API.