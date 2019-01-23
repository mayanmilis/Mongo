const mongoose = require('mongoose')

//ES6 Promise
mongoose.Promise = global.Promise

//Connect to the db before tests run-- before hook
before(function(done){  

        //Connect to database
    mongoose.connect('mongodb://localhost/FlowerTV');

    mongoose.connection.once('open', function(){    
    console.log('Connection has been made...')
    done();
    }).on('error', function(){  
    console.log('Connection error:', error)   
    });

})



