# PROJECT-2
API DB-CINE
## API Endpoints

All API Request must be prepended with /api


### Authentication Endpoints

The Authentication flow for the application is:

METHOD | ENDPOINT            | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|---------------------|-------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup        | -     | User Signup              | name, username, email, password                 | token
POST   | /auth/login         | -     | User Login               | email, password                                 | token
POST   | /auth/employee/login| -     | User Login               | email, password                                 | token



### User Endpoints

METHOD | ENDPOINT                        | TOKEN |  ROL  | DESCRIPTION              | PARAMS                                          | RETURNS
-------|---------------------------------|-------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /users                          | YES   | ADMIN | Get all users            | query: search string                            | name, email
GET    | /users/profile                  | YES   |  ALL  | Get user profile         |                                                 | name, email, age
GET    | /users/pastMovies               | YES   |  ALL  | Get movie history        |                                                 | watched movies
GET    | /users/purchasedMovies          | YES   |  ALL  | Get purchase             |                                                 | watched movies
GET    | /users/:userId                  | YES   | ADMIN | Get one users            | query: search string                            | name, email, age
PUT    | /users/screening/:screeningId   | YES   |  ALL  | Buy screening            |                                                 | Buy screening
PUT    | /users/profile                  | YES   |  ALL  | Modify profile           |                                                 | Modify profile
PUT    | /users/:userId                  | YES   | ADMIN | Modify profile           |                                                 | Modify profile
POST   | /users                          | YES   | ADMIN | Add profile              |      ?????                                      | Add new profile
DELETE | /users/purchasedMovies/:movieId | YES   |  ALL  | Delete movies purchase   |                                                 | Delete	purchase
DELETE | /users/:userId                  | YES   | ADMIN | Delete one user          |                                                 | Delete	purchase
 

### Rooms Endints (rol admin or employee)

METHOD | ENDPOINT         | TOKEN |  ROL  | DESCRIPTION              | PARAMS                                          | RETURNS
-------|------------------|-------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /rooms           | YES   | A, E  | Get a list of rooms      | query: search string                            | List of rooms
GET    | /rooms/:roomId   | YES   | A, E  | Get room number          |                                                 | room number, movie, schedule
POST   | /rooms           | YES   | ADMIN | Add new room             | room number, movie, capacity, time              | New room
PUT    | /rooms/:roomId   | YES   | A, E  | Modify room              | data                                            | New room
DELETE | /rooms/:roomId   | YES   | ADMIN | Delete room              |                                                 | Delete room


### Movies Endpoints 

METHOD | ENDPOINT            | TOKEN | ROL  | DESCRIPTION              | PARAMS                                          | RETURNS
-------|---------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /movies             | YES   |  ALL | Get a list of movies     | query: search string                            | List of movies
GET    | /movies/:movieId    | YES   |  ALL | Get movie                |                                                 | room number, movie
POST   | /movies             | YES   | A, E | Add new movie            | name, time, synopsis, year, genre               | New movie
PUT    | /movies/:movieId    | YES   | A, E | Modify a movie           | data                                            | Modified movie
DELETE | /movies/:movieId    | YES   | A, E | Delete a movie           |                                                 | Delete movie


### Employee Endpoints

METHOD | ENDPOINT              | TOKEN |  ROL  | DESCRIPTION              | PARAMS                                          | RETURNS
-------|-----------------------|-------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /employees            | YES   | ADMIN | Get all employees	  | query: search string                            | name, age, email, schedule
GET    | /employees/profile  ? | YES   | EMPL  | Get a employee profile   |                                                 | name, age, email, schedule
GET    | /employee/:employeeId | YES   | ADMIN | Get one employee         |                                                 | name, age, email, schedule
POST   | /employees            | YES   | ADMIN | Add new employee         | name, age, email, schedule, admin               | New employee
PUT    | /employees/profile    | YES   | EMPL  | Modify profile employee  |                                                 | Modify employee
PUT    | /employees/:userId    | YES   | ADMIN | Modify employee          |                                                 | Modify profile
DELETE | /employees/:userId    | YES   | ADMIN | Delete employee          |                                                 | Delete movie


### Purchases Endpoints 

METHOD | ENDPOINT         | TOKEN |   ROL | DESCRIPTION              | PARAMS                                          | RETURNS
-------|------------------|-------|-------|--------------------------|-------------------------------------------------|--------------------
GET    |  /purch          | YES   |  USER | Get a list of purchase   | query: search string                            | List of purchase
GET    |  /purch/:purchId | YES   |  USER | Get one purchase         |                                                 | Time, movie, capacity, room number
POST   |  /purch          | YES   | ADMIN | Add purchase             |                                                 | New purchase	
PUT    |  /purch/:parched | YES   | ADMIN | Modify purchase          |                                                 | Modify purchase
DELETE |  /purch/:parched | YES   | ADMIN | Delete purchase          |                                                 | Delete purchase


### Screening Endpoints 

METHOD | ENDPOINT           | TOKEN |   ROL | DESCRIPTION              | PARAMS                                          | RETURNS
-------|--------------------|-------|-------|--------------------------|-------------------------------------------------|--------------------
GET    |  /screen           | YES   |  USER | Get a list of screening  | query: search string                            | List of screening
GET    |  /screen/:screenId | YES   |  USER | Get one screening        |                                                 | Time, movie, capacity, room number
POST   |  /screen           | YES   | ADMIN | Add screening            |                                                 | New screening	
PUT    |  /screen/:screenId | YES   | ADMIN | Modify screening         |                                                 | Modify screening
DELETE |  /screen/:screenId | YES   | ADMIN | Delete screening         |                                                 | Delete screening








