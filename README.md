## Description
This is an azure function that queries the Graphql Teams API endpoint. It consolidates the reaction data, and is triggered via a HTTP request.


## Running the Projects
Step 1: 
- f5 to run build locally

Step 2: 
- create the production build 
- run `npm run build`

Step 3: 
- Deploy function to azure
- run `func azure functionapp publish GraphQueryFunction`
- check live function at: https://graphqueryfunction.azurewebsites.net/api/HttpExample