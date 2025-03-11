var express = require('express');
var router = express.Router();
var { body } = require('express-validator');
var userController = require('../Controller/user.controller');
var authMiddleware = require('../Middleware/auth.middleware');


router.post('/register', [
  body('name').isLength({ min: 4 }).withMessage(' name must be 4 characters long'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
  userController.registerUser
)

router.post('/login', [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
  userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);
router.get('/logout', authMiddleware.authUser, userController.logoutUser);








module.exports = router;
