# BC_Platforms_ASSIGN

[![View Code](https://img.shields.io/badge/View%20-Code-green)](https://github.com/tta2yta/BC_Platforms_ASSIGN/pulls)
[![Github Issues](https://img.shields.io/badge/GitHub-Issues-orange)](https://github.com/tta2yta/BC_Platforms_ASSIGN/issues)


## Content

<a text-align="center" href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#live">Live Demo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#screenshots">Screenshots</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#setup">Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#author">Author</a>


## About <a name = "about"></a>

 An assignment to test problem-solving and backend development skills, assuming a case to synchronizing user roles from a customer’s Azure AD (Active
Directory) to local system’s access rights.


## 🔧 Built with<a name = "with"></a>

- ES6
- HTML
- CSS
- React
- Node

## 🔨 Setup<a name = "setup"></a>
### Run a Local Copy for server(nodejs)
- Download the repository to a local directory on your computer.
- Or run the following commands on the terminal
-  $ git clone https://github.com/tta2yta/BC_Platforms_ASSIGN.git
- $ cd server
-  $ npm install
-  $ npm start (This is the development mode)

### Run a Local Copy for client(reactjs)
- Download the repository to a local directory on your computer.
- Or run the following commands on the terminal
-  $ git clone https://github.com/tta2yta/BC_Platforms_ASSIGN.git
- $ cd client
-  $ npm install
-  $ npm start (This is the development mode)
-  $ npm run build (This is the production mode)

## Run Test (Functional Testing)
 You can test the application with two ways, with postman and front-end React application
### Test server with postman
- make sure you run command ($ npm start ). The server will start listing at port 8000.
- Open PostMan and create post api request with the url =  127.0.01:8000/roles/customer-role or http://127.0.01:8000/roles/customer-role
   ![image](https://user-images.githubusercontent.com/56317574/178114564-d4dc92df-fbd2-4b2f-b512-f5c962d0ac5c.png)

- In the body section of the post api requet select **json** type format to send json format data to server
   ![image](https://user-images.githubusercontent.com/56317574/178114721-a6b7d3ca-f0e3-4acb-b1cf-c16c285539bd.png)

- Write the following json data or the json displayed in the above image in the editor and click send button <br>
  <pre>
  {
    "name":"person-1",
    "roles":[
        {"role":"002 - Clinical personnel"},
        {"role":"003 - Warehouse personnel"}
    ]
   }
</pre> <br>

- Finally, you will receive the following result
    ![image](https://user-images.githubusercontent.com/56317574/178114908-3bfee331-76e1-414e-a836-ee97c7e187fe.png)

### Test server with Front-end React application
- make sure you run command ($ npm start ). Default port the application running is 3000.
- You will see the following GUI
   ![image](https://user-images.githubusercontent.com/56317574/178115502-e41b382c-85e3-4b87-95f0-0eb24423b1f2.png)
- Type name, select customer roles from list of options and select submit
   ![image](https://user-images.githubusercontent.com/56317574/178115556-13bec890-d3e7-456b-8810-b40860433132.png)
- Once you clicked the submit, you will get the synchronized role below the submit button
   ![image](https://user-images.githubusercontent.com/56317574/178115629-c0ef9c84-c628-48af-8be4-f9b000e620f3.png)


## Prerequisites<a name = "prerequisites"></a>
- npm
- A modern up-to-date browser
- Text Editor

## ✒️  Author <a name = "author"></a>

👤 **Tedros Tesfay**

- Github: [@tta2yta](https://github.com/tta2yta)
- Twitter: [@Tedros12859799](https://twitter.com/Tedros12859799)
- Linkedin: [@tedros-tesfay-489422111](https://www.linkedin.com/in/tedros-tesfay-489422111/)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/tta2yta/BC_Platforms_ASSIGN/issues).


## 👍 Show your support

Give a ⭐️ if you like this project!

</div>
