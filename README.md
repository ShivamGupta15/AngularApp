# AngularApp
Practiced form data and submitting data to mysql using Express nodejs.
App is designed to enroll a person by entering their details.
Form cross checks the data entered such as email and phone from the database to warn if the data already exists.


# Steps before starting App
1. First go to serverdirectory and opren enrolldetails.js file and edit your mysql details like hostname,database name,user,password etc.
2. Create a mysql database having 4 columns as name,email,phone,topic(only phone will be set to long datatype and rest will be varchar).
3. To install module go to project directory and type npm init in the terminal
 # to run application
 1. first run server.js file from terminal, to do this go to server directory and type node server in the terminal to run the backend server.
 2. open a new terminal and go to myapp directory and run ng serve command.
 3. open browser go to localhost:4200 and click on forms tab from the menu.
 
 # Debug.
 
 Run dev tools in browser to see whats going in background of the appication.
