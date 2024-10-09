// app.test.js
const request = require('supertest');
const app = require('../index.js');

describe('Counter API', () => {
  beforeEach(async () => {
    // Setze den Zähler und die Zeitstempel vor jedem Test zurück
    await request(app).post('/counter/reset');
  });

  test('GET /counter should return the initial counter value', async () => {
    const response = await request(app).get('/counter');
    expect(response.status).toBe(200);
    expect(response.body.counter).toBe(0);
  });

  test('POST /counter/increment should increase the counter and add a timestamp', async () => {
    const response = await request(app).post('/counter/increment');
    expect(response.status).toBe(200);
    expect(response.body.counter).toBe(1);
    expect(response.body.timestamps.length).toBe(1);
  });

  test('POST /counter/increment should maintain only the last 5 timestamps', async () => {
    // Führe 6 Inkrementierungen durch, um sicherzustellen, dass mehr als 5 Zeitstempel vorhanden sind
    for (let i = 0; i < 6; i++) {
      await request(app).post('/counter/increment');
    }

    const response = await request(app).get('/counter/timestamps');
    expect(response.status).toBe(200);
    expect(response.body.timestamps.length).toBe(5);
  });

  test('POST /counter/reset should reset the counter and timestamps', async () => {
    // Erhöhe den Zähler und setze ihn dann zurück
    await request(app).post('/counter/increment');
    const resetResponse = await request(app).post('/counter/reset');

    expect(resetResponse.status).toBe(200);
    expect(resetResponse.body.counter).toBe(0);

    const timestampResponse = await request(app).get('/counter/timestamps');
    expect(timestampResponse.body.timestamps.length).toBe(0);
  });
});
