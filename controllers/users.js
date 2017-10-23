const knex = require('../db/knex.js');

module.exports = {
  login: function(req, res){
    res.render('users_login', {message: req.session.message});
  },
  register: function(req, res){
    knex('users')
      .insert(req.body)
      .then(()=>{
          req.session.message = 'You have successfully registered';
          res.redirect('/users/login');
          console.log('test');
      })
      .catch(()=>{
        req.session.message ="You entered invalid user/pasword";
        res.redirect('/user/login');
      })
  },

  check: function(req, res){
    knex('users')
    .where('username', req.body.username)
    .then((result)=>{
      let user = result[0];
      if(user.password === req.body.password){
        req.session.user = user.id;
        res.redirect('/');
        console.log('ok');
      }
    })
    .catch((err)=>{
      req.session.message = ' Wrong user/password';
      res.redirect('/user/login')
    })
  }
}
