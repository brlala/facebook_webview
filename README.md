# GUI in the Webview
This is the folder for a Webview Microapp, boiler plate for Facebook Webview which display data for users to select. Once the user selects a data, the selction will be sent to our gateway for further processing.
The user is verified by calling FacebookExtensions and comparing the HMAC hash sum. If it verified, a jsonwebtoken is assigned to the user session throughout the Webview session.

## Everything we used to make this Bot

### Technologies used
#### ECMAScript 7 (“ES7” / JavaScript)
ECMAScript™ is the standard behind JavaScript. It has had a number of very useful additions over the past several years, modernizing the syntax and providing new capabilities.

#### Node.js
Node enables us to use c outside of a browser and directly on our machines to perform the logic necessary to determine what messages to send to the end user and when.

#### Express.js
Express is a helpful framework built around Node.js for performing actions as a web server. e.g, Taking web page requests, responding and serving images to users.

#### Embedded JavaScript Templates (EJS)
EJS is a very simple templating language. This helps us create HTML for the pages we show in a programmatic way. Here we use it to decide whether to show the Preferences view, the Product view or the Error page.

#### React.js
An amazing framework that allows us to create highly interactive user interfaces. Used heavily in this example to create the Preferences view.

#### WeUI
You can get started quickly with mobile-friendly web UI by using a library of components like the one from [WeUI](https://weui.io/).

#### React-Redux
A library used for managing states through the use of Lifecycle hooks

#### JSONWebToken/Crypto
Use to verify the integrity of data being sent by Faceobok and also the integrity of data between the data received from the backend API.

### Running locally
You may want to run this bot on a platform outside of Heroku or simply have it available locally for testing purposes.
```bash
$ cd path/to/repo/facebook_webview
$ npm run dev
```
