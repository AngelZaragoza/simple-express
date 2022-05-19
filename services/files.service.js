const { randomBytes } = require('crypto');

exports.convertBase64ToPdf = (base64) => {
  const bytes = atob(base64);
  const byteNumbers = new Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    byteNumbers[i] = bytes.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return byteArray;
};


exports.randomFilename = (str) => {
  const rnd = `${str}-${randomBytes(16).toString('hex')}`;
  return rnd;
}