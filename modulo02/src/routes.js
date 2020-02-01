import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Tiago',
    email: 'tiagosilva0922@gmail.com',
    password_hash: '123123124123',
  });

  return res.json(user);
});

export default routes;
