const path = require("path");
const fs = require("fs");

const fileService = require("../services/files.service");

exports.getPdfFile = async (filename, base64) => {
  const fileBuffer = fileService.convertBase64ToPdf(base64);

  const fileUrl = path.normalize(`${__dirname}/../public/pdfs/${filename}.pdf`);
  fs.writeFile(
    fileUrl,
    fileBuffer,
    "utf8",
    (err) => {
      if (err) throw err;
      console.log("Pdf convertido con éxito");
    }
  );
  console.log(fileUrl);
  return fileUrl;
};

exports.randomFileName = (str) => {
  return fileService.randomFilename(str ?? 'file');
}