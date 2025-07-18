import express from 'express';
import { getUsers, createUser, claimPoints } from '../controllers/user.controllers.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/claim/:id', claimPoints);

export default router;
