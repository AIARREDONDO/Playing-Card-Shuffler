//using mocha, chai and supertest, we can test the 
//get request for index has successfully loaded

var request = require('supertest'),
    app     = require('../app');

describe("homepage", function(){
    it("successfully loads homepage", function(done){
        request(app).get("/")
        .expect(200)
        .expect(/Robots Challenge/, done) 
    })
})