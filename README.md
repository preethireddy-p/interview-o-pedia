# Interview-o-pedia
### A Video conferencing zoom clone app for easy interview processes

## Motivation
The objective of this application is to ease the process of job interviews for both sides in the current virtual means, serving the following features:
- Members can create their profiles by uploading required details and documents.
- A in-app one-click option to access the required documents (resume, degree certificates, projects, etc) of the interviewee.
- The interviewer can quickly note down the pointers on the interviewee.
- Access to a live online code/text editor for the interviewer to see the interviewee's work.
- Feedback forms/ questionnaie for the interviewer and interviewee.
- Chatbox to share any type of content (text, docs, images, video, audio)
- Only the host of the meeting has the authorization to remove a participant.
## Technology

This project uses:

- CometChat Pro 3.0.0
- CometChat UI Kit
- React.js
- Uuid
- Validator
- @emotion/core
- dateformat
- emoji-mart
- react-html-parser
- twemoji
- Node.js
- Express.js
- MySQL
- Cors
- Dotenv
- Nodemon

## Running the demo - Client Side.

To run the demo follow these steps:

1. [Head to CometChat Pro and create an account](https://app.cometchat.com/signup)
2. From the [dashboard](https://app.cometchat.com/apps), add a new app called **"zoom-clone"**
3. Select this newly added app from the list.
4. From the Quick Start copy the **APP_ID, APP_REGION and AUTH_KEY**. These will be used later.
5. Also copy the **REST_API_KEY** from the API & Auth Key tab.
6. Navigate to the Users tab, and delete all the default users and groups leaving it clean **(very important)**.
7. Download the repository [here](https://github.com/hieptl/zoom-clone/archive/main.zip) or by running `git clone https://github.com/hieptl/zoom-clone.git` and open it in a code editor.
8. Create a file called **.env** in the root folder of your project.
9. Create the content of the **.env** file as follow.

```js
REACT_APP_COMETCHAT_APP_ID=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
REACT_APP_COMETCHAT_REGION=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
REACT_APP_COMETCHAT_AUTH_KEY=xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx
```

10. Run the following command to install the app.

```sh
    npm install
    npm run start
```

## Running the Demo - Server Side

To run the demo follow these steps:

1. We will use the MySQL database. For this reason, this section describes how to create the database and its table. Before proceeding, you need to make sure that you have installed the MySQL database on your computer already. To create the database and its table, you need to get the zoom.sql and run it (OR) manually run the SQL script from zoom.sql in your SQL DB viewer.
2. Create .env file and replace the below information with the information of your database connection.
```js
PORT=xxx - xxx - xxx - xxx - xxx - xxx - xxx - xxx
DB_HOST=xxx - xxx - xxx - xxx - xxx - xxx - xxx - xxx
DB_USER_NAME=xxx - xxx - xxx - xxx - xxx - xxx - xxx - xxx
DB_USER_PASSWORD=xxx - xxx - xxx - xxx - xxx - xxx - xxx - xxx
DB_NAME=xxx - xxx - xxx - xxx - xxx - xxx - xxx - xxx
DB_PORT=xxx - xxx - xxx - xxx - xxx - xxx - xxx - xxx
```
3. Install all the dependencies of the applicatoin by running
```js
npm install
```
4. Because we are installing the nodemon library. Therefore you can run one of the follow statements to run your project.
```js
node index.js 
or 
npx nodemon index.js
```
