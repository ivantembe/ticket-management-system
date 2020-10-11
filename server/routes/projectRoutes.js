import express from 'express';
import projectController from '../controllers/projectController';

const router = express.Router();

router.post('/new', projectController.createProject);
router.get('/:userId', projectController.getProjectsByUserId);

module.exports = router;
