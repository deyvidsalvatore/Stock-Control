import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req: Request, res: Response, next) => {
  req.user_id = 'user123';
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send(`Hello World! User ID: ${req.user_id}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});