import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  joiningDate: { type: Date, required: true },
  leavingDate: { type: Date },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  designation: { type: String, required: true }
});

export default mongoose.model('Employee', EmployeeSchema);
