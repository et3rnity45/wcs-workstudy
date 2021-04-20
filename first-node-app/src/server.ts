import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import cors from 'cors';
import routes from './routes';

const app = express();
const PORT = 5000;

// Database connection
require('./models');

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Handling HTTP errors
interface MongoError extends Error {
  code: number;
}

function isMongoError(error: Error): error is MongoError {
  return error.name === 'MongoError';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: Error, req: Request, res: Response, _next: NextFunction) => {
  if (isMongoError(error)) {
    switch (error.code) {
      case 11000:
        res.status(400);
        res.json({ success: false, message: 'The name is already used' });
        break;
      default:
        res.status(400);
        res.json({ success: false, message: 'An error occured' });
    }
  }
});

// Define listening port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
