import express from 'express';
import 'express-async-errors';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';
import orderRoutes from './routes/orders.routes';
import loginRoutes from './routes/login.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', orderRoutes);
app.use('/login', loginRoutes);

export default app;
