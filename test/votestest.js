import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.should();
chai.use(chaiHttp);



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

    it('it should not GET a single vote', (done)=>{
        chai.request(app)
            .get('/api/v1/votes/8')
            .end((err, res)=>{
                res.should.have.property('status').eql(400);
                res.body.should.be.a('object');
            done();
            });
    });
});