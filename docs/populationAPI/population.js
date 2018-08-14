//Require HTTPS module
const https = require('https');
//Require HTTP module
const http = require('http');
//Require the JSON text
const api = require('./api.json');

// Print out the temperature
//{"total_population": {"date": "2018-08-14", "population": 329110601}}
function printPopulation(population) {
  let totalPop = population.total_population.population.toLocaleString();
   const message = `The current population in ${totalPop}`;
   console.log(message);
}

function get(query) {
   const request = http.get(`http://api.population.io:80/1.0/population/${api.id}/${api.date}/`, response => {
       let body = '';
       //Read the data
       response.on('data', chunk => {
           body += chunk;
       });
       response.on('end', () => {
           const population = JSON.parse(body);
           //Print out the data
           printPopulation(population);
           // console.log(body);
       });
   });
};

module.exports.get = get;
