# Blogging App

## Backend Routes:
@Route: **GET** */api/user*  
@Desc: LoadUser from the jwt token in x-auth-token header

@Route: **POST** */api/user/login*  
@Desc: Take email, password, match in database, assign jwt

@Route: **POST** */api/user/register*  
@Desc: Take name, username, email, password, store in database, assign jwt