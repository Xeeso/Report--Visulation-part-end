
import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

const FileInput = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          "http://localhost:3001/uploadExcel",
          formData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div className="w-10 btn btn-outline-primary">
        <h1>LineChart</h1>
        <input 
              type="file" accept=".xlsx" onChange={handleFileChange}>
        </input>  
      </div>
        <button className="w-20 btn btn-outline-primary" 
            onClick={handleFileUpload}> 
                Upload
           </button>
    </div>
  );
};

export default FileInput; 