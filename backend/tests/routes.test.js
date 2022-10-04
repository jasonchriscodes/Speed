/**
 * File: routes.tests.js
 * This files tests the api of the application.
 */
const request = require('supertest');
const BASE_URL = 'http://localhost:8888/api/articles';

describe('GET Endpoints', () => {
  it('GET Articles Returns Status Code 200', async () => {
    // get the response from the path /all-articles
    const response = await request(BASE_URL).get('/all-articles');

    // check the response code of the response
    expect(response.statusCode).toEqual(200); // the response code should be 200
    expect(response.statusCode).not.toEqual(404); // the response code should not be 404
  });
});
