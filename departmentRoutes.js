const express = require('express');
const router = express.Router();
const Department = require('./Department.js');

// Define your routes here...
// import express from 'express';
// import Department from './Department.js';

const routere = express.Router();

router.post('/', async (req, res) => {
  const department = new Department(req.body);
  await department.save();
  res.status(201).send(department);
});

router.put('/:id', async (req, res) => {
  const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(department);
});

export default router;

module.exports = router;
