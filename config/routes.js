//routes
const company = require("../controllers/company.js")
const member = require("../controllers/member.js")

module.exports = function(app){


  app.get('/', company.index);

  app.get('/company/:id', company.getOne);

  app.post('/company', company.create);

  app.post('/member/:co_id', member.create );

  app.use(function(res, req){

    res.render('.error');
  })
}
