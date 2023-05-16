import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "../../redux/store";
import { GridArrowDownwardIcon } from "@mui/x-data-grid";

export default function ConvertTocsvByID({ id }) {
  const { data } = useSelector((state) => state.data);

  const found = data?.find((element, index) => index === id - 1);
  const total = found?.reduce((a, v) => (a = a + v?.total), 0);

  let arrayList = [["ID", "Item", "Price in €", "Quantity", "Total"]];
  const end = ["", "", "", "TOTAL", total];
  const extractValues = () => {
    found?.map((number) => {
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
  //   const exportToCsv = () => {
  //     console.log(total);
  //   };
  return (
    <Button size="small" color="success" variant="text" onClick={exportToCsv}>
      <GridArrowDownwardIcon />
    </Button>
  );
}
