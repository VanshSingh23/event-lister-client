# event-lister-client

EventLister is a full-stack web application that allows users to search for events happening in a specific city. The application fetches event data using an external API and displays it in a user-friendly interface. Users can also find ticket links for events.

# Features

1. Search for events by city name

2. Display event details including title, description, start time, end time, and duration

3. Get ticket links for events

4. Responsive and user-friendly interface

5. Gmail validation before redirecting to ticket purchase

# Technologies Used

1. Frontend

    - React.js

    - Axios

    - Tailwind CSS

2. Backend

    - Node.js

    - Express.js

    - Axios

    - PredictHQ API (for event data)

# Installation

1. Prerequisites

2. Node.js installed

3. An API key from PredictHQ

# Steps

1. Clone the repository:

    git clone https://github.com/your-username/EventLister.git

2. Navigate to the project directory:

    cd EventLister

3. Install dependencies for both frontend and backend:

    cd client
    npm install

    cd ../server
    npm install

4. Create a .env file in the server directory and add your API key:

    API_TOKEN=your_predictHQ_api_key
    PORT=your_port

5. Start the backend server:

    npm start

6. Start the frontend application:

    cd ../client
    npm start

7. Open the application in your browser at:

    http://localhost:

# Deployment

1.The backend is deployed on Render.

2.The frontend is deployed on Vercel.

# Report

1. Summary

EventLister is a full-stack web application designed to provide users with event listings based on city searches. The application fetches event data from the PredictHQ API and displays relevant details, including event name, description, start and end times, and ticket links. The frontend is developed using React.js, while the backend is built using Node.js and Express.js.

2. Approach

    The development of EventLister followed a structured approach:

    Frontend Development: Implemented using React.js, with components for event display and search functionality. Axios is used for API requests, and Tailwind CSS ensures a responsive design.

    Backend Development: Built with Express.js, the backend fetches event data from the PredictHQ API. Axios handles external API calls, and environment variables manage API keys.

    Deployment: The backend is deployed on Render, ensuring real-time data availability.

3. Challenges Faced

    API Data Handling: Managing API request limits and ensuring accurate parsing of event data.

    UI Responsiveness: Adapting the UI to display varying amounts of event information effectively.

    Error Handling: Implementing proper error messages and fallback mechanisms in case of API failures.

4. Improvements

    Optimized API Calls: Improved API query parameters to fetch more relevant event results.

    Enhanced User Experience: Integrated loading spinners and better input validation.

    Scalability: Refactored backend code to support future enhancements like authentication and additional filters.

    Future Enhancements

    User authentication and personalization

    Additional filters for event search

    Improved UI/UX design

    More ticket booking integrations
