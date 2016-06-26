const twiserCtrl = require('./twiserCtrl');

module.exports = app => {
      app.get('/twiser/api/users/:user', twiserCtrl.getUser);
      app.post('/twiser/api/users', twiserCtrl.postUser);
      app.put('/twiser/api/update/:id', twiserCtrl.updateUser);
}
