'use client'
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';
import styles from './Export.module.css'

const Export = ({ excelData, fileName}) => {
   const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
   const fileExtension = '.xlsx';

   const exportToCSV = () => {
      const ws = XLSX.utils.json_to_sheet(excelData);
      const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], {type: fileType});
      FileSaver.saveAs(data, fileName + fileExtension);
   }
  return (
    <div>
      <button className={styles.button} onClick={(e) => exportToCSV(fileName)}>Export</button>
    </div>
  )
}

export default Export