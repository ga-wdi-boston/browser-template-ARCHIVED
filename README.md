
This app will allow users to write and post short stories to a database. The user will be able to read edit and delete their stories. Later features will be added to catagorize each story by genre. Additional features will include being able to read stories posted by other users and rate them. Top rated stories will appear at the top of the feed.


USER STORIES
As a user I want to be able to write and post stories to my account. I want to also be able to edit and delete.


PROBLEMS:
-Refreshing page without reloading after GET, POST, PATCH AND DELETE
-Populating the stories to the page with the newest being posted to the top


APPROACH
Used javascript for the front end to register user clicks and send information back and fourth from the back end.

Used ruby on rails for the backend to save information into the database and to serve up it up to the front end.

Used two tables with a one to one relationship. one table for the users and one for the stories. The user table contains ID, email, password and token.  The stories table contains ID, title, body and ID of the user who created the story.
