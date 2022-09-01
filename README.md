# tech-blog

A blog site that allows users to posts and comment on other user's post. To get started, simply create an account and post away. If you made a mistake on a post, you can are free to navigate to your dashboard to view your posts and edit as you see fit.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Question](#questions)

## Dependencies
### Core
- express-handlebars
- express-session
- bcrypt
- sequelize

    npm i express-handlebars express-session bcrpyt sequelize

### Other
- mysql2
- dotenv

    npm i mysql2 dotenv

## Usage
### Environment Variable Setup
This application uses the environment variables to initialize its database.
- ```DB_NAME```: database name
- ```DB_USER```: database username
- ```DB_PASS```: database user password

### Default Database Creation
This application requires a database of the name ```tech_blog_db```.

If using MySQL2 where ```[USERNAME]``` is replaced with the database user that will handle the reading and writing into database.

    mysql -u [USERNAME] -p

A password may be prompted if one is attached to the user. Once logged in, proceed with the generation of the database.

    source db/schema.sql

### Starting
Once you have initialized the database, proceed with the table generation of running of the program via:

    npm start

## Examples
### Application Screenshot
![Site Preview](/images/site-prev.png)

### Website
https://gentle-lake-33039.herokuapp.com/

## Questions
[jcgcristel's GitHub](https://github.com/jcgcristel)

For additional questions, you can email me at [jcg.cristel@gmail.com](mailto:jcg.cristel@gmail.com.).

