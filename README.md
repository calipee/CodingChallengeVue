# VueJs Test Application

## How to use

Run `npm install`. 

### backend
Go to [backend](backend) and run
```nodejs
npm run start
```

### frontend
Go to [frontend](frontend) and run
```nodejs
npm run serve
```

Then you can open the website at http://localhost:8080.

Run tests in backend or frontend with
```nodejs
npm test
```

## requirements
- [x] When the page is loaded, the app queries the current counter value from the
backend.
- [x] There should be a button that allows the user to increase the counter value by 1 every
time it is hit.
- [x] The displayed counter value should be updated.
- [x] All users that are on the page should always see the current value.
- [x] When another user enters the site, the current counter value is shown.
- [x] The application should store a history of the last 5 timestamps when the counter was
increased. However, they must not be shown to the user.
- [x] Storing data only during runtime is enough


## constrains
- [x] Use the vue-cli to make things easier.
- [x] The frontend does not need to be visually appealing but keep an eye on clean code.
- [x] Write a .gitignore file.
- [x] Provide tests to verify your code for both applications (frontend and backend). Use a testing framework like vitest or jest for your tests.
- [x] Make sure that your tests for your frontend must be executable without your backend
running in parallel.