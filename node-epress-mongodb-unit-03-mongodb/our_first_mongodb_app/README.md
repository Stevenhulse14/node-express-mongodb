# Express.js Pokémon Team Application

## Project Overview

This application is built using Express.js and incorporates middleware, APIs, asynchronous operations, and frontend rendering with EJS. It allows users to view Pokémon from the Pokémon API and add them to custom teams.

## Tools and Dependencies

- **Express:** Web framework for Node.js.
- **Middleware:** Morgan, EJS, URL-encoded, express.json, static files.
- **Node Modules:** Nodemon, Bcrypt, Axios, Mongoose, dotenv, JWT.
- **Security:** Bcrypt, dotenv, JWT.
- **Version Control:** `.gitignore` (ignores sensitive data and node modules).

## Project Structure

```
project-root/
├── api/
│   ├── index.js
│   ├── pokemon.js
│   └── teams.js
├── data/
│   └── teamData.json
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── util/
│   └── randomize.js
├── views/
│   ├── home.ejs
│   ├── pokemon.ejs
│   └── teams.ejs
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Initial Setup

1. **Initialize Project**:

```bash
npm init -y
```

2. **Install Dependencies**:

```bash
npm install express ejs morgan bcrypt axios mongoose dotenv jsonwebtoken
npm install --save-dev nodemon
```

3. **Scripts** (in `package.json`):

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

## Server Configuration (`server.js`)

- Basic Express server listening on port `8000`.
- Middleware setup: morgan, ejs, urlencoded, static files, express.json.

## Routes

- **Home Route (`/`)**: Render `home.ejs`.
- **API Routes (`/api`)**:
  - `/api/pokemon`: Fetch Pokémon data from Pokémon API and render `pokemon.ejs`.
  - `/api/teams`: Display teams data, rendered through `teams.ejs`.

## HTML to EJS Conversion

Convert initial HTML files to EJS for dynamic rendering:

- `home.html` → `home.ejs`
- `pokemon.html` → `pokemon.ejs`
- `teams.html` → `teams.ejs`

## Public Assets

- CSS stylesheet: `public/css/styles.css` (ensure this is linked in EJS files).
- JavaScript handling events: `public/js/main.js`

## Utility Functions

- Modularize random selection logic in: `util/randomize.js`

## Data Storage

- Team data saved locally: `data/teamData.json`

## Interaction and Functionality

- Buttons in `pokemon.ejs` add Pokémon to teams.
- Fetch and display the team data via `/api/teams`.

## CSS Styling

- Enhanced styles in `public/css/styles.css` for a user-friendly interface.

## Security and Sensitive Data

- Ensure `.env` file is configured correctly.
- Use `.gitignore` to exclude `.env` and `node_modules`.

## Error Handling

- Implement `try-catch` blocks and asynchronous operations (`async/await`) for:
  - Database operations
  - API requests
  - File operations

## Running the Application

Start the server in development mode:

```bash
npm run dev
```

Access the application on:

```
http://localhost:8000/
```

## Future Improvements

- Implement frontend with React.
- Enhance security and database integration with MongoDB.

---
