const assert = require('assert');
const Show = require('../models/Shows');

//Describe tests
describe('Saving records', function(){   

    //Create tests

    it('Saves a show record to the db', function(done){ 

        let show = new Show({ 
            title: 'yona show'
        });

        show.save().then(function(){   
            assert(show.isNew === false);
            done();
        });

    });

});