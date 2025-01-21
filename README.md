# Movie Redux Application

## Overview
Movie Redux App is an example of a React application 
built with Vite that utilizes Redux for state management. 
The application makes asynchronous calls to a Node.js 
API server using Axios to retrieve data. Using Axio 
properly will eliminate the need for middleware like 
Redux Saga. To run this application, you will need to 
download the [movie-node-server](https://github.com/stevenwickers/movie-node-server)!.

## Runing the Applicaiton

1. Install the packages

        npm install or yarn install

2. Run the server

        npm start or yarn start

3. Run Jest Test

         npm test


## Env Variables

All environment variables can be found in the .ENV file located in the root directory of this application.

1. VITE_API_HOST: this is the URL of the movie-node-server