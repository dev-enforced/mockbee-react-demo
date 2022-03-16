
# Running Mockbee and Git together

This document lists down the steps one can use to get started with the utilisation of Mockbee for creating the upcoming projects and pushing it to Github with the appropriate branching and deployment on Netlify. 

## Installation Prerequisites:

- [Download Node JS LTS Version](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- [Getting comfortable with using Github CLI](https://blog.rishabkumar.com/a-git-cli-cheatsheet)
- [React Router](https://reactrouter.com/docs/en/v6/getting-started/tutorial#connect-the-url)
- [Git](https://git-scm.com/)
## Steps Involved :

  1) Creating the repository on Github Website.
  2) Linking the repository created on Github with your local system setup and then using [Mockbee](https://mockbee.netlify.app/docs/installation) to set up the React application with backend utilities on the application.
  3) Pushing the project on Github so that we can use it to deploy on Netlify
  4) Changes to be made on Deploy Settings of Netlify.

## What we will be doing:

We will be making a simple React application using Mockbee and Mockman that will have the ability to route between two components Home and Mockman and deploy the working on Netlify.


### STEP 1: Making the repository on Github:

a) Go to your [Github homepage](https://github.com) and click on the New button to create a repository.

![S1 p1](https://user-images.githubusercontent.com/76832165/158189888-ad5b79ef-7961-4226-947c-f578e80aed5f.PNG)

b) In the new Repository page fill the details related to your Github Repo. You can check the ones below for deployment
![S1 p2](https://user-images.githubusercontent.com/76832165/158190344-8d25a56a-20a2-495a-839f-81846304713c.png)

c) Now the new repository gets created. We will be working on creating branches now.

d) Create a new branch on the repository site by clicking on the current branch option and then typing the name of the new branch [Here it is `development`] within the input box.
![S1 p3](https://user-images.githubusercontent.com/76832165/158191117-d5789994-5269-41af-b4a0-a96e25de85a9.PNG)

![S1 p4](https://user-images.githubusercontent.com/76832165/158191608-6de2e187-6a4a-4da1-a61d-a4984717cb10.png)

e) Click on Create Option as shown above.

f) Now we will change the default branch from main to development. So we can do by going to Settings of the repository first and then clicking on the branches option under Code and Automation option.
See the picture below to navigate to the same 
![S1 p5](https://user-images.githubusercontent.com/76832165/158192672-45d1fc70-5f24-4919-a403-2bb96280663d.PNG)

g) Click on the option below to change the default branch from `main` to `development`.
![S1 p6](https://user-images.githubusercontent.com/76832165/158193108-af671383-7c3d-467e-b6fa-b3a0d2691fb6.PNG)

h) Click on the `main` dropdown option to get the `development` branch from the dropdown list and then click the `Update` option to update your branch
![S1 p7](https://user-images.githubusercontent.com/76832165/158194015-bd48b1be-0a85-40d7-a871-fb61561a4b22.png)

![S1 p8](https://user-images.githubusercontent.com/76832165/158195172-c217042d-5849-4b23-b3e0-4d1c046d6296.png)

i) Click on the button `I understand,update the default branch` to confirm the decision
![S1 p9](https://user-images.githubusercontent.com/76832165/158194516-04fadb3e-590a-432c-8ca6-d7571113ab59.png)


So you have created a github repository `mockbee-react-demo` with the default branch as development.

### STEP 2 : Linking the repository created on Github with your local system setup and then using [Mockbee](https://mockbee.netlify.app/docs/installation) to set up the React application with backend utilities on the application.

So this one has 2 subphases:
1) Taking the repository from Github website to your local system.
2) Developing your mockbee application with the appropriate components and routing

**Phase 1**: Taking the repository from Github Website to your local system:

I hope you all have installed Node JS through the link mentioned above.
a) For installing yarn (for Windows OS users) you can search for Command Prompt select the Administrator Mode settings . The command prompt terminal opens. There we can type this command and execute it to enter yarn just to make sure the Mockbee runs successfully.

```js
npm install --global yarn
```

b) Now you can close this Terminal and then you can go to the website and simultaneously open the folder where you want to clone the newly created Github Repository.

c) From the Github website of your repository copy the link by clicking on the Code Button at the right corner as mentioned in the photograph
![S2 p1](https://user-images.githubusercontent.com/76832165/158202793-d92c6416-b998-45bf-b005-00b9b81e815c.png)

So this is the location where I want to clone my repository.
![S2 p2](https://user-images.githubusercontent.com/76832165/158200667-961311c6-b592-42ab-ba4d-1641d3aa7cd4.png)

d)Now go back to the Right click on the empty space of the folder there you can see a dropdown where you can click on `Git Bash Here` option to click it out.

e) A Git Bash Terminal opens where you have to type the respective commands as mentioned below:
```git
git clone <REPO_LINK>
cd REPO_NAME
```

f) Open the IDE where you will develop the React Application. Mine is Visual Studio Code so I will type the command mentioned below to open it 
```
code .
```

**PHASE 2**: Developing your mockbee application with the appropriate components and routing

Here are the installation instructions for [Mockbee](https://mockbee.netlify.app/docs/installation)

a) On the IDE you can open a new terminal there itself and type the command mentioned below.

```js
npx create-mock-backend
```

b) Decide the name and template your application is going to use.
In my case I have decided the name as :`react-app-demonstration` and template:`e-commerce`

So now the installation process begins which involves creation of a Git initialised folder named as "react-app-demonstration" consisting of several node modules required to run the application along with the appropriate boilerplate code required to help you get started.
So you can see one issue coming up related to the structuring of the folders.
Let's visualise it:

![S2 P3](https://user-images.githubusercontent.com/76832165/158213669-27dfd3c9-8b15-4822-b57d-c0d14841c8db.png)

So we intend on shifting the content of the `react-app-demonstration` folder to the `mockbee-react-demo` folder to keep the folder structuring simple.

c) So apart from node_modules select all the content of the `react-app-demonstration folder` and copy it to the `mockbee-react-demo` folder.
The final result will be:
![S2 P4](https://user-images.githubusercontent.com/76832165/158215948-1e4d1cf0-4932-4f78-b77e-36cae455e763.png)

d) Now execute this command to install all the dependencies to the  `mockbee-react-demo` folder:

```
npm install /*For installing the dependencies required to run the app*/
npm start /*For starting the application*/
```

Congratulations your MockBee App is up and running
![S2 P5](https://user-images.githubusercontent.com/76832165/158224681-b9b3334f-a07a-490e-a169-98ce2c3b867e.png)

e) Now we integrate some new changes to our application:

index.js
```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
```

App.js
```js

import "./App.css";
import logo from "./logo.png";
import {Home} from "./Home";
import { Route, Routes } from "react-router-dom";
import { MockmanComponent } from "./MockComp";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mockman" element={<MockmanComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;


```
**HOME**
```js

import React from "react";
import "./App.css";
import logo from "./logo.png";
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <header className="App-header">
            <img src={logo} alt="mockBee logo" width="180" height="180" />
            <h1 className="brand-title">
                Welcome to <span>mockBee!</span>
            </h1>
            <p className="brand-description">
                Get started by editing <code>src/App.js</code>
            </p>
            <div className="links">
                <a href="https://mockbee.netlify.app/" target="_blank" rel="noreferrer">
                    Explore mockBee
                </a>
                <a
                    href="https://mockbee.netlify.app/docs/api/introduction"
                    target="_blank"
                    rel="noreferrer"
                >
                    API Documentation
                </a>
                <a
                    href="https://github.com/neogcamp/mockBee"
                    target="_blank"
                    rel="noreferrer"
                >
                    Contribute
                </a>
                <Link to="/mockman">CHECK MOCKMAN</Link>
            </div>
        </header>
    );
};
export { Home };

```


**.env (for making sure that the mockman component works properly)**

```
REACT_APP_JWT_SECRET=<YOUR_JWT_KEY>
```

**MockComp.js**
```js
import { React } from "react";
import Mockman from "mockman-js";
import "../node_modules/mockman-js/dist/style.css";
const MockmanComponent = () => {
    return (
        <div className="mockman-component">
            <Mockman/>
        </div>
    )
}

export {MockmanComponent}

```

Here is the resultant file structure:

![image](https://user-images.githubusercontent.com/76832165/158252466-b7a16afa-948f-42ed-9005-768ac5669f0b.png)



Now you can see the live preview of the Mockman Component working successfully :
![image](https://user-images.githubusercontent.com/76832165/158235723-0225fde5-2fbc-4c05-8db9-7e43dd0e01ed.png)


## STEP 3: Pushing the project on Github Website so that we can use it to deploy on Netlify

So now you can reopen the Git Bash Terminal or can continue using the IDE terminal for this step:
Execute these commands one by one 
```
git add .
git commit -m "COMMIT_MSG"
git push origin BRANCH_NAME

```

If you aren't signed in to your Github from CLI then an error might come up for which a fix can be found [here](https://www.digitalocean.com/community/questions/github-https-push-403-error)
And then a window popup comes up that prompts you to enter the signup details of Github


![S3 P1](https://user-images.githubusercontent.com/76832165/158247572-9cdc2a1d-724c-4234-bc49-57afb9c182e1.png)


So you can signup from here and then push the changes. Now you can view the github repository on the browser to observe the changes.

## STEP 4: Changes to be made on Deploy Settings of Netlify.

a) Go to [Netlify](https://netlify.com) and login to your account there.

b) You will be redirected to the dashboard of your Netlify account giving an overview of the existing projects so there you can click on this option

![S4 P2](https://user-images.githubusercontent.com/76832165/158250372-5d115513-27ec-42c2-8b4b-1399b7018a64.png)


c) Click on Add New Site -> Import an Existing Project -> From Github .

d) Search for the Github repository to be imported.
e) Select it . You will be redirected to define the deploy settings required for it. In that click on advanced settings and make these changes as mentioned below

![S4 P3](https://user-images.githubusercontent.com/76832165/158252821-fafe7cac-34af-4be5-9695-dde7830cfe87.png)

f) Click on Deploy Site for deploying it.

Here is the resulting Deploy:
![S4 P4](https://user-images.githubusercontent.com/76832165/158255042-080b7e1b-57cd-47b5-84f3-9a7b1d6e3d25.png)

Live preview link : [CLICK Here](https://pensive-swirles-94d6cf.netlify.app/mockman)

GITHUB REPOSITORY LINK: [Github](https://github.com/dev-enforced/mockbee-react-demo)

Now what happens is that when you directly click on this link in React,you might come across a redirection error saying that Netlify doesn't know about it. Here is the screenshot showing it:
![image](https://user-images.githubusercontent.com/76832165/158255606-a77143fa-d4fc-456c-937d-b27b2091640a.png)

Reason and fix for this can be found in this [blog](https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa).

All you got to do is in your public folder add a redirects file having this content:

```
/*    /index.html 200
```

And then push it in your Github and this issue will be fixed.


Voila you successfully made a React Application with proper support from Github and Mockbee and a working Mockman.
If in case the Mockman doesn't work on the live preview try redeploying the application on  Netlify and changing the environment variable on Netlify only not the local setup.
