function normalizeURL(urlString) {
  const urlObj = new URL(urlString)
  const hostUrl = `${urlObj.hostname}`;
  if (hostUrl.length > 0 && hostUrl.slice(-1) == '/') {
    return hostUrl.slice(0, -1);
  }
  return `${urlObj.hostname}`;
}


module.exports = {
  normalizeURL
}