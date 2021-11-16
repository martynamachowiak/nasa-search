# Nasa search

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/search](http://localhost:3000/search) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Structure

I decided to organise app files into directories based in their purpose.
This way app is prepared for scaling up, while keeping meaningful structure.
At the same time each components has their own folder containing all necessary files, including child components, styles and tests, so it's easy relocate them when needed.

## Styling strategy

I decided to use CSS stylesheets because:

- This is a small application and it's unlikely to run onto global namespace issue. Using BEM as class names convention helps reducing that risk and achieve meaningful class names.
- Switching to `styled-components` should be relatively quick in case this application would scale up.

## Further improvements

1. Unit tests for each component and `getImages()` request.
2. Improve styling, as I would consider this level as only initial, even for MVP.
3. Pagination, which should make loading assets smoother. Search results could display up to 36-40 items, the next part would be loaded when user clicks on "more" button.
4. Lazy loading for assets to improve performance and user experience.
5. Adding animated loader.
