# React + TypeScript Calculator

This is a simple calculator built with React v18 and TypeScript. It allows the user to perform basic arithmetic operations, such as addition, subtraction, multiplication, and division.

## Features

* The user can input numbers and arithmetic operators using the numeral buttons and operator buttons, respectively.
* The user can chain multiple expressions together, e.g. `50 + 30 - 20`.
* The calculator follows the order of operations (PEMDAS).
* The user can clear the current expression using the `CE` button.
* The user can view the result of the current expression by pressing the `=` button.
* The calculator displays an error message if the current expression cannot be evaluated due to incorrect parentheses or other issues.

## Development

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/GiorgiUbiria/calculator.git`
2. Install the dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`
4. Open [http://localhost:5173](http://localhost:5173/) in your browser to view the calculator.

## Deployment

To deploy the project, follow these steps:

1. Build the project: `npm run build` or `yarn build`
2. Serve the built project using a static file server, such as [serve](https://www.npmjs.com/package/serve).

## License

This project is licensed under the MIT License.
