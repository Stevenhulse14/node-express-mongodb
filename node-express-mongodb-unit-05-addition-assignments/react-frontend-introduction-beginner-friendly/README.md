Awesome! Here's a clear, **step-by-step instructional guide** for students to follow for each of the three React beginner projects. This version assumes zero prior knowledge beyond basic JavaScript and introduces each concept gradually. Each project builds on the last and gives students the **why**, not just the **how**.

---

# 📚 React Basics Student Instructions

---

## 🚀 Before You Start

### Install Node.js (if you haven’t yet):

- Go to [https://nodejs.org/](https://nodejs.org/) and download the **LTS version**.

### Install Create React App:

```bash
npx create-react-app my-app
```

> You’ll use this to scaffold your React projects. Run it in your terminal, then rename your project folder based on the project name (like `counter-app`).

---

## 📘 Project 1: Counter App

### 🎯 Objective

Make a simple app that shows a number on the screen, with buttons to increase, decrease, or reset that number.

---

### ✅ Step-by-Step Instructions

1. **Create the app:**

   ```bash
   npx create-react-app counter-app
   cd counter-app
   npm start
   ```

2. **Open `src/App.js` in your code editor.**

3. **Delete everything inside the return block** and replace it with:

   ```jsx
   <div style={{ textAlign: "center", marginTop: "50px" }}>
     <h1>Counter App</h1>
     <h2>{count}</h2>
     <button onClick={() => setCount(count + 1)}>➕ Increment</button>
     <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
     <button onClick={() => setCount(0)}>🔄 Reset</button>
   </div>
   ```

4. **Now, add state to store the number:**

   - At the top of your `App` function:

   ```js
   const [count, setCount] = useState(0);
   ```

5. **Don’t forget to import `useState`:**

   ```js
   import React, { useState } from "react";
   ```

6. 💥 Save and test your app in the browser — it should now be interactive!

---

### 🔍 What You Learned

- How to use `useState` to track dynamic data.
- How to write event handlers for buttons.
- How JSX allows you to write HTML-like code inside JavaScript.

---

## 📘 Project 2: To-Do List

### 🎯 Objective

Create a basic to-do list that lets users add and delete tasks.

---

### ✅ Step-by-Step Instructions

1. **Create the app:**

   ```bash
   npx create-react-app todo-list
   cd todo-list
   npm start
   ```

2. **Open `App.js` and replace the contents with this basic layout:**

   ```jsx
   import React, { useState } from "react";

   function App() {
     const [task, setTask] = useState("");
     const [tasks, setTasks] = useState([]);

     const handleAdd = () => {
       if (task.trim() === "") return;
       setTasks([...tasks, task]);
       setTask("");
     };

     const handleRemove = (indexToRemove) => {
       setTasks(tasks.filter((_, index) => index !== indexToRemove));
     };

     return (
       <div style={{ textAlign: "center", marginTop: "40px" }}>
         <h1>📝 To-Do List</h1>
         <input
           value={task}
           onChange={(e) => setTask(e.target.value)}
           placeholder="Enter a task"
         />
         <button onClick={handleAdd}>➕ Add</button>

         <ul style={{ listStyle: "none", padding: 0 }}>
           {tasks.map((item, index) => (
             <li key={index}>
               {item}{" "}
               <button onClick={() => handleRemove(index)}>❌ Remove</button>
             </li>
           ))}
         </ul>
       </div>
     );
   }

   export default App;
   ```

3. **Make sure you understand each part:**
   - `useState` is used twice: once for the input, once for the list.
   - `onChange` updates the task text.
   - `.map()` is used to loop through and display tasks.

---

### 🔍 What You Learned

- Handling form input in React.
- Updating arrays in state.
- Mapping over lists and dynamically generating components.

---

## 📘 Project 3: Profile Toggle Card

### 🎯 Objective

Create a user profile card that can be shown or hidden with a button click.

---

### ✅ Step-by-Step Instructions

1. **Create the app:**

   ```bash
   npx create-react-app profile-toggle
   cd profile-toggle
   npm start
   ```

2. **Create a new file in the `src/` folder:**

   - Name it: `ProfileCard.js`
   - Add the following code:

   ```jsx
   import React from "react";

   function ProfileCard() {
     return (
       <div
         style={{
           border: "1px solid #ccc",
           borderRadius: "8px",
           padding: "20px",
           width: "200px",
           margin: "20px auto",
         }}
       >
         <h3>👩 Jane Doe</h3>
         <p>Email: jane@example.com</p>
         <p>Location: NYC</p>
       </div>
     );
   }

   export default ProfileCard;
   ```

3. **Now go to `App.js` and replace its content with this:**

   ```jsx
   import React, { useState } from "react";
   import ProfileCard from "./ProfileCard";

   function App() {
     const [showProfile, setShowProfile] = useState(false);

     return (
       <div style={{ textAlign: "center", marginTop: "40px" }}>
         <h1>👤 Profile Viewer</h1>
         <button onClick={() => setShowProfile(!showProfile)}>
           {showProfile ? "Hide" : "Show"} Profile
         </button>
         {showProfile && <ProfileCard />}
       </div>
     );
   }

   export default App;
   ```

---

### 🔍 What You Learned

- How to use boolean state to toggle things on/off.
- How to conditionally render components using `&&`.
- How to split UI into smaller, reusable components.

---

## 🧠 Summary of Concepts Across Projects

| Concept               | Project 1 ✅ | Project 2 ✅ | Project 3 ✅ |
| --------------------- | ------------ | ------------ | ------------ |
| `useState`            | ✅           | ✅           | ✅           |
| Event Handling        | ✅           | ✅           | ✅           |
| Input Forms           | ❌           | ✅           | ❌           |
| List Rendering        | ❌           | ✅           | ❌           |
| Conditional Rendering | ❌           | ✅ (delete)  | ✅ (toggle)  |
| Component Reuse       | ❌           | ❌           | ✅           |

---

## ✅ What’s Next?

- Try passing **props** to your components.
- Use `useEffect` to call APIs.
- Learn about **React Router** and how to switch pages.
- Explore **React Developer Tools** for debugging in Chrome.

---
