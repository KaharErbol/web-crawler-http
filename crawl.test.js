const { normalizeURL, getURLsFromHTML } = require('./crawl.js');
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

test('getURLsFromHTML absolute', () => {
  const inputHTMLBody = `
    <html>
      <body>
        <a href="https://blog.boot.dev/path/">
          Boot.dev Blog
        </a>
      </body>
    </html>
  `;
  const baseURL = "https://blog.boot.dev/path";
  const actual = getURLsFromHTML(inputHTMLBody, baseURL);
  const expected = ["https://blog.boot.dev/path/"];
  expect(actual).toEqual(expected);
});

test('getURLsFromHTML relative', () => {
  const inputHTMLBody = `
    <html>
      <body>
        <a href="/path/">
          Boot.dev Blog
        </a>
      </body>
    </html>
  `;
  const baseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, baseURL);
  const expected = ["https://blog.boot.dev/path/"];
  expect(actual).toEqual(expected);
});


test('getURLsFromHTML both', () => {
  const inputHTMLBody = `
    <html>
      <body>
        <a href="https://blog.boot.dev/path1/">
          Boot.dev Blog 1
        </a>
        <a href="/path2/">
          Boot.dev Blog 2
        </a>
      </body>
    </html>
  `;
  const baseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, baseURL);
  const expected = ["https://blog.boot.dev/path1/", "https://blog.boot.dev/path2/"];
  expect(actual).toEqual(expected);
});

test('getURLsFromHTML invalid', () => {
  const inputHTMLBody = `
    <html>
      <body>
        <a href="invalid">
          Boot.dev invalid
        </a>
      </body>
    </html>
  `;
  const baseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, baseURL);
  const expected = [];
  expect(actual).toEqual(expected);
});