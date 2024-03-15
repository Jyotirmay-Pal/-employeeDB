import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  duties: { type: String },
  startDate: { type: Date, required: true },
  deptHead: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
});

export default mongoose.model('Department', DepartmentSchema);
