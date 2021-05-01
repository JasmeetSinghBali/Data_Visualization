****By- Jasmeet****

timestamp- 257 loading data in react
****Credits/SRC: https://datavis.tech/datavis-2020/****

# Data Visualization Project-1
## Aim-> Making a data visualization for all available Named CSS colors in mdn.

## This will be done in 3 Parts

### -Preparing Data For Data Visualization
### -Loading Data with fetch, promises , async & await
### -Interaction With React

# Part-1 : Preparing Data for Data visualization with d3 and React

## Main topics covered
### -Extracting data from html tables
### -exporting and cleaning csv files
### -publishing data using Github Gist (making data publically available).


## Src : https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
#### For the list of all named colors in CSS

### Data Format So that we can use it in our code

#### -JSON
#### -CSV

## Step 1 : How to copy paste html tables to Google spreadheet or other spreadsheets.

- Just copy paste the entire html table in the CSS mdn link that was provided earlier and hit ctrl+v the spreadsheet software understands html table automatically.

## Step 2 : Download csv format of the excel sheet Data/CSV cleaning Make sure every row has some filled entry.

- In our case the css named colors have specification empty entries just fill those entries so that like from 1 to 17 are CSS level 1 in the specification row and so on CSS level 2 ,3 and 4

## Step 3 To make this CSV file publically Accessible we will publish it with Github Gist.

- You can host csv file that will stay forever their for free.
- https://gist.github.com/

- copy paste the csv formatted file of the CSS named colors and then create public gist.

- See my public git gist named css Cleaned data url https://gist.github.com/Jasmeet-1998/b4d5aca16012ed8cf5da1eb955c65210

- ****Click on Raw  and then that url can be used to just use this csv values to load data in our project****

***End Of part 1***

***
***
# Part-2 : Loading Data with fetch, promises, async&await

### Aim- make a program that parses the data and then displays it somehow  
***Src:*** https://gist.githubusercontent.com/Jasmeet-1998/b4d5aca16012ed8cf5da1eb955c65210/raw/cssNamedColorsByMDN.csv

- Simply load data with script tag & and then use inbuilt fetch(url) that has browser support to get and parse that data from the raw version of the data via url.

- Note we need to handle promise when using fetch.

#### Promise Version
      <script>
        const url="https://gist.githubusercontent.com/Jasmeet-1998/b4d5aca16012ed8cf5da1eb955c65210/raw/cssNamedColorsByMDN.csv";
        fetch(url)
        .then((response)=>{
          response.text().then((text)=>{
            console.log(text); //  gives you the CSV data
            });
          })
        .catch((err)=>{
          console.log(`Something went wrong Error:${err}`);
          })
      </script>

#### Async&Await Version

        <script>
           const fetchData=async (url)=>{
             const result=await fetch(url);
             return await result.text();
           }
           fetchData(url).then((text)=>{
             console.log(text);
             });


        </script>


****part 2 ends here****
***
***

# Part 3 Interaction With React

## Aim - draw a circle around the mouse pointer and that circle moves as you move your mouse.

### -Mouse Events
### -Unidirectional data flow
### -the notion of state
### -React use state hook

- ****IMPORTANT Unidirectional data flow in react is the process of****


      render--->precption & cognition ---> to action(interaction) via event listener---->change state & re-render via react-virtual DOM

- ****IMPORTANT: to handle the change in state react has useState hooks refer App.js in src****

***

# Parsing CSV data with D3

#### NOTE- refer parsing_csv.html in the data_viz folder

## AIM

#### - counting rows and columns
#### - estimating data size
#### - constructing and displaying text with d3 and css
#### - using d3.csv,csvParse & csvFormat


     d3.csvParse("foo,bar\n1,2");
     // [{foo:"1",bar:"2"},columns["foo","bar"]]

     d3.tsvParse("foo\tbar\n1\t2");
     // [{foo:"1",bar:"2"},columns["foo","bar"]]

     npm i d3

     const d3 =require('d3');
     const csvurl='https://gist.githubusercontent.com/Jasmeet-1998/b4d5aca16012ed8cf5da1eb955c65210/raw/cssNamedColorsByMDN.csv'
     fetchText(csvUrl).then(text=>{
       console.log(d3.csvParse(text));
       })




***
***
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
