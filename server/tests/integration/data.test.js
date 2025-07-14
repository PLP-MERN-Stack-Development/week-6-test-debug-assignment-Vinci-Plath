// server/tests/integration/data.test.js
const request = require('supertest');
const app = require('../../src/app');

describe('GET /api/data', () => {
  it('should return a message from the API', async () => {
    const res = await request(app).get('/api/data');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from API' });
  });
}); 