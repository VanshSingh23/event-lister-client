# EventLister

## Overview
EventLister is a full-stack web application designed to provide users with event listings based on city searches. The application fetches event data from the PredictHQ API and displays relevant details, including event name, description, start and end times, and ticket links.

## Features
- Search for events based on city input
- Displays event details such as title, description, start time, and end time
- Provides ticket links for events
- User-friendly interface with real-time data fetching
- Loading spinner for better UX

## Tech Stack
### Frontend:
- React.js
- Axios
- Tailwind CSS

### Backend:
- Node.js
- Express.js
- Axios
- PredictHQ API

## Installation
### Prerequisites:
- Node.js installed
- API token for PredictHQ

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/EventLister.git
   cd EventLister
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your API token:
     ```env
     API_TOKEN=your_api_token_here
     PORT=5000
     ```
4. Start the backend server:
   ```sh
   npm start
   ```
5. Start the frontend:
   ```sh
   cd client
   npm start
   ```

## Summary
EventLister is a full-stack web application designed to provide users with event listings based on city searches. The application fetches event data from the PredictHQ API and displays relevant details, including event name, description, start and end times, and ticket links. The frontend is developed using React.js, while the backend is built using Node.js and Express.js.

## Approach
The development of EventLister followed a structured approach:
- **Frontend Development**: Implemented using React.js, with components for event display and search functionality. Axios is used for API requests, and Tailwind CSS ensures a responsive design.
- **Backend Development**: Built with Express.js, the backend fetches event data from the PredictHQ API. Axios handles external API calls, and environment variables manage API keys.
- **Deployment**: The backend is deployed on Render, ensuring real-time data availability.

## Challenges Faced
- **API Data Handling**: Managing API request limits and ensuring accurate parsing of event data.
- **UI Responsiveness**: Adapting the UI to display varying amounts of event information effectively.
- **Error Handling**: Implementing proper error messages and fallback mechanisms in case of API failures.

## Improvements
- **Optimized API Calls**: Improved API query parameters to fetch more relevant event results.
- **Enhanced User Experience**: Integrated loading spinners and better input validation.
- **Scalability**: Refactored backend code to support future enhancements like authentication and additional filters.

## Future Enhancements
- User authentication and personalization
- Additional filters for event search
- Improved UI/UX design
- More ticket booking integrations

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License.

## Author
Developed by Riya.


