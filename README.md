This project was a website where people can search music videos. Compared to other websites, our website provides a unique way for users to find videos they want. User can find videos they want by cumtomize the filter.

Users can easily understand the architecture of the website. All filters such as genres and artists are place on left, Since all videos can be filtered by genre and artist, users can search videos by genre(click one genre), by artist(click one artist), or by genre and artist(if you want to find a specific genre of an artist, click artist and click genre, if want to find artist in a specific genre, click genre and then click artist). Besides, the videos can be sorted either by song name or by artist name just by simply clicking the sort buttons on top left. When users have found videos they want, they can put mouse on the video to play it, this process may take few second since videos need time to be loaded. If Users want to back to original state of the website, just click the logo to get back.

## Setup
1. We are providing a shell script for loading all the videos we need for the website, so before you start, please
run the script first.

   ```bash
   $ sh download.sh
   ```
   
2. Some NPM Scripts are needed for the project.

   Install the dependencies in the local node_modules folder.
      ```bash
      $ npm install
      ```
      
   A React component for playing a variety of URLs, including file paths, YouTube, Facebook, 
   Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, and DailyMotion.
      ```bash
      $ npm install react-player --save
      ```
      
   To add a React Router in a web app
      ```bash
      $ npm install react-router-dom
      ```    
     
   
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
