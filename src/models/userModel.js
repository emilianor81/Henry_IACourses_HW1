const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

// Definir el modelo de Usuario
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

// Sincronizar el modelo con la base de datos
sequelize.sync()
    .then(() => console.log('Base de datos y tabla de Usuarios creadas'))
    .catch(err => console.error('Error al sincronizar la base de datos:', err));

module.exports = User;
