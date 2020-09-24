import express from 'express';
import authController from '../controllers/authController';

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
// router.get('/', authController.getAllUsers);

module.exports = router;
