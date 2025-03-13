# Exercise 1D: HTTP Portfolio Lab

---

### Goals:

- Create a live server.
- Serve various web pages.
- Web pages are accessed via various URL extensions.

---

![Portfolio](https://i.imgur.com/azFuYcO.jpg)

It's never too early to think about your Web Developer Portfolio! This won't be the final versions, so try not to spend too much time styling this to look pretty. The purpose is to get you thinking about the following:

- A 1-paragraph career summary
- A set of projects you've created. (Include the projects created in class!)

By the end of this course, you will be creating your portfolio in React and deploying it to the web so that you can simply send people the link to your portfolio. For now, this exercise will give you practice on everything we learned in this unit, and give you an basic understanding on what a website takes to be fully functional.

### Tasks

- Import the HTTP and FS modules.
- Create a server object with route handling code for different web endpoints.
- Create custom HTML files:
  - `localhost:3000/` Home Page, Include an image of yourself and a short introduction.
  - `localhost:3000/projects` Include screenshots of previously built projects, and a short description of each.
  - Any other pages you want to include.
- Set up a nav bar on each HTML file to navigate between pages.

### How To Serve Images and CSS Files

The following code, which you can _and should_ use in your project, allows you to serve CSS and image files without creating routes for them. It does this using a public folder and a catch-all route. Creating a public folder and serving up routes manually is very challenging, and using our code is highly recommended.

Using a public folder for serving static files helps to organize and manage these resources efficiently. It also simplifies the process of accessing these files from the browser. By placing all static files in a dedicated directory, you create a clear structure that separates static assets from your application logic. This approach makes your project more maintainable and scalable.

**Important**: once you have the code added to your project, you will place _all_ CSS and image files in the `public` folder and link them using `src` and `href` attributes that are relative to that folder. For example, if you have a profile pic called `profile.jpg`, you would place it in your `public` folder and render it on your page using `<img src="profile.jpg" />`, _without_ any reference to `public` within the `img` tag. You would do the equivalent with a CSS file and a `link` tag.

To make this work, the following code excerpt should be used as your `else` block in your `http` module code. You can edit it to include a better 404 page if you'd like--as a bonus, you can serve up a proper HTML 404 file that links back to your homepage.

Here is the code:

```js
} else {
    const fileLocation = `./public/${req.url}`;
    const stream = fs.createReadStream(fileLocation);
    stream.on('open', function () {
        stream.pipe(res);
    });

    stream.on('error', function () {
        res.writeHead(404);
        res.write("404: File not found.");
        res.end();
    });
}
```

#### Explanation Of The Code

You do _not_ need to understand exactly how the above code works, but if you'd like to learn more, here is a quick explanation:

1. The overall code block is an `else` statement that catches any request URLs that were not explicitly handled by the previous `if` statements (i.e., /, /about, and /data). This ensures that any other URL will be treated as a request for a static file.

2. Determining The File Location

The code block constructs the full path to the requested file. `req.url` contains the part of the URL after the domain (e.g., /images/logo.png). By prefixing it with `./public/`, the server assumes that all static files are located in the public directory. This helps in organizing your project by keeping all static assets in one place.

3. Creating The Read Stream

The fs.createReadStream method is used to create a readable stream from the file located at `fileLocation`. This stream allows the server to efficiently read and send the file's contents to the client in chunks, rather than reading the entire file into memory at once.

4. Handling Stream Events

4a. The Open Event

The open event is emitted when the file stream is successfully opened. When this event occurs, the script uses the `stream.pipe(res)` method to send the file's contents to the response object (res). This method efficiently sends the data in chunks as they are read from the file, improving performance and reducing memory usage.

4b. The Error Event

The error event is emitted if there is an error while opening or reading the file (e.g., the file doesn't exist). When this event occurs, the script sends a 404 status code and a "File not found" message to the client.

### Project Bonuses

The following bonuses may require you to research how to do this on your own.

- Use a dedicated HTML file for your 404 responses, including a link back to your homepage.
- Style your portfolio to be responsive to screen size (Desktop, Mobile).
- Create a footer on each web page with links to your Github and LinkedIn.
