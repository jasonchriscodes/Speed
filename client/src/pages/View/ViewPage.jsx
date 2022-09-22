import React from "react";
import MaterialTable from "material-table";
import { useState } from "react";

const ViewPage = () => {
  const [tableData, setTableData] = useState([
    {
      id: "1",
      title:
        "An experimental evaluation of test driven development vs. test-last development with industry professionals",
      authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
      source: "EASE",
      pubyear: "2014",
      doi: "https://doi.org/10.1145/2601248.2601267",
      claim: "codeQuality",
      evidence: "stronglyAgainst",
      practice: "TDD",
    },
    {
      _id: "2",
      title:
        "An experimental evaluation of test driven development vs. test-last development with industry professionals",
      authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
      source: "EASE",
      pubyear: "2014",
      doi: "https://doi.org/10.1145/2601248.2601267",
      claim: "productQuality",
      evidence: "mostlyAgainst",
      practice: "BDD",
    },
    {
      _id: "2",
      title:
        "An experimental evaluation of test driven development vs. test-last development with industry professionals",
      authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
      source: "EASE",
      pubyear: "2014",
      doi: "https://doi.org/10.1145/2601248.2601267",
      claim: "productQuality",
      evidence: "mixed",
      practice: "BDD",
    },
    {
      _id: "3",
      title:
        "Realizing quality improvement through test driven development: results and experiences of four industrial teams",
      authors: "Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.",
      source: " Empirical Software Engineering, 13(3), 289–302",
      pubyear: "2008",
      doi: "https://doi.org/10.1007/s10664-008-9062-z",
      claim: "productQuality",
      evidence: "stronglyAgree",
      practice: "ATDD",
    },
    {
      _id: "4",
      title:
        "Does Test-Driven Development Really Improve Software Design Quality?",
      authors: "Janzen, D. S.",
      source: "Software, IEEE, 25(2) 77-84",
      pubyear: "2008",
      doi: null,
      claim: "teamConfidence",
      evidence: "stronglyAgainst",
      practice: "TDD",
    },
  ]);
  const columns = [
    { title: "title", field: "title", align: "left", defaultSort: "asc" },
    { title: "authors", field: "authors", align: "left" },
    { title: "source", field: "source", align: "left" },
    { title: "pubyear", field: "pubyear", align: "left" },
    {
      title: "doi",
      field: "doi",
      align: "left",
      sorting: false,
      filtering: false,
      emptyValue: () => <em>null</em>,
    },
    {
      title: "claim",
      field: "claim",
      align: "left",
      sorting: false,
      lookup: {
        teamConfidence: "Improves team confidence",
        productQuality: "Improves product quality",
        codeQuality: "Improves code quality",
      },
    },
    {
      title: "evidence",
      field: "evidence",
      align: "left",
      sorting: false,
      lookup: {
        stronglyAgainst: "Strongly Against",
        mostlyAgainst: "Mostly Against",
        stronglyAgree: "Strongly Agree",
        mostlyAgree: "Mostly Agree",
        mixed: "Mixed",
      },
    },
    {
      title: "practice",
      field: "practice",
      align: "left",
      sorting: false,
      lookup: { TDD: "TDD", BDD: "BDD", ATDD: "ATDD" },
    },
  ];
  return (
    <div className="App">
      <h1 align="center">SPEED Table Data</h1>

      <MaterialTable
        columns={columns}
        data={tableData}
        options={{
          sorting: true,
          searchFieldVariant: "outlined",
          filtering: true,
        }}
        title="Articles Information"
      />
    </div>
  );
};

export default ViewPage;
