# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Expone el puerto en el que corre la aplicación
EXPOSE 3001

# Define el comando por defecto para iniciar la aplicación
CMD ["npm", "run", "start:dev"]


