import express from 'express';
import Employee from '../models/employeeroute.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).send(employee);
});

router.put('/:email', async (req, res) => {
  const employee = await Employee.findOneAndUpdate({ email: req.params.email }, req.body, { new: true });
  res.send(employee);
});

router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
