const request = require('supertest');
const app = require('../src/app');

describe('MathAPI Taller', () => {
    test('health check responde ok', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('ok');
    });

    test('suma dos numeros correctamente', async () => {
        const res = await request(app).get('/add/3/5');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(8);
    });
});