const { Sequelize } = require('sequelize');

// Crear una instancia de Sequelize para SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'src/db/database.sqlite', // Archivo donde se almacenarán los datos
    logging: false, // Desactiva el logging de SQL
});

module.exports = sequelize;
