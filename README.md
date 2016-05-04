A Tic-tac-toe data store API
An API to store short stories posted by the user. It allows users to edit, delete and post their short stories to a backend database.

The API does not currently allow users to view or rate other user's stories.

API end-points

Verb	URI Pattern	Controller#Action
POST	/sign-up	users#signup
POST	/sign-in	users#signin
DELETE	/sign-out/:id	users#signout
PATCH	/change-password/:id	users#changepw

DELETE /stories/:id' stories#destroy
GET	/stories	stories#index
POST	/stories	stories#create
PATCH	/stories/:id	stories#update

All data returned from API actions is formatted as JSON.

User actions

Summary:

Request	Response
Verb	URI	body	Status	body
POST	`/sign-up`	credentials	201, Created	user
400 Bad Request	empty
POST	`/sign-in`	credentials	200 OK	user w/token
401 Unauthorized	empty
DELETE	`/sign-out/:id`	empty	201 Created	empty
401 Unauthorized	empty
PATCH	`/change-password/:id`	passwords	204 No Content	user w/token
400 Bad Request	empty

signup

The create action expects a POST of credentials identifying a new user to create, e.g. using getFormFields:

<form>
  <input name="credentials[email]" type="text" value="an@example.email">
  <input name="credentials[password]" type="password" value="an example password">
  <input name="credentials[password_confirmation]" type="password" value="an example password">
</form>
or using JSON:

{
  "credentials": {
    "email": "an@example.email",
    "password": "an example password",
    "password_confirmation": "an example password"
  }
}
The password_confirmation field is optional.

If the request is successful, the response will have an HTTP Status of 201, Created, and the body will be JSON containing the id and email of the new user, e.g.:

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
If the request is unsuccessful, the response will have an HTTP Status of 400 Bad Request, and the response body will be empty.

signin

The signin action expects a POST with credentials identifying a previously registered user, e.g.:

<form>
  <input name="credentials[email]" type="text" value="an@example.email">
  <input name="credentials[password]" type="password" value="an example password">
</form>
or:

{
  "credentials": {
    "email": "an@example.email",
    "password": "an example password"
  }
}
If the request is successful, the response will have an HTTP Status of 200 OK, and the body will be JSON containing the user's id, email, and the token used to authenticate other requests, e.g.:

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "an example authentication token"
  }
}
If the request is unsuccessful, the response will have an HTTP Status of 401 Unauthorized, and the response body will be empty.

signout

The signout actions is a DELETE specifying the id of the user so sign out.

If the request is successful the response will have an HTTP status of 204 No Content.

If the request is unsuccessful, the response will have a status of 401 Unauthorized.

changepw

The changepw action expects a PATCH of passwords specifying the old and new.

If the request is successful the response will have an HTTP status of 204 No Content.

If the request is unsuccessful the reponse will have an HTTP status of 400 Bad Request.

The sign-out and change-password requests must include a valid HTTP header Authorization: Token token=<token> or they will be rejected with a status of 401 Unauthorized.

All server action requests must include a valid HTTP header Authorization: Token token=<token> or they will be rejected with a status of 401 Unauthorized.

All of the server actions, follow the RESTful style.

Stories are associated with the user that posted it and can only be manipulated by them.

index

The index action is a GET that retrieves all the stories associated with a user. The response body will contain JSON containing an array of stories, e.g.:

{
  "stories": [
    {
      "id": 1,
      "title": "sample title",
      "body": "sample body",
      "user_id": 17
      },
    {
      "id": 2,
      "title": "sample title",
      "body": "sample body",
      "user_id": 15
    },
  ]
}

If there are no stories associated with the user, the response body will contain an empty story array, e.g.:

{
  "stories": [
  ]
}

create

The create action expects a POST with a title and body. If the request is successful, the response will have an HTTP Status of 201 Created, and the body will contain JSON of the created stories.

If the request is unsuccessful, the response will have an HTTP Status of 400 Bad Request, and the response body will be JSON describing the errors.

show

The show action is a GET specifing the id of the user to retrieve. If the request is successful the status will be 200, OK, and the response body will contain JSON for the stories requested.

This update action expects an a title and a body to PATCH to join an existing game.

If the request is successful, the response will have an HTTP Status of 200 OK, and the body will be JSON containing the game joined, e.g.:

If the request is unsuccessful, the response will have an HTTP Status of 400 Bad Request, and the response body will be empty.

update a a story

This update action expects a PATCH with changes to to an existing story, e.g.:

<form>
  <input name="story[title]" type="text" value="">
  <input name="story[body]" type="text" value="">
</form>

If the request is successful, the response will have an HTTP Status of 200 OK, and the body will be JSON containing the modified story,

If the request is unsuccessful, the response will have an HTTP Status of 400 Bad Request, and the response body will be JSON describing the errors.
