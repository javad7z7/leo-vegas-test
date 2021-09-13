# Stock Management

Stock Management is a simple Rest-Microservice which maintains the current stock amount for a Product. The product stock can be increased (refill) or decreased (once a customer buys a product).
It is also possible to acquire the current stock of a Product.

The Application initializes the Database by adding a dummy Product with Id: 1 and an initial stock of 100 for test purposes.

### Technologies

- Java 11
- Spring Boot
- H2 embedded memory database

### Building

    $ mvn clean install

### Running

- Running Application using IntelliJ

  - Open Application and Run "StockManagementApplication"

  ![Run IntelliJ](stock-management-raw/run-intellij.png)

- Running in Command Line

  - Use command:

    `$ ./mvnw spring-boot:run`

### Using

- Get a Product by ID

  - `$ curl -s -i -w "\n" -X GET localhost:8080/api/product/1`

- Get just a Product stock by Id

  - `$ curl -s -i -w "\n" -X GET localhost:8080/api/product/1/stock`

- Refill a Product stock

  - `$ curl -s -i -w "\n" -X PUT localhost:8080/api/product/1/refill?amount=5`

- Decrease the Product stock
  - `$ curl -s -i -w "\n" -X PUT localhost:8080/api/product/1/buy?amount=3`
    \*\* Testing the Error case:
  - `$ curl -s -i -w "\n" -X PUT localhost:8080/api/product/1/buy?amount=200`

## install dependencies

- yarn install or npm install

## run client side

- yarn dev or npm run dev

## build app

- yarn build or npm run build

## test client side

- yarn test or npm run test
