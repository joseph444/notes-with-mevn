const notesModel = require("../models/notes.model");


module.exports={
    index:(req,res)=>{
        res.json({
            "status":"ok",
            "message":"working"
        })
    },
    //sends all the data of model notes to the frontend
    all:async (req,res)=>{
        const filter={};//filter query
        try {
            const allNotes = await notesModel.find();
            res.json({
                status:"ok",
                data:allNotes,
            });   
        } catch (err) {
            console.log(err);
            res.json({
                status:"err",
                message:err
            })
        }
        
    },

    store:(req,res)=>{
        const note = {
            title: req.body.name,
            body:  req.body.body,
        }
        const Note = new notesModel(note);
        Note.save(function (err,result) { 
            if(err){
                res.json({
                    status:"err",
                    message:err
                });
            }
            else{
                res.json({
                    status:"ok",
                    data:Note
                })
            }
         })
    },

    show:async (req,res) =>{
        const noteID = req.params.postId;
        try{
            const note = await notesModel.findById(noteID);
            res.json({
                status:"ok",
                data:note.toJSON()
            })
        }
        catch(err){
            console.log(err);
            res.json({
                status:"err",
                message:err
            })
        }
       
        
    },

    delete:async (req,res)=>{
        const noteID = req.params.postId;
        try {
            const note =await notesModel.findByIdAndDelete(noteID)

            res.json({
                status:"ok"
            });
        } catch (error) {
            res.json({
                status:"err",
                message:error
            })
        }
    },

    edit: async (req,res)=>{
        const noteID =req.params.postId;
        try {
            const note =  await notesModel.findById(noteID);
            note.title=req.body.name;
            note.body=req.body.body;
            note.update_at=new Date().getTime();
            note.save((err,result)=>{
                if(err){
                    res.json({
                        status:"err",
                        message:err
                    })
                }
                else{
                    res.json({
                        status:"ok",
                    })
                }
            })
        } catch (err) {
            res.json({
                status:"err",
                message:err
            })
        }
    }
}