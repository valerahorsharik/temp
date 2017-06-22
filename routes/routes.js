import express from 'express';
import Auth from '../controllers/auth.js';
const routes = express.Router();
import path from 'path'
let authController = new Auth;

//API routes
routes.post('/api/auth/login', authController.login);




//React future routes

routes.get('/:any?', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
})

// router.get('/:slug',(req, res) => {
//   res.sendFile('/views/index.html')
// })

export default routes;
