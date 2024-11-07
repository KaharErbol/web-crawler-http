const { normalizeURL } = require('./crawl.js');
const { test, expect } = require('@jest/globals');

test('normalizeURL strip protocol', () => {
  const input = 'https://kaharerbol.com/';
  const actual = normalizeURL(input);
  const expected = 'kaharerbol.com';
  expect(actual).toEqual(expected);
});

test('normalizeURL strip trailing slash', () => {
  const input = 'https://kaharerbol.com/';
  const actual = normalizeURL(input);
  const expected = 'kaharerbol.com';
  expect(actual).toEqual(expected);
});


test('normalizeURL capitals', () => {
  const input = 'https://KaharErbol.com/';
  const actual = normalizeURL(input);
  const expected = 'kaharerbol.com';
  expect(actual).toEqual(expected);
});

test('normalizeURL strip http', () => {
  const input = 'https://KaharErbol.com/';
  const actual = normalizeURL(input);
  const expected = 'kaharerbol.com';
  expect(actual).toEqual(expected);
});