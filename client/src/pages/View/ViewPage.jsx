import React from "react";
import MaterialTable from "material-table";
import { useState } from "react";

const ViewPage = () => {
  const [tableData, setTableData] = useState([]);
  const columns = [
    { title: "title", field: "title" },
    { title: "authors", field: "authors" },
    { title: "source", field: "source" },
    { title: "pubyear", field: "pubyear" },
    { title: "doi", field: "doi" },
    { title: "claim", field: "claim" },
    { title: "evidence", field: "evidence" },
    { title: "practice", field: "practice" },
  ];
  return (
    <div className="App">
      <h1 align="center">SPEED Table Data</h1>

      <MaterialTable columns={columns} data={tableData} />
    </div>
  );
}

export default ViewPage;
