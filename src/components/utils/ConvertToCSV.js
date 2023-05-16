import { Button } from "@mui/material";
import React from "react";

export default function ConvertToCSV({ array, total }) {
  let arrayList = [["ID", "Item", "Price in €", "Quantity", "Total"]];
  const end = ["", "", "", "TOTAL", total];
  const extractValues = () => {
    array.map((number) => {
      const propertyValues = Object.values(number);

      return arrayList.push(propertyValues);
    });
    return arrayList.push(end);
  };
  const exportToCsv = async () => {
    await extractValues();

    var CsvString = "";
    arrayList.forEach(function (RowItem, RowIndex) {
      RowItem.forEach(function (ColItem, ColIndex) {
        CsvString += ColItem + ",";
      });
      CsvString += "\r\n";
    });
    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
    var x = document.createElement("A");
    x.setAttribute("href", CsvString);
    x.setAttribute("download", "somedata.csv");
    document.body.appendChild(x);
    x.click();
  };
  // const exportToCsv = () => {
  //   console.log(arrayList);
  // };
  return (
    <Button
      size="small"
      color="success"
      variant="contained"
      onClick={exportToCsv}
    >
      Export{" "}
    </Button>
  );
}
