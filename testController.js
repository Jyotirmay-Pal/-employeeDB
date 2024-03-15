export const testPostController = (req,res)=>{
  const {name} = req.body
  res.status(200).send(`Your name is ${name}`);
}
import express from 'express';
import * as employeeController from '../controllers/employeeController.js';

const router = express.Router();

router.post('/', employeeController.createEmployee);
router.put('/:email', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

export default router;
