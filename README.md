# Node Express MySQL Sequalize Starter

[![Node version](https://img.shields.io/badge/Node%20-v14.17.3-brightgreen.svg)](https://nodejs.org/uk/blog/release/v14.17.3/)
[![Npm version](https://img.shields.io/badge/Npm%20%20-%3E=%20v6.x.x-brightgreen.svg?logo=npm)](https://nodejs.org/uk/blog/release/v6.0.0/)


## Prerequisites

It's is recommended before start to have a basic knowledge about the following

- [Express](https://www.npmjs.com/package/express)
- [Body Parser](https://www.npmjs.com/package/body-parser)
- [Axios](https://github.com/axios/axios)
- [Nodemon](https://github.com/remy/nodemon)
- [Cors](https://github.com/expressjs/cors)
- [Dotenv](https://github.com/motdotla/dotenv)
- [MySql2](https://github.com/sidorares/node-mysql2)
- [Cors](https://github.com/expressjs/cors)
- [Swagger](https://swagger.io/)
- [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express)
- [Json API](https://jsonapi.org/) with [examples](https://jsonapi.org/examples/) (optional).


## Setup & Run project dependencies

- Open your terminal on the project's root folder & run the following command

  ```bash
  npm install

  npm start
  ```


## Project structure

We are building a simple ecommerce store with to basic entities

1. User.
2. Product.

Each User will have the properties

- `id: varchar` (🔑 primary key use UUID Sequalize).
- `name: string`.
- `createdAt: varchart`.
- `updatedAt: varchart`.

Each Product will have the properties

- `id: varchar` (🔑 primary key ues UUID Sequalize).
- `name: string`.
- `price: number`.
- `createdAt: varchart`.
- `updatedAt: varchart`.

### Folder structure

```bash
./root
└── │
	config						            # This directory contains all configuration files
    │ └── db.js					        # database config
    controllers					        # Controller definitions go here.
	│ ├── UserController.js		    # User Controller
    │ └── ProductController.js	# Product Controller
    model						            # Model definitions go here.
    │ ├── User.js				        # User Model
    │ └── Product.js			      # Product Model
	lib							              # Custom Library files go in this folder
    │ ├── helper.js				      # Helper lib file
    │ └── client.js				      # External http request
	routes						            # Routes definitons go here
    │ └── index.js				      # All api route declarations go here.
	└── .babelrc				          # Babel preset here
	└── .editorconfig				      # Editor config analysis config
	└── .gitignore				        # Git ignore anything
	└── .env					            # Environment depending configs go here in respective files
	└── app.js					           # Main file with setup and configuration for Express
	└── package.json			        # List of project dependencies
```


### API examples

- A <span style="color: green">success</span> response

  Searching for a list of products those matching some criteria

  `[GET]` `http://localhost:3001/api/products?page=1&limit=50&sort=asc&sort_by=createdAt`

  Should return a response like the following

  ```json
  {
    "data": [
      {
        "id": 1,
        "name": "Samsung Galaxy S5",
        "price": 5000,
      },
      {
        "id": 2,
        "name": "Samsung Galaxy S6",
        "price": 4500,
      },
      {
        "id": 15,
        "name": "Samsung 32 Inch HD LED Standard TV - UA32K4000",
        "price": 3550,
      }
    ],
    "meta": {
      "page": 1,
      "total": 10,
      "limit": 50,
      "totalPages": 100
    }
  }
  ```

- A <span style="color: #FF9966">bad-request</span> response

  Try to create a new product with a name that is already exists in the database

  `[POST]` `http://localhost:3001/api/products`

  ```json
  {
    "name": "Samsung Galaxy S5",
    "price": 12300.0,
    "categoryId": 1
  }
  ```

  Should return a response like the following

  ```json
  {
    "errors": [
      {
        "code": 7,
        "source": "name",
        "title": "Field value already exists",
        "detail": "Product name already exists"
      }
    ]
  }
  ```

- The <span style="color: red">internal server error</span>, <span style="color: #cc0">un-authenticated</span> and <span style="color: #ffcc00">forbidden</span> responses should follow the same convention.


## Static code analysis

We are using the following plugins to statically analysis our code

- [ESLint](https://eslint.org/).
- [Prettier](https://prettier.io/).
- [Lint-Staged](https://www.npmjs.com/package/lint-staged).


## Stay in touch
- Author - [Ilham Sabir](https://ilhamsabir.github.io)
- Twitter - [@ilhamsabir](https://twitter.com/ilhamsabir)