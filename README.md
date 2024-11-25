
# Weather Journal App

This project is part of the Udacity Front-End Web Developer Nanodegree program. The Weather Journal app allows users to input their zip code and feelings, fetches weather data using the OpenWeatherMap API, and displays the weather information along with the user's input on the UI.

## Udacity Course

This project is part of the **Udacity Front-End Web Developer Nanodegree**. You can find the starter code for this project [here](https://github.com/udacity/fend/tree/refresh-2019).

## Features

- Allows users to enter a zip code and their feelings.
- Fetches weather data based on the zip code entered using the OpenWeatherMap API.
- Displays the weather information along with the user's feelings on the UI.
- Uses Express.js for the server and stores the data on the server.
- The server has a script to run with the command `npm run start`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-journal.git
   cd weather-journal
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run start
   ```

4. Open your browser and go to `http://localhost:8080` to use the app.

## File Structure

- **index.html**: The main HTML file for the app's structure.
- **style.css**: The stylesheet for styling the app.
- **app.js**: The JavaScript file that handles the UI updates and API interactions.
- **server.js**: The Express.js server file that handles data storage and serves the app.

## Dependencies

- **Express**: Web framework for Node.js.
- **Body-Parser**: Middleware for handling POST requests and parsing JSON.
- **CORS**: Middleware for handling cross-origin requests.
- **OpenWeatherMap API**: Used to fetch weather data based on the zip code.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to Udacity for providing the course and starter code.
- The weather data is provided by the [OpenWeatherMap API](https://openweathermap.org/api).
