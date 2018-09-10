module.exports = function(app,db){
    app.get('/',function(req,res){
        res.send("hello");
    });

    app.post('/ispost',function(req,res){
        console.log(req.body);
        res.send("hello");
    });
    app.post('/notes',function(req,res){
       let note = {
           title : req.body.title,
           body : req.body.body
       }; 
       console.log(db);
        db.collection('notesTable').insert(note,(err,result)=>{
            if(err){
                res.send({'error' : 'error occured'});
            }else{
                res.send({'sucess' : result});
            }
       });
    });

}