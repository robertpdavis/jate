# JATE - Just Another Text Editor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Simple text editor served using express.js with CodeMirror providing the text editor functionality in the frontend. Webpack and Babel are used to bundle and set up the distribution code. An editored document is saved in the inbuilt browser IndexDB using the idb package. Designed as progresive web app with an offline first focus.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Licence](#Licence)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Several scripts are set up in the root package.json to manage distribution build and running the app as follows:
* start:dev: concurrently \cd server && npm start\ \cd client && npm run dev\
* start: npm run build && npm run server
* server: cd server && npm start
* build: cd client && npm run build
* install: concurrently \cd server && npm install\ \cd client && npm install\
* client: cd client && npm start

Running install will install all the required client and server dependancies.

File structure of the application:
```md
.
├── client/                // contains src and dist folder (when built) along with main html and also a caching service worker and webpack config
├── server/                // contain routes folder for routing all requests to the dist index.html as well as the node.js express server code
├── .gitignore             // indicates which folders and files Git should ignore
├── .npmrc                 // npm config file
├── LICENCE                // licence file      
```
Note: The root, client and server folders each have seperate package.json files that setup required app and dev dependencies.

App is deployed on Heroku: https://texteditorjate.herokuapp.com/

## Usage
Usage is straightforward. Type text in the editor which will be saved in the browsers indexDB when entering new lines of if the page looses focus. This also means the app will continue to funtion offline. A manifest is created with webpack which allows the app to be "installed". Caching is also applied.

## Credits
Rob Davis Github: [robertpdavis](https://github.com/robertpdavis)

## Licence
MIT License

## Contributing
Please contact me at: robertpdavis@optusnet.com.au

## Tests
No tests are included.

## Questions
* Github: [robertpdavis](https://github.com/robertpdavis)
* Email: robertpdavis@optusnet.com.au

