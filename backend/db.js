const mongoose = require('mongoose');
 

const connectToMongo = () =>{
    mongoose.set('strictQuery', true);
    mongoose
      .connect('mongodb://localhost:27017/inotebook')
      .then(() => console.log("DB Connection Successfull!"))
      .catch((err) => {
        console.log(err);
      });
}

module.exports = connectToMongo; 


 