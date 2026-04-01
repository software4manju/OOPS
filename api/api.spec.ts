import { test, expect } from '@playwright/test';

test('API E2E Test', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/login', {
    headers: {
      'x-api-key': 'reqres-free-v1'   // 👈 REQUIRED now
    },
    data: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  });

  console.log(await response.text());

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.token).toBeDefined();
});

test('GET users API', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);

  expect(body.length).toBeGreaterThan(0);
});