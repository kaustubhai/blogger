# Blogging App  

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all the dependencies

### `npm start`

To open only the frontend client mode

### `npm run dev`

To open the website (backend+frontend on)

## Backend Routes: 

@Route: **GET** */api/user/dashboard*  
@Desc: Fetch All of the blogs written by any user
___

@Route: **GET** */api/user*  
@Desc: LoadUser from the jwt token in x-auth-token header

@Route: **POST** */api/user/login*  
@Desc: Take email, password, match in database, assign jwt

@Route: **POST** */api/user/register*  
@Desc: Take name, username, email, password, store in database, assign jwt
___
@Route: **POST** */api/blog*  
@Desc: Write a new blog 

@Route: **GET** */api/blog*  
@Desc: Read existing blogs of current user

@Route: **GET** */api/blog/:id*
@Desc: Fetch specific blog

@Route: **PUT** */api/blog/:id*  
@Desc: Update an existing blog 

@Route: **DELETE** */api/blog/:id*  
@Desc: Delete an existing blog 
___
### Complete Guide, [here](https://bit.ly/3aaElR0)