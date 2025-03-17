Here’s a step-by-step guide to setting up an **npm project** that installs `nodemon` and `express`, initializes a Git repository, and pushes it to GitHub. 🚀

---

## **📌 Steps to Follow**

### 1️⃣ Create a New Project Directory

```sh
mkdir my-node-app
cd my-node-app
```

### 2️⃣ Initialize the NPM Project

```sh
npm init -y  # Creates a package.json file with default values
```

### 3️⃣ Install Dependencies

```sh
npm install express  # Installs Express.js
npm install --save-dev nodemon  # Installs nodemon as a dev dependency
```

### 4️⃣ Update `package.json` for Auto-Restart (Optional)

Edit the **scripts** section in `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

---

### 5️⃣ Create `index.js` (Basic Express Server)

```sh
touch index.js
```

Paste the following into `index.js`:

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World! 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

### 6️⃣ Initialize a Git Repository & Commit

```sh
git init  # Initialize Git repository
echo "node_modules/" >> .gitignore  # Ignore node_modules
git add .  # Add all files
git commit -m "Initial commit with Express and Nodemon"
```

---

### 7️⃣ Create a New Repository on GitHub

1. Go to **GitHub** and create a **new repository** (without a README, .gitignore, or license).
2. Copy the **remote repository URL**.

---

### 8️⃣ Connect Local Repo to GitHub & Push

```sh
git remote add origin <your-repo-url>
git branch -M main  # Rename default branch to main
git push -u origin main  # Push to GitHub
```

---

### 9️⃣ Run the Server 🚀

```sh
npm run dev  # Runs the app with nodemon
```

Now, visit **http://localhost:3000** in your browser, and you should see:

```
Hello, World! 🚀
```

---

### **🎯 Summary**

✅ Initialized `npm` project  
✅ Installed `express` and `nodemon`  
✅ Created a basic Express server  
✅ Initialized Git and pushed to GitHub  
✅ Ready to develop! 🎉

Would you like to add **ESLint**, **Prettier**, or Docker support? 🤔
