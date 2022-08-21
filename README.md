## Description
This is an azure function that queries the Graphql Teams API endpoint. It consolidates the reaction data, and is triggered via a HTTP request.

## Admin Credentials
papajohns@2c8k7f.onmicrosoft.com
JKiqfsitY9HmEva

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

![Screenshot from 2022-08-21 10-07-58](https://user-images.githubusercontent.com/19624580/185775158-aa2e34ce-2bf0-4afd-ac3a-172dee339f29.png)
![Screenshot from 2022-08-21 11-02-06](https://user-images.githubusercontent.com/19624580/185775166-934cd5ea-88f5-4736-8687-698283108608.png)
