/*
    1. Import express & Morgan, set up app variable
*/

/*
    2. Set up middleware
*/

/*
    3. Import Router files
*/
const emojisRouter = require('./routes/emojisRouter');

/*
    4. Set up the URL routes to connect to each router
*/
// localhost:3000/api/v1/emojis
app.use("/api/v1/emojis", emojisRouter);
/*
    5. Set up the port and begin listening
*/
