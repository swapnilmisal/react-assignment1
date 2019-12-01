## React Native / React IS Question

Given a Random User generator API which returns a list of random users for you. The sample response of the API is given below.

Implement a screen with following functionality.<br />

1. Consume the Random User generator API
2. Show users in a list with first and last name with age
3. Have four buttons on top of the list
   1. Sort User By Name Ascending or Descending
   2. Show two youngest users
   3. Edit
      1. On clicking the edit button the checkbox should appear in every row
      2. Once user can select any number of rows
   4. Delete
      1. Once a user selects a minimum of one row in a list. Please enable the button
      2. On clicking the delete button, remove them selected users items from the list.

#### API URL:

https://randomuser.me/api<br />
#### Sample Response:

```json
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Ethan",
        "last": "Wong"
      },
      "login": {
        "uuid": "5ffcd445-6db8-4392-a8e2-e2a8d1b9661f"
      },
      "dob": {
        "date": "1952-02-26T20:32:05.196Z",
        "age": 67
      }
    }
  ]
}
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
