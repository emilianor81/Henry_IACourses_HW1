# Express API

Este proyecto es una API basada en Node.js con Express que incluye autenticación de usuarios, operaciones matemáticas y almacenamiento de usuarios en una base de datos SQLite.

## Filesystem 


``` 
express-api/
│
├── src/
│   ├── routes/
│   │   ├── index.js        # Rutas principales
│   │   ├── auth.js         # Rutas de autenticación
│   │   ├── operations.js   # Rutas de operaciones matemáticas
│   │
│   ├── middleware/
│   │   ├── auth.js         # Middleware de autenticación
│   │
│   ├── controllers/
│   │   ├── authController.js    # Controlador de autenticación
│   │   ├── operationsController.js  # Controlador de operaciones
│   │
│   ├── models/
│   │   ├── userModel.js     # Modelo de usuario
│   │
│   ├── app.js             # Configuración de la aplicación Express
│
├── tests/                 # Pruebas unitarias
│   ├── auth.test.js
│   ├── operations.test.js
│
├── package.json           # Configuración del proyecto y dependencias
├── Dockerfile             # Configuración Docker
├── docker-compose.yml     # Configuración Docker Compose
└── README.md              # Documentación del proyecto

``` 


## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes en tu máquina:

- **Node.js** (v14 o superior)
- **npm** (se instala automáticamente con Node.js)
- **Git** (opcional, para clonar el repositorio)

## Pasos para Configurar el Proyecto

### 1. Clonar el Repositorio

Si aún no has clonado el repositorio, puedes hacerlo con el siguiente comando:

```bash
git clone <URL-del-repositorio>
```


### 2. Instalar las Dependencias
```
npm install
```

### 3. Configurar la Base de Datos
El proyecto utiliza SQLite como base de datos. Ya está configurado para que funcione sin necesidad de configurar un servidor de base de datos separado.

Si es la primera vez que configuras el proyecto, no necesitas hacer nada adicional para la base de datos, ya que SQLite creará automáticamente el archivo de base de datos en src/db/database.sqlite la primera vez que se ejecute el proyecto.



### 4. Ejecutar el Servidor
Para iniciar el servidor en modo desarrollo, usa el siguiente comando:

bash
Copiar código
npm run start:dev
Esto levantará el servidor en http://localhost:3001 o en el puerto que hayas configurado.


### 5. Ejecutar Pruebas
Para ejecutar las pruebas unitarias:

```
npm test
```

### 6. Uso de Docker (Opcional)
Si prefieres utilizar Docker para ejecutar el proyecto:

##### Construir la imagen:

```
docker build -t express-api .
```


##### Ejecutar el contenedor:

```
docker run -p 3001:3001 express-api
```



### 7. Acceso a la Base de Datos (Opcional)

La base de datos SQLite se guarda en el archivo `src/db/database.sqlite`. Para explorar y manipular la base de datos, puedes usar herramientas como:

- **[TablePlus](https://tableplus.com/)**: Herramienta de gestión de bases de datos con una interfaz amigable.
- **[DB Browser for SQLite](https://sqlitebrowser.org/)**: Aplicación ligera para explorar bases de datos SQLite.

#### Pasos para abrir la base de datos en TablePlus:

1. Abre TablePlus.
2. Crea una nueva conexión de tipo `SQLite`.
3. Selecciona el archivo `src/db/database.sqlite` como tu base de datos.
4. Conéctate y explora la base de datos.


### 8. Solución de Problemas Comunes

#### Error: `invalid ELF header` al usar Docker
Este error ocurre si `node_modules` fue instalado en un sistema operativo diferente antes de construir la imagen Docker. Solución:

1. Elimina la carpeta `node_modules` y `package-lock.json`.
2. Ejecuta `docker-compose build --no-cache` para reconstruir la imagen desde cero.

#### Puerto 3001 ocupado
Si el puerto 3001 ya está en uso, puedes cambiarlo a otro puerto en los archivos `server.js` y `docker-compose.yml`.

#### Base de Datos no Se Carga
Asegúrate de que el archivo `src/db/database.sqlite` existe. Si no, se creará automáticamente la primera vez que inicies la aplicación.

