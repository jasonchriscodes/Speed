/**
 * File: routes.tests.js
 * This files tests the api of the application.
 */
const request = require('supertest');
if (process.env.NODE_ENV !== process.env.STAGING) {
  process.env.BASE_URL = process.env.GET_PATH;
}

describe('GET Endpoints', () => {
  console.log('process.env.NODE_ENV : ', process.env.NODE_ENV);
  console.log('process.env.BASE_URL : ', process.env.BASE_URL);
  it('GET Articles Returns Status Code 200', async () => {
    // get the response from the path /all-articles
    const response = await request(process.env.BASE_URL).get('/all-articles');

    // check the response code of the response
    expect(response.statusCode).toEqual(200); // the response code should be 200
  }, 30000);

  it('GET Articles Returns Status Code 200', async () => {
    // get the response from the path /all-articles
    const response = await request(process.env.BASE_URL).get('/all-articles');
    expect(response.statusCode).not.toEqual(404); // the response code should not be 404
  }, 30000);
});
