const assert = require('assert');
const Movie = require('../models/Movies');
const Json = require('../json files/Movies.json')


//Describe tests
describe('Saving records', function(){   

    //Create tests
    it('Saves a movie record to the db', function(done){ 
        
        let movie = Json.map(item =>{  
            return( 
                item
            )
        })

        movie.save().then(function(){   
            assert(movie.isNew === false);
            done();
        });

    });


});