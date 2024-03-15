import mongoose from 'mongoose';

const PayoutSchema = new mongoose.Schema({
  payoutDate: { type: Date, required: true },
  fixedAmount: { type: Number, required: true },
  variableAmount: { type: Number },
  deductions: { type: Number },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true }
});

export default mongoose.model('Payout', PayoutSchema);

