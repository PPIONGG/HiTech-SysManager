import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { mockdata } from "./moackData";

export default function Datagrid() {
  const [clickedCell, setClickedCell] = useState(null);
  const [clickCounter, setClickCounter] = useState(0); // เพิ่ม state เพื่อนับการคลิก

  const [boundleQuantities, setBoundleQuantities] = useState<number[]>([]);


  // ดึง marker ที่ไม่ซ้ำกัน
  const uniqueMarkers = [...new Set(mockdata.map((item) => item.marker))];

  const handleClick = (quantity: any) => {
    setClickedCell(quantity);
    setClickCounter((prevCounter) => prevCounter + 1); // เพิ่มการเพิ่มค่า counter ทุกครั้งที่คลิก

  };

  useEffect(() => {
    if (boundleQuantities.length > 0) {
      console.log("boundleQuantities:", boundleQuantities);
    }
  }, [boundleQuantities]);

  useEffect(() => {
    if (clickedCell !== null) {
      const clickedItem = mockdata.find((item) => item.id === clickedCell);
      if (clickedItem) {
        console.log("mockData", mockdata);
        console.log("Clicked on Item:", clickedItem);
        console.log("clickedItem.boundleQuantity", clickedItem.boundleQuantity);

        setBoundleQuantities((prevQuantities: number[]) => [
          ...prevQuantities,
          clickedItem.boundleQuantity,
        ]);
      }
    }
    console.log("useEffect clicked", clickedCell);
  }, [clickedCell,clickCounter]);

  return (
    <div>
      <TableContainer component={Table}>
        <Table sx={{ backgroundColor: "rgb(242,242,242)" }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: "1px solid #f5c242" }}>
                <img
                  width={50}
                  height={50}
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4E6B_IF3VMeAFUORa1D_dJA5Huzo7wg1T5iCS2ArC9zcnYBSoMottcNrn1Bm4yszEfm3927RkNJOA0mThaC-9JJSHBehT19aHGrOlZx4pZcswLPbt9_IBjN9QOpEnCa2GLUZMWZNVcA&usqp=CAc"
                  alt=""
                />
              </TableCell>
              {uniqueMarkers.map((marker) => (
                <TableCell
                  sx={{ border: "1px solid #f5c242" }}
                  key={marker}
                >{`Marker ${marker}`}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {["S", "M", "L", "XL", "2XL"].map((size) => (
              <TableRow key={size} sx={{height : '100px'}}>
                <TableCell sx={{ border: "1px solid #f5c242", }}>
                  {size}
                </TableCell>
                {uniqueMarkers.map((marker) => {
                  const filteredData = mockdata.filter(
                    (item) => item.marker === marker && item.size === size
                  );
                  const id = filteredData.length > 0 ? filteredData[0].id : 0;

                  const cellStyle = {
                    border: "1px solid #f5c242",
                    cursor: "pointer",
                    backgroundColor:
                      clickedCell === id ? "rgb(249,219,144)" : "rgb(82,82,82)",
                    // เพิ่มเงื่อนไขเพื่อให้พื้นหลังเป็นสีขาวเมื่อยังไม่มีการคลิก
                    ...(clickedCell === null && { backgroundColor: "white" }),
                  };

                  return (
                    <TableCell
                      sx={cellStyle}
                      key={marker}
                      onClick={() => handleClick(id)}
                    >
                      {id}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
