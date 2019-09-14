# Neightborhood Map: Geneva
Single-page application displaying a map and interactive list of locations in Geneva, Switzerland, created as the final project for Udacity’s Front-End Web Developer Nanodegree

## Instructions
### Setup
- npm install
- npm start
  - Service Worker will run only if build process is completed, and not in development mode
### Map
  - Map will load and initialize on the right for desktop and tablet or top for mobile, with all results from list
  - Map displays all locations in list as markers on the map
  - Clicking a marker will quickly animate the location's marker once and display its info to the panel's info-window
  - Selected locations from the Panel list will center the map to the location marker and animate until the user interacts
  - Zoom controls in the bottom-right corner of the map will zoom in or out with user clicks
### Panel
  - Panel will be displayed on left for desktop and tablet or bottom for mobile
  - Project Title is listed at top of panel
  - An overview of Geneva from Wikimedia API is displayed in the info-window beneath the title
  - Options to filter location list are displayed beneath the info-window
  - By default all list locations are displayed until a filter is selected by user
  - Click the location's select button to display info from Maps API in info-window and animate the loaction marker on the map
### Errors
  - Error messages are displayed to the console and can be viewed with dev tools
