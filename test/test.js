
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.should();
chai.use(chaiHttp);

//Test the route of parties
  
describe('Parties routes test', () => {
    it('it should GET all the parties', (done) => {
      chai.request(app)
          .get('/api/v1/parties')
          .end((err, res) => {
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');  
            done();
          });
    });
    

    it('it should GET a single party', (done)=>{
        chai.request(app)
            .get('/api/v1/parties/1')
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

    it('it should be able to Create a party', (done)=>{
        const party={
            id:1,
            name:"RPF",
            HQAddress:"Rusororo",
            logourl:"images/Audio.jpg",
        };
        chai.request(app)
            .post('/api/v1/parties')
            .send(party)
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

    it('it should be able to Update a party', (done)=>{
        const party={
            id:1,
            name:"RPF",
            HQAddress:"Intare Arena",
            logourl:"images/Audio.jpg",
        };
        chai.request(app)
            .put('/api/v1/parties/1')
            .send(party)
            .end((err, res)=>{
                res.should.have.property('status').eql(201);
                res.body.should.be.a('object');
            done();
            });
    });
    
    
    it('it should be able to Update a name of a party', (done)=>{
        const party={
            id:1,
            name:"RPF",
        };
        chai.request(app)
            .patch('/api/v1/parties/1/RPF')
            .send(party)
            .end((err, res)=>{
                res.should.have.property('status').eql(201);
                res.body.should.be.a('object');
            done();
            });
    });

    it('it should be able to Delete a party', (done)=>{
        chai.request(app)
            .delete('/api/v1/parties/2')
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

});

//Test the route of user


describe('user routes test', () => {
    it('it should GET all the users', (done) => {
      chai.request(app)
          .get('/api/v1/user')
          .end((err, res) => {
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');  
            done();
          });
    });
    

    it('it should GET a single user', (done)=>{
        chai.request(app)
            .get('/api/v1/user/1')
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

    it('it should be able to Create a user', (done)=>{
        const users={
            id:1,
            firstname:"kwizera",
            lastname:"kivin", 
            othername:"keke",
            email:"kiki@getMaxListeners.com",
            phonenumber:"083744783892",
            passporturl:"images/arist.jpg",
            isadmin:false,
        };
        chai.request(app)
            .post('/api/v1/user')
            .send(users)
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

    it('it should be able to Update a user', (done)=>{
        const users={
            id:1,
            firstname:"kwizera" ,
            lastname:"kivin", 
            othername:"keke",
            email:"kiki@getMaxListeners.com",
            phonenumber:"083744783892",
            passporturl:"images/arist.jpg",
            isadmin:false,
        };
        chai.request(app)
            .put('/api/v1/user/1')
            .send(users)
            .end((err, res)=>{
                res.should.have.property('status').eql(201);
                res.body.should.be.a('object');
            done();
            });
    });

    it('it should be able to Delete a user', (done)=>{
        chai.request(app)
            .delete('/api/v1/user/1')
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

});


//Test the route of offices
  
describe('office routes test', () => {
    it('it should GET all the offices', (done) => {
      chai.request(app)
          .get('/api/v1/office')
          .end((err, res) => {
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');  
            done();
          });
    });
    

    it('it should GET a single office', (done)=>{
        chai.request(app)
            .get('/api/v1/office/1')
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

    it('it should be able to Create an office', (done)=>{
        const offices={
            id:1,
            type:"fedelal",
            name:"police",
        };
        chai.request(app)
            .post('/api/v1/office')
            .send(offices)
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

    it('it should be able to Update an office', (done)=>{
        const offices={
            id:1,
            type:"fedelal" ,
            name:"police",
        };
        chai.request(app)
            .put('/api/v1/parties/1')
            .send(offices)
            .end((err, res)=>{
                res.should.have.property('status').eql(201);
                res.body.should.be.a('object');
            done();
            });
    });

    

    it('it should be able to Delete an office', (done)=>{
        chai.request(app)
            .delete('/api/v1/office/1')
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

});



//Test the route of candidates
  
describe('candidates routes test', () => {
    it('it should GET all the candidates', (done) => {
      chai.request(app)
          .get('/api/v1/candidates')
          .end((err, res) => {
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');  
            done();
          });
    });
    

    it('it should GET a single candidate', (done)=>{
        chai.request(app)
            .get('/api/v1/candidates/1')
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

    it('it should be able to Create a candidates', (done)=>{
        const candidates={
            id:1,
        office:1,
        party:1,
        candidate:1,
        };
        chai.request(app)
            .post('/api/v1/office')
            .send(candidates)
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
            
    });


    it('it should be able to Delete a candidate', (done)=>{
        chai.request(app)
            .delete('/api/v1/candidates/1')
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

});


//Test the route of petition
  
describe('petition routes test', () => {
    it('it should GET all the petitions', (done) => {
      chai.request(app)
          .get('/api/v1/petition')
          .end((err, res) => {
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');  
            done();
          });
    });
    

    it('it should GET a single petition', (done)=>{
        chai.request(app)
            .get('/api/v1/petition/1')
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

    it('it should be able to Create a petiton', (done)=>{
        const petitions={
            id:1,
        createdon:1,
        createdby:1,
        office:1,
        body:"i don't agree with final votes",

        };
        chai.request(app)
            .post('/api/v1/petition')
            .send(petitions)
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });


    it('it should be able to Delete a petiton', (done)=>{
        chai.request(app)
            .delete('/api/v1/petition/1')
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });

});

//Test the route of votes
  
describe('votes routes test', () => {
    it('it should GET all the votes', (done) => {
      chai.request(app)
          .get('/api/v1/votes')
          .end((err, res) => {
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');  
            done();
          });
    });
    

    it('it should GET a single vote', (done)=>{
        chai.request(app)
            .get('/api/v1/votes/1')
            .end((err, res)=>{
                res.should.have.property('status').eql(200);
                res.body.should.be.a('object');
            done();
            });
    });
});