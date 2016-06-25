const User = require('./User')

module.exports = {
  getUser(req, res){
    User.findOne({'user' : req.params.user}, (err, response)=> {
      if(err){
        return res.status(500).json(error)
      } else {
        return res.json(response)
      }
    })
  },
  postUser(req, res){
    User.create(req.body, (err, response)=> {
      if(err) {
        res.status(500).json(err)
      } else {
        res.json(response);
      }
    })
  },
    updateUser(req, res) {
      User.findByIdAndUpdate(req.params.id, req.body, (error, response)=> {
        if(error) {
          return res.status(500).json(error)
        } else {
          return res.json(req.body)
        }
    })
  }
}
