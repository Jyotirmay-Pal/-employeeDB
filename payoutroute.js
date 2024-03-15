import mongoose from 'mongoose';
import fs from 'fs';
import csv from 'csv-parser';


const PayoutSchema = new mongoose.Schema({
  payoutDate: { type: Date, required: true },
  fixedAmount: { type: Number, required: true },
  variableAmount: { type: Number },
  deductions: { type: Number },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true }
});


// ...

router.post('/upload', async (req, res) => {
  fs.createReadStream('path_to_your_file.csv')
    .pipe(csv())
    .on('data', async (row) => {
      // ...
    })
    .on('end', () => {
      res.send('CSV file successfully processed');
    });
});

export default mongoose.model('Payout', PayoutSchema);
