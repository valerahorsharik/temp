import express from 'express';
import bodyParser from 'body-parser';
import env from 'node-env-file';
import routes from './routes/routes.js';

env('.env');
const app = express();


app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use('/front', express.static(__dirname + '/front/'));
// app.use('/:any',env);
//makes env variables available from any route
app.use('/:any', (req, res, next) => {
  req.env = process.env;
  res.locals.env = process.env;
  next();
})

//setup our routes
app.use('/', routes);



app.listen(3000, () => {
  console.log('we are on 3000');
})
