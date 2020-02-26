# Dept Technical Test - React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development Setup
```
# install deps
yarn install

# build dist files
yarn build

# serve examples at localhost:3000
yarn start
```

## Decisions

### Axios

I've used axios to make HTTP requests vs other options such as fetch mainly as its a popular well supported library that has better browser support than alternative such as the Fetch API.

In larger applications I would pull the API calls out into a seperate API service file, however as this app is relatively small I saw moving this out of the actions unneccessary.

### MomentJs

I've choosen to use moment.js as a date time framework for managing and manipulating dates. JS dates can be scary and trying to format them youself often leads to issues futher down the line, hence why this frameworks exist.

Moment.js was chosen vs. other newer datetime frameworks for reasons similar to picking Axios, it is well supported, well documented and I have previous experience with using the framework.

In future depending on the purposes of the application, I would review moment's packages as moment.locale.js is included, a fairy chunky package that allows for different date formats from different countries. This may not be needed as the build spec references cities in the United Kingdom.

### Redux

I've used redux as a state management library to help me manage state across containers and components throughout the app. Other options are available such as Mobx but again, Redux is one of the most popular and I have previous experience using it.

### ESLint

I've decided to use the super strict AirBnB config with ESLint for code linting on this project. Although I don't agree with every rule I felt it one of the most recognised and personally like a consistent code style.

### Container Pattern

In this app I've used the container pattern when building components. This allows for separation of concerns. The container component is worried about how things work, while the presentation component worries about how things look; this separation opens up the possibility of component re-use in the future.

### Cities API Call

I opted to call the cities API to get a list of cities on component mount. The alternative would have been to call the API when the search input changed and let the back-end do the filtering. However this would result in multiple API calls per searched city, and wouldn't be as quick as filtering client side.

## Recommendations &amp; notes
While coding this app I have had some thoughts and feedback. But didn't want to action them as I wanted to stick to the spec & design.

1. Knowing the context of the app would potentially change my approach. Some of the CSS rules assume this is a full screen app and height and width is set to 100% to achieve a full screen gradient. However if this app was to put as part of a section within a webpage, then this would need to change.
2. The autocomplete dropdown pushes other elements down the page when the results from the filtered cities change. Personally I think I'd prefer it if this didn't and instead overflowed elements below where necessary. At the moment the pinned results jump around the page when you type into the search box.
