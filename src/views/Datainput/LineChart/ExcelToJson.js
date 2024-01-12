// ExcelToJson.js
import * as XLSX from "xlsx";

const excelToJson = (file, callback) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    const data = e.target.result;
    const workbook = XLSX.read(data, { type: "binary" });
    const sheet_name_list = workbook.SheetNames;
    const jsonResult = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheet_name_list[0]]
    );
    callback(jsonResult);
  };

  reader.readAsBinaryString(file);
};

export default excelToJson;
