const mongoose = require('mongoose');

// returns promise
mongoose.connect(`mongodb+srv://todolist:todolist@cluster0.khshd.mongodb.net/todo?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
 
})
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));