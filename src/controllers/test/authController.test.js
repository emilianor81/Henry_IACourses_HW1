const { register, login } = require('../authController');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../../models/userModel');

jest.mock('bcryptjs');
jest.mock('jsonwebtoken');
jest.mock('../../models/userModel', () => []);  // Mock simple para la lista de usuarios

describe('Auth Controller', () => {

  describe('register', () => {
    it('should register a user with hashed password', () => {
      const req = {
        body: {
          username: 'testuser',
          password: 'testpassword',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      bcrypt.hashSync.mockReturnValue('hashedpassword');

      register(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        username: 'testuser',
        password: 'testpassword',
      });
      expect(users).toContainEqual({
        username: 'testuser',
        password: 'hashedpassword',
      });
    });

    it('should return 400 if username or password is missing', () => {
      const req = {
        body: {
          username: '',
          password: '',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Faltan datos' });
    });
  });

  describe('login', () => {
    it('should login a user and return a JWT token', () => {
      const req = {
        body: {
          username: 'testuser',
          password: 'testpassword',
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      const hashedPassword = bcrypt.hashSync('testpassword', 10);
      users.push({ username: 'testuser', password: hashedPassword });

      bcrypt.compareSync.mockReturnValue(true);
      jwt.sign.mockReturnValue('token');

      login(req, res);

      expect(bcrypt.compareSync).toHaveBeenCalledWith('testpassword', hashedPassword);
      expect(jwt.sign).toHaveBeenCalledWith({ username: 'testuser' }, 'mysecretkey', { expiresIn: '1h' });
      expect(res.json).toHaveBeenCalledWith({ accessToken: 'token' });
    });

    it('should return 401 if credentials are invalid', () => {
      const req = {
        body: {
          username: 'wronguser',
          password: 'wrongpassword',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      bcrypt.compareSync.mockReturnValue(false);

      login(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Credenciales inválidas' });
    });
  });
});
