import express from 'express';
import validateUser from '../middleware/validateUser.js';
import User from '../models/User.js';

const router = express.Router();

router.post('/', validateUser, async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

export default router;
