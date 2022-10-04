import React from "react";
import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import PageviewIcon from '@material-ui/icons/Pageview';
import Axios from 'axios';

const URL_GET = 'http://localhost:8888/api/articles/all-articles';

const Table = () => {
  const [articles, setArticlesData] = useState(null);  
  const [loading, isLoading] = useState(true);

  const fetchArticles = () => {
    Axios.get(URL_GET)
    .then( (response) => {
      console.log(response.data);

      const articlesData = response.data.map((data) => {
        return {
          id: data.id,
          title: data.title,
          authors: data.authors,
          source: data.source,
          pubyear: data.pubyear,
          doi: data.doi,
          claim: data.claim,
          evidence: data.evidence,
          practice: data.practice,
        };
      });

      setArticlesData(articlesData);      
    })
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchArticles();

    setTimeout(()=> {
      isLoading(false);
    }, 10000);

  }, []);
  
  const columns = [
    {
      title: "Title",
      field: "title",
      align: "left",
      defaultSort: "asc",
      filterPlaceholder: "Filter by title",
    },
    {
      title: "Authors",
      field: "authors",
      align: "left",
      filterPlaceholder: "Filter by author",
    },
    {
      title: "Source",
      field: "source",
      align: "left",
      filterPlaceholder: "Filter by source",
    },
    {
      title: "Pubyear",
      field: "pubyear",
      align: "left",
      filterPlaceholder: "Filter by year",
    },
    {
      title: "Doi",
      field: "doi",
      align: "left",
      sorting: false,
      filtering: false,
      emptyValue: () => <em>null</em>,
    },
    {
      title: "Claim",
      field: "claim",
      align: "left",
      sorting: false,
      lookup: {
        teamConfidence: "Improves team confidence",
        productQuality: "Improves product quality",
        codeQuality: "Improves code quality",
      },
      filterPlaceholder: "Select claim types",
    },
    {
      title: "Evidence",
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
      filterPlaceholder: "Select evidence types",
    },
    {
      title: "Practice",
      field: "practice",
      align: "left",
      sorting: false,
      lookup: { TDD: "TDD", BDD: "BDD", ATDD: "ATDD" },
      filterPlaceholder: "Select practice types",
    },
  ];

  return (
    <div className="App">
      {console.log('Articles\n', articles)}
      <h1>SPEED Table Data</h1>

      {loading && <h1>Loading Data</h1>}

      {!loading && <MaterialTable
        columns={columns}
        data={articles}
        options={{
          sorting: true,
          searchFieldVariant: "outlined",
          filtering: true,
          paging: true,
          pageSizeOptions: [3, 5, 10, 20, 25, 50, 100],
          pageSize: 3,
          paginationType: "stepped",
          exportButton: true,
          exportAllData: true,
          exportFileName: "SPEED Table Data",
          grouping: true,
          columnsButton: true
        }}
        title="Articles Information"
        actions={[
          {
            icon: () => <PageviewIcon>View</PageviewIcon>,
            tooltip: "View",
            onClick: (e,data) => console.log(data),
            position:"row",
          },
        ]}
      />}

    </div>
  );
};

export default Table;
