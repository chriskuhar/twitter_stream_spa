To run the project:

* copy the .env_default and rename the copy to .env
    * paste your twitter application bearer token in the .env file
* run `npm i` in root directory
* run `npm start:all`

Navigate browser to http://http://localhost:4200/ for the single page app.

You can now hit `http://localhost:3121/api/v1/tweet-stats` for an API response containing the total number of tweets processed and the top five hashtags seen.
