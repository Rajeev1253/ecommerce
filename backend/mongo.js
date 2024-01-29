const mongoose = require("mongoose");
module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try{
        mongoose.connect("mongodb+srv://3241rajeev:amrit9888@credentials.soyyzvs.mongodb.net/?retryWrites=true&w=majority");
        console.log("connected to database sucessfully")
    }
    catch(error){
        console.log(error);
        console.log("could not connect to database")

    }
}
