# Proyecto Walmart Frontend

Para este proyecto, se tomaron las siguientes consideraciones.

* Se realizo el proyecto pensando que hay una API expuesta para consultar los datos.
* No hay un botón de búsqueda, la búsqueda se realiza automáticamente 350 milisegundos después de ingresar el ultimo carácter
* Solo se despliega el brand, el precio del producto, precio con descuento si corresponde, junto con la imagen.
* No había un diseño especificado, por ende, realice un diseño simple con la ayuda de Gatsby
* El deploy se realiza mediante un push al repositorio y este es automáticamente desplegado por Netlify en la siguiente URL: https://romantic-chandrasekhar-106120.netlify.app/
* Para realizar la búsqueda, se sigue la misma regla que en la API. Se buscan solo con textos de 4 o más caracteres y con búsqueda de id numérico.
* Los test fueron realizados con JEST


# Correr el proyecto en local

Para levantar el frontend se debe correr el comando `docker-compose up web`. Esto dejara el front corriendo en la dirección `http://127.0.0.1:8001/`


# Test

Para realizar test se debe levantar el contenedor con `docker-compose up test`.

# Variables de entorno

Existe 1 variable de entorno en el proyecto.

Variable | Descripción
------------ | -------------
GATSBY_API_URL | Es la URL de la API expuesta para realizar búsquedas
