# medikapp-test

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._<br>

URL: https://eiteckback.herokuapp.com/

### Pre-requisitos 📋

Nodejs - Dependencias<br>
  ```
    -Express
    -Mysql
    -Body-Parserv
  ```
  <br>
  
  Mysql <br>
  * [Medikapp.sql](https://github.com/angelichazu/medikapp-test/blob/main/Medikapp.sql) - Base de datos utilizada
  
  ### Herramientas para desplegar en la nube 🛠️
  
   * [Mysql en linea](https://clients.cloudclusters.io/) - Base Mysql en linea <br>
   * [Hosting - Heroku](heroku.com) - Hosting de la API
  
  ### Intrucciones de uso 📖
  
  Utilizaremos [Postman](https://www.postman.com/) para probar la API. <br>
  
  METODO GET - URL BASE | Nos permite visualizar todos los metodos disponibles: <br>
  ![Alt text](https://github.com/angelichazu/medikapp-test/blob/main/imagenes/1.png "1")
  
  METODO GET - /listar  | Nos permtie visualizar todos los pacientes <br>
  ![Alt text](https://github.com/angelichazu/medikapp-test/blob/main/imagenes/2.png "2")
  
  METODO GET - /listar/:id  | Nos permtie visualizar un paciente mediante el ID <br>
  ![Alt text](https://github.com/angelichazu/medikapp-test/blob/main/imagenes/6.png "6")
  
  METODO GET - /listarDoc | Nos permite visualizar todos los doctores<br>
  ![Alt text](https://github.com/angelichazu/medikapp-test/blob/main/imagenes/3.png "3")
  
  METODO POST - /agregarDoc | Nos permite agregar un doctor - Utilizar Body para ingresar datos como se muestra en la imagen<br>
  ![Alt text](https://github.com/angelichazu/medikapp-test/blob/main/imagenes/4.png "4")
  
  METODO POST - /agregar | Nos permite agregar un paciente - Utilizar Body para ingresar datos como se muestra en la imagen<br>
  ![Alt text](https://github.com/angelichazu/medikapp-test/blob/main/imagenes/5.png "5")
  
  METODO DELETE - /eliminar/:id  | Nos permtie eliminar un paciente mediante el ID <br>
  ![Alt text](https://github.com/angelichazu/medikapp-test/blob/main/imagenes/7.png "7")
  
  METODO PUT - /modificar/:id | Nos permite modificar un paciente mediante el id - Utilizar Body para ingresar datos como se muestra en la imagen<br>
  ![Alt text](https://github.com/angelichazu/medikapp-test/blob/main/imagenes/8.png "8")
  
  ## FUTURAS MEJORAS 📌
  
  * Organizacion del proyecto - Separacion por archivos.
  * Despligue de una base MYSQL propia.
  * Mayor control de los datos
  
  ## En los commits se puede visualizar como fué el avance de la API 🎁
