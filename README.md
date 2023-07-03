# Tweets App

Tweets App is a simple React application consisting of two pages - Home and Tweets. React Router Dom is used for routing, enabling users to navigate between the two pages.

## Home Page

The Home page contains a header with two links - Home and Tweets. Clicking on these links takes the user to the corresponding pages. Below the header, there is a Hero section with a welcoming message "Welcome to Tweets".

## Tweets Page

The Tweets page also features the aforementioned header. In the main section, there is a button "Back" that allows users to go back to the Home page. Below the "Back" button, there is a filter in the form of a dropdown with three options - Show all, Follow, and Following.

The list of users, whose data is obtained from the backend at mockapi.io, is displayed below the filter. Each user's card displays their photo, number of tweets, and number of followers. Additionally, there is a Follow button, which increases the number of followers by 1 when clicked. The button text changes to Following after the user has been followed. Clicking the button again reverses the action. Initially, the list displays three users, but the Load more button, located below the list, allows users to load three more users at a time. If there are no more users to load, the Load more button disappears.

## Technology Stack:

### React

- a JavaScript library for building user interfaces.

### react-router-dom

- a library for declarative routing in web applications using React.

### axios

- a promise-based library for making HTTP requests from the browser.

### styled-components

- a CSS-in-JS library that allows you to write actual CSS code to style your components.

### react-icons

- a library of icons for React.
  ### react-dropdown
  - a library for creating dropdown menus in React.

### Backend:

- mockapi.io

To run the application, clone the repository, navigate to the project directory in your terminal, run **npm install** to install the dependencies, and then run
**npm start**
to start the application. After that, the application will be available at http://localhost:3000/test-task-goit.
