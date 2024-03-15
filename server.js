 import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import departmentRoutes from './routes/departmentRoutes.js';
import employeeRoutes from './routes/employeeroute.js';
import payoutRoutes from './routes/payoutroute.js';
import errorHandler from './middleware/errorHandler.js';

mongoose.connect('mongodb://127.0.0.1:27017/test'), { useNewUrlParser: true, useUnifiedTopology: true };

const app = express();

app.use(bodyParser.json());

app.use('/Department', departmentRoutes);
app.use('/Employee', employeeRoutes);
app.use('/payout', payoutRoutes);

// Use the error handler middleware last
app.use(errorHandler);

app.listen(3000, () => console.log('Server started on port 3000'));
