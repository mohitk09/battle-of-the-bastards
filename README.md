## Description 
Simple MERN application that utilizes mongoDB as a database and uses react and nodejs.
Might not work for everybody only for those with their IPs whitelisted in the mongoDB atlas.
Ths applicaion exposes three endpoints :-
1. /list queries the entire database and returns it 
2. /count count of all the database documents
3. /search is used to search for a particular document.

## Frontend part
1. Contains the table component to display the data.
2. AutoComplete component
3. Navigation bar and linear progress bars 

## How to run

yarn dev will start both the backend server as well as start react development server.
Environment file is also created to pass the credentials securely.

*Site is also deployed on heroku for sometime can be accessed on*[https://battle-of-the-bastards.herokuapp.com/]