const assert = require('assert');
const Movie = require('../models/Content');
const Show = require('../models/Content');

//Describe tests
describe('Saving records', function(){   

    //Create tests
    it('Saves a record to the db', function(done){ 
        
        let movie = new Movie({ 
            title: 'yona'
        });

        movie.save().then(function(){   
            assert(movie.isNew === false);
            
        });

    });

    it('Saves a record 2 to the db', function(done){ 

        let show = new Show({ 
            title: 'yona show'
        });

        show.save().then(function(){   
            assert(show.isNew === false);
            done();
        });

    });

    


});