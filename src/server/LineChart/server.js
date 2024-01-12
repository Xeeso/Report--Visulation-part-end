// excel-to-json-server/server.js
const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/uploadExcel", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

  const filePath = path.join(__dirname, "LineChart.json");
  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

  res.status(200).send("File saved successfully.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

