/**
 * File: Table.js
 */
import React from "react";
import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import Axios from 'axios';
import RingLoader from 'react-spinners/RingLoader';

// URL to the Backend API
const URL_GET = 'http://localhost:8888/api/articles/all-articles';

const Table = () => {  
  const [articles, setArticlesData] = useState(null);  // state to track the articles and set articles data
  const [loading, isLoading] = useState(true);         // state to track the loading and set loading data

  /**
   * Method to fetch the articles from the API.
   */
  const fetchArticles = () => {
    Axios.get(URL_GET)
    .then( (response) => {

      // retrieve the data relevant 
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

      // setting the articles data
      setArticlesData(articlesData);      
    })
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    // fetching articles data
    fetchArticles();

    setTimeout(()=> {
      isLoading(false);
    }, 5000);

  }, []);
  
  // column details for the table
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
      sorting: true,
      lookup: { TDD: "TDD", BDD: "BDD", ATDD: "ATDD" },
      filterPlaceholder: "Select practice types",
    },
  ];

  return (
    <div className="App">
      {
        /* display the loading component if the data is loading */
      loading && <RingLoader
        color="rgba(214, 54, 54, 1)"
        size={100}/>
      }        

      {
      /* display the Table component if the data is not loading */
      !loading && <MaterialTable
        columns={columns}
        data={articles}
        options={{
          sorting: true,
          searchFieldVariant: "outlined",          
          paging: true,
          pageSizeOptions: [3, 5, 10, 20, 25, 50, 100],
          pageSize: 4,
          paginationType: "stepped",
          columnsButton: true
        }}
        title="ARTICLES"        
      />}
    </div>
  );
};

export default Table;
