const { JSDOM } = require('jsdom');

function getURLsFromHTML(htmlBody, baseURL) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll('a');
  for (const link of linkElements) {
    if (link.href.slice(0, 1) == '/') {
      // Relative URL
      try {
        const urlObj = new URL(`${baseURL}${link.href}`);
        console.log(`The URL Obj.href: ${urlObj.href}`);
        urls.push(urlObj.href);
      } catch (error) {
        console.log(`error with relative url: ${error.message}`) 
      }
    } else {
      // Absolute URL
      try {
        const urlObj = new URL(link.href);
        console.log(`invalid: ${urlObj}`);
        urls.push(urlObj.href);
      } catch (error) {
        console.log(`error with absolute url: ${error.message}`) 
      }
    }
  }
  return urls;
};


function normalizeURL(urlString) {
  const urlObj = new URL(urlString)
  const hostUrl = `${urlObj.hostname}`;
  if (hostUrl.length > 0 && hostUrl.slice(-1) == '/') {
    return hostUrl.slice(0, -1);
  }
  return `${urlObj.hostname}`;
}


module.exports = {
  normalizeURL,
  getURLsFromHTML
}