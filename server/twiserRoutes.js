const twiserCtrl = require('./twiserCtrl');

module.exports = app => {
      app.get('/api/users/:user', twiserCtrl.getUser);
      app.post('/api/users', twiserCtrl.postUser);
      app.put('/api/update/:id', twiserCtrl.updateUser);
}
