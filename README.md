# Chat-app for SSS Assignment 

IT21836336 Peiris E.K.C.P
IT21832062 Maleesha keshan


Chattapp is a simple chat application that allows users to communicate in real-time. The application consists of a client and a server component, both of which are built using JavaScript.

## Features

- Real-time messaging
- User authentication
- Chat rooms
- Typing indicators
- Spam detection machine learning model

## Technologies Used

- Node.js
- Express
- Socket.io
- MongoDB (for user authentication and message storage)
- HTML, CSS, and JavaScript for the front end
- Tensorflow for machine learning (spam detection)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/IT21836336/sss-v2.git
    cd Chattapp
    ```

2. Install the server dependencies:
    ```bash
    cd server
    npm install
    ```

3. Install the client dependencies:
    ```bash
    cd ../client
    npm install
    ```
4  Install Socket dependencies:

    cd socket
    npm install
    ...

## Usage

1. Start the server:
    ```bash
    cd server
    npm start
    ```

2. Start the client:
    ```bash
    cd ../client
    npm run dev 
    ```
3.Start Socket.io:

    cd socket
    node index.js

4. Open your browser and navigate to vite localhost address shown on the terminal. to use the chat application.

## Project Structure

- `client/`: Contains the front-end code
- `server/`: Contains the back-end code
- `package.json`: Node.js dependencies for both client and server

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

