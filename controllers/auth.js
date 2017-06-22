import fetch from 'node-fetch'
import FormData from 'form-data'



export default class Auth {

  login(req, res, next){
    let data = {
      email: req.body.email,
      password: req.body.password,
      app_id: req.env.APP_ID,
      code: req.env.CODE
    }
    var form = new FormData();
    form.append('email',data.email);
    form.append('password',data.password);
    form.append('app_id',data.app_id);
    form.append('code',data.code);

    let result = fetch(`${req.env.API_URL}/client/login`,{
      method: "POST",
      body: form
    })
    .then( response => {
      return response.json()
    })
    .then( data => {
      if(data.errors.length > 0){
        res.status(400).json(data.errors);
      }
      res.status(200).json(data.data.user);
    })

  }
}
