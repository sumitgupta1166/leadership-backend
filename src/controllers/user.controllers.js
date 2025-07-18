import User from '../models/user.models.js';
import ClaimHistory from '../models/claimHistory.models.js';

export const getUsers = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

export const createUser = async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.json(user);
};

export const claimPoints = async (req, res) => {
  const userId = req.params.id;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.totalPoints += points;
  await user.save();

  await new ClaimHistory({ userId, points }).save();

  const updatedUsers = await User.find().sort({ totalPoints: -1 });
  res.json({ user, updatedUsers });
};
