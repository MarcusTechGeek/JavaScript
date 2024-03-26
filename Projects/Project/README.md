SalonDB-Solutions

SalonDB-Solutions is a web application that provides a simple login and registration system for a hair salon. It features a user-friendly interface and secure authentication using bcrypt for password hashing.

Prerequisites
Before running the application, ensure you have the following installed:

Node.js (v12 or later)
npm (Node Package Manager)
Installation

1)Clone the repository: git clone https://github.com/MarcusTechGeek/JavaScript.git

2)cd salondb-solutions:  cd .\Projects\Project\

3)Install the Required dependencies: npm install
"This command will install the following packages specified in package.json:

-bcrypt (for password hashing)
-cors (for handling Cross-Origin Resource Sharing)
-express (web application framework for Node.js)
-sqlite3 (SQLite database driver)"

Usage
1)Start the server: node server.js

This will start the server at http://localhost:3000.

2)Run the html index dockument in chrome.
3)Insure the  http://localhost:3000 is displaying as running in your termenal.
4)You should see the login and registration forms on the web page.
5)Use the provided forms to register a new user or log in with an existing account.

Database
This application uses an SQLite database named users.db to store user credentials. The database will be created automatically if it doesn't exist.

Contributing
If you'd like to contribute to this project, please follow these steps:

1)Fork the repository
2)Create a new branch (git checkout -b feature/your-feature)
3)Commit your changes (git commit -am 'Add some feature')
4)Push to the branch (git push origin feature/your-feature)
5)Create a new Pull Request
