ReadMe for Attainia Project

NOTE: I used windows command line to build this project

Front End Setup Steps: ( Used Vue.js )

1. open windows Command Prompt
2. navigate to the frontend folder.
3. run command npm install
4. run command npm run dev
5. Then it will create a localhost:8080 that you can then open up on a web browser.


Back End Setup Steps:  (Used Pyton 3.7 + Django )

1. Please make sure that you have Python 3.7 installed on your machine.
2. Please check the box to have the installer setup the ENV variables.
3. After Python is installed Navigate to your computer System Props.
4. Enter Environment Variables
	4a. on user variables click Path and add these new paths: C:\Python37 and C:\Python37\Scripts
5. Still under Environment Variables
	5a. on system variables click Path and add this new path: C:\Python37
	5b. create a new Variable under System Variables named as such: PYTHON_HOME
	5c. for the value, please go to your Python location mine was like this : C:\Users\Kody\AppData\Local\Programs\Python
6. Once all of that is setup, then open windows Command Prompt
7. navigatoe to the backend folder
8. run command pip install virtualenv
9. run command virtual env venv
10.run command venv\Scripts\activate
11.run command pip install django
12.run command pip install django-core-headers
13.run command python manage.py runserver

14. Once you have done all of these steps, the database will now talk to the frontend.


Web Pages:

1. Page 1 will list the Json data.
2. Click the button to have the red highlight on entires that have login_count 1 or higher 
3. Page 2 will list the same Json data
4. Click the button to have the green highlight on entires that have login_count 1 or higher

5. you can toggle the highlights on and off by re-clicking the same buttons.
