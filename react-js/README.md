# [Tab Spoofer] ReactJS

The **ReactJS Tab Spoofer** works much like the Vanilla JS version, but it’s designed to integrate smoothly with React applications. This script will change the title and favicon of your browser tab when it's inactive, swapping them out with a random selection from a list of popular websites.

### How to Use:

1. **Add the Script:**
   - First, copy the **Tab Spoofer React** script into your React project. You can put it in a new file, like `TabSpoofer.jsx`, in your components folder.
   
2. **Modify the App Component:**
   - Next, import and use the `TabSpoofer` component in your main `App.jsx` or in any other component where you want to apply the tab spoofing. For example:
     ```js
     import React from "react";
     import TabSpoofer from "./TabSpoofer"; // adjust the path if needed

     function App() {
       return (
         <div className="App">
           <TabSpoofer />
           <h1>Welcome to My React App</h1>
         </div>
       );
     }

     export default App;
     ```
   - If you want the spoofing to be applied across the entire site, consider adding it to `main.jsx` so that it’s included globally. Check out the example with **ReactJS + Vite** if you need more guidance.

3. **Set Up the Default Favicon:**
   - Make sure your React app has a default favicon by placing your favicon in the `public` folder. Then, update the `index.html` file to reference it:
     ```html
     <link rel="icon" href="/favicon.ico" />
     ```

4. **Customize the Spoofing Options:**
   - Open the `TabSpoofer.jsx` file, and you’ll find the `spoofOptions` array. This is where you can add or remove websites for spoofing. For example, to add a new site:
     ```js
     { title: "New Website", icon: "https://example.com/favicon.ico" }
     ```

5. **Run Your React App:**
   - Start your app as usual, and you’re good to go!
   - Whenever you switch away from the tab, the title and favicon will change to one of the spoofing options at random. When you come back, it will return to the original tab title and icon.

