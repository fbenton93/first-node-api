module.exports = function (app,db) {
  app.post('/notes', (req,res) => {
    // create the note here
    // req will contain the parameters for the new note
    console.log(req.body)
    res.send('Completed');
  });
};
