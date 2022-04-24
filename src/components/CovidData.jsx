import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
const CovidData = () => {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    const url =
      'https://covid-19-coronavirus-statistics2.p.rapidapi.com/countriesData';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'covid-19-coronavirus-statistics2.p.rapidapi.com',
        'X-RapidAPI-Key': 'efc307e5d8msh4de8db72ff57f64p1e9573jsn86b08a91a938',
      },
    };
    const fetchCovidData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json.result);
        setCovidData(json.result);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchCovidData();
  }, []);

  return (
    <div className='justify-content-center py-3'>
      <h1>CovidData</h1>
      <div className='m-5'>
        <Table striped bordered hover size='md'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Country</th>
              <th>Total Cases</th>
              <th>New Cases</th>
              <th>Total Deaths</th>
              <th>New Deaths</th>
              <th>Totally Recovered</th>
              <th>Active Cases</th>
            </tr>
          </thead>
          <tbody>
            {covidData.map((item, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{item.country}</td>
                  <td>{item.totalCases}</td>
                  <td>{item.newCases}</td>
                  <td>{item.totalDeaths}</td>
                  <td>{item.newDeaths}</td>
                  <td>{item.totalRecovered}</td>
                  <td>{item.activeCases}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <p>
        Source:
        <a href='https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics/'>
          COVID-19 Coronavirus Statistics API Documentation
        </a>
      </p>
    </div>
  );
};
export default CovidData;
