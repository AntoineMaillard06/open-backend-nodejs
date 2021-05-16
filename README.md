# OPBack

My open source backend code wrote with express.

# In development

## How to use it

```json
/*

  example config.json
  Modules:
    - Database

*/
{
  "environment": "dev",
  "port": 3000,

  "modules": {
    "Database": {
      "used": true,
      "datas": [
        { /******************** mysql ******************/
          "name": "mysqlDB",
          "type": "mysql",
          "conn": {
            "connectionLimit": 10,
            "host": "localhost",
            "user": "me",
            "password": "secret",
            "database": "my_db"
          }
        },
        { /******************** mongo ******************/
          "name": "mongoDB",
          "type": "mongo",
          "conn": {
            "uri": "mongodb://localhost/test",
            "options": {
              "useNewUrlParser": true
            }
          }
        }
      ]
    }
  }
}
```

### Database module

Set up your databases configuration in ***config.json***.

To use the module, in `modules` set `Database.used` to `true`.

Actually two database types are supported:
 - mysql
 - mongo

In `Database.datas` create an array with your database configurations;
these configurations have to contain a `name`, a `type` and a `conn`.

 - `name` is a string that defined the variable name you will use to access your database object. This string have to follow the [javascript variable naming rules](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#variable_naming).
 - `type` is a string that defined the database type you will use. Actually **'mysql'** or **'mongo'**.
 - `conn` is an object that will be used to create database connections.
   - For **mysql** configurations please refer to [this page](https://www.npmjs.com/package/mysql#connection-options).
   - For **mongo** configurations please be sure to set `conn.uri` with this format: `mongodb://username:password@host:port/database`. Also you have to set `conn.options` that is the option object. For more informations please refer to [this page](https://mongoosejs.com/docs/connections.html).



## Contribute

### Adding modules

### Adding routes
