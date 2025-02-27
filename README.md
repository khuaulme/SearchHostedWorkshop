# Notice: Repository Deprecation
This repository is deprecated and no longer actively maintained. It contains outdated code examples or practices that do not align with current MongoDB best practices. While the repository remains accessible for reference purposes, we strongly discourage its use in production environments.
Users should be aware that this repository will not receive any further updates, bug fixes, or security patches. This code may expose you to security vulnerabilities, compatibility issues with current MongoDB versions, and potential performance problems. Any implementation based on this repository is at the user's own risk.
For up-to-date resources, please refer to the [MongoDB Developer Center](https://mongodb.com/developer).


## Atlas Search Workshop

Hello! 👋 Do you want to run an Atlas Search Workshop the easy way? Clone this repo!

https://www.atlassearchworkshop.com

<br/>
<div align="center">
<img src="WorkshopWebsite.png" width="650"  />
</div>
<br/>

In the hosted Atlas Search Workshop application, you'll find:

- a Google document with step-by-step instructions
- an embedded CodeSandbox (ready to fork for workshop attendees) with the code for the MongoDB Netflix Clone found at www.atlassearchmovies.com (https://github.com/khuaulme/AtlasSearchWorkshop2022)

<br/>
<div align="center">
<img src="NetflixClone.png" width="650"  />
</div>
<br/>
<p> By building out the MongoDB Netflix Clone application, you'll demonstrate all sorts of  complex, fine-grained full-text searches on your Atlas data.</p>

Current features implemented in this Movie Search Engine demo application include:

- fuzzy matching
- highlighting
- autocomplete
- relevance-based scoring
- custom function scoring

Future Atlas Search features to implement can include:

- [ ] facets
- [ ] synonyms

<h2 align="center"><a href="netflixclone-xwaaq.mongodbstitch.com/">www.atlassearchmovies.com</a></h2>

<p>The movie search application was created using:</p>

- React
- MongoDB Realm for backend HTTPs endpoints and webhooks
- The Atlas sample dataset of sample_mflix.movies

<br/>
<div align="center">
<img src="NetflixArchitecture.png" width="650"  />
</div>
<br/>

<h3>API Points of Integration</h3>
This application is hosted entirely on Realm and calls 2 API endpoints:
 
 * getProductsEndpoint in the Home.js page on line 24
 * Suggestions_AC_Endpoint, used for autocompleted product names, in the Header.js component on line 17.

<h3>Attendee Prerequisites:</h3>

- A MongoDB Atlas account. Get one for free <a href="https://www.mongodb.com/cloud/atlas">here.</a>
- A recent version of Node.js and npm.
- Atlas sample dataset
- (Recommended) <a href="https://www.mongodb.com/try/download/compass">MongoDB Compass - GUI (optional)</a>

<h2>Workshop Attendees Will Need to:</h2>

<ol>
<li> Load data to Atlas cluster:
<ul>
<li>database: <code>sample_mflix</code></li>
<li>collection: <code>movies</code></li>
</ul>
</li>

<li> Create Search indexes.</li>
<li> Create a Realm Application.</li>
<li> Create 2 HTTP Endpoints inside of Realm.</li>
</ol>

<h2>To Build and Run this Search Workshop Application:</h2>

1. Clone the repo.
2. Navigate inside directory.
3. Run <code>npm install</code> .
4. Run <code>npm start </code> .

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

<h2>To Customize this Workshop:</h2>
The workshop is all entirely on App.js with the following React components:
<div >
<img src="Top.png" width="550"  />
<img src="Bottom.png" width="550"  />
</div>

Feel free to customize for the event name and details, presenters, resources or even the git repo in the embedded code sandbox.

<h2>Special Thanks </h2>
<br/>

<div align="center">
<img  src="thanks.png" width="350"  />
</div>
<p><b>Brian Leonard</b> - In my 4+ years at MongoDB, I have never written a workshop that wasn't ripped off of Brian in some way. #BeLikeBrian<br></br>
<b>Snehal Bhatia</b>- That Google doc, tho!</p>

<br/>

Also please join our online <a href="https://developer.mongodb.com/community/forums/">MongoDB Community</a> to interact with our product and engineering teams along with thousands of other MongoDB and Realm users. <br/><br/>Have fun and happy coding!
