exports.convertBase64ToPdf = (base64) => {
  const bytes = atob(base64);
  const byteNumbers = new Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    byteNumbers[i] = bytes.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return byteArray;
};
