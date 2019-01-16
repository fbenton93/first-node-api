const ObjectID = require('mongodb').ObjectID;

module.exports = function (app,db) {
  app.get('/notes/:id', (req,res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) }
    db.collection('notes').findOne(details, (err,result) => {
      if(err) {
        res.send({ error: 'There was an error'});
      } else {
        res.send(result);
      }
    })
  })

  app.delete('/notes/:id', (req,res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details,(err,result) => {
      if(err) {
        res.send({ error: 'There was an error'});
      } else {
        res.send(`Note with ID: ${id} deleted.`)
      }
    })
  })

  app.put('/notes/:id',(req,res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id)};
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').update(details,note, (err,result) => {
      if(err) {
        res.send({ error: 'There was an error'})
      } else {
        res.send(note);
      }
    })
  })




  app.post('/notes', (req,res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insertOne(note, (err,result) => {
      if(err) {
        res.send({error: 'An error has occurred.'});
      } else {
        res.send(result.ops[0]);
      }
    })
  });
};
