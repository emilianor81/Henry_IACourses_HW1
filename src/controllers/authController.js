const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

/**
 * Registers a new user.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
const register = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Faltan datos' });
    }

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Hashear la contraseña y crear el nuevo usuario
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({ username, password: hashedPassword });

        res.status(201).json({ message: 'Usuario registrado', username: newUser.username });
    } catch (err) {
        res.status(500).json({ message: 'Error en el registro del usuario', error: err.message });
    }
};

/**
 * Logs in a user.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar el usuario en la base de datos
        const user = await User.findOne({ where: { username } });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Crear el token JWT
        const token = jwt.sign({ username: user.username }, 'mysecretkey', { expiresIn: '1h' });
        res.json({ accessToken: token });
    } catch (err) {
        res.status(500).json({ message: 'Error al iniciar sesión', error: err.message });
    }
};

module.exports = { register, login };
