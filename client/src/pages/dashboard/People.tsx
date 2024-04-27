import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Button } from '@mantine/core';


const ButtonComponent = () => {
  return <Button onClick={()=> window.alert("Hu")} size="xs" variant="outline">Click</Button>
}

export default function People() {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make", filter: true },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
    { field: "button", cellRenderer: ButtonComponent, flex: 1 }
  ]);

  return (
    <div>
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 300, width: 930 }} // the grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
        />
      </div>
    </div>
  )
}