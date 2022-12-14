import express from 'express';
import 'express-async-errors';
import productsRoutes from './routes/products.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);

export default app;
