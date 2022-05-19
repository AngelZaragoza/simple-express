const express = require("express");
const router = express.Router();
const path = require("path");
const { readFile, writeFile } = require("fs");
const fileController = require("../controllers/files.controller");

/* POST base64 string to encode to PDF file */
router.post("/pdf", async function (req, res, next) {
  const filedata = req.body.Pdf;
  const filename = req.body.filename;
  try {
    const fileUrl = await fileController.getPdfFile(filename, filedata);
    const file = readFile(path.resolve([fileUrl]));

    res.setHeader("Content-Type", "application/pdf");
    return res.status(200).send(fileUrl);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

/* GET string prepend to a random value to generate a filename */
router.get("/random", (req, res, next) => {
  const { prepend } = req.query;
  console.log("Query:", prepend);
  const randomName = fileController.randomFileName(prepend);
  res.status(200).json({ randomName });
});

module.exports = router;
