import request from 'supertest';

import app from '../../app';

describe('Index router', () => {
  describe('GET /', () => {
    it('should return HTML', done => {
      request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect(200)
        .end(done);
    });
  });
});
