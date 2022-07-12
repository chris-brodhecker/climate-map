# Climate-Map

This is a slapped together PoC / MVP for showing data on a map. It utilizes MapBox and has lots of copy/paste from STAGE. All the relevenat code is in App.js  

This is front end only there is no database or backend. The data is stored in a JSON file which was generated via script (see scripts folder).

## The Data
The data which is displayed is stored in data/county-data.js. You can look at a representative sample in data/sample-data.json (there is a known bug where the temperatures are not properly stored from may onward in some cases).

The data came from the following sources
[Income Data From Census](https://data.census.gov/cedsci/table?q=All%20Counties%20within%20United%20States%20and%20Puerto%20Rico&t=Income%20%28Households,%20Families,%20Individuals%29&y=2020&tid=ACSST5Y2020.S1901)
[Climate Data](https://www.ncei.noaa.gov/news/noaa-offers-climate-data-counties)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.