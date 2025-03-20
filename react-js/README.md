# [Tab Spoofer] React JS

The React JS Tab Spoofer works similarly to the Vanilla JS version but is implemented in a way that integrates seamlessly with React applications. This script manipulates the browser tab’s title and favicon when the tab is inactive by changing them to a random selection of predefined websites.

### How to Use?

1. Install the Script:
   - Copy the Tab Spoofer React script into your React project (you can place it in a new file like `TabSpoofer.jsx`).
   
2. Modify the App Component:
   - In your main `App.jsx` or a specific component, import and use the `TabSpoofer` component like this:
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
    - Import and place the `<TabSpoofer />` only in the pages where you want this to happen. 
    - If you want this for the whole website, consider placing it in `main.jsx`. Refer to the example with ReactJS + Vite for additional information.

3. Add the Default Favicon:
   - Make sure your React app has a default favicon by placing a favicon in the `public` folder and modifying the `index.html` file accordingly.
     ```html
     <link rel="icon" href="/favicon.ico" />
     ```

4. Customize the Spoofing Options:
   - Open the `TabSpoofer.jsx` file and locate the `spoofOptions` array to add, remove, or modify the spoofing sites as needed:
     ```js
     { title: "New Website", icon: "https://example.com/favicon.ico" }
     ```

5. Run Your React App:
   - Start your React app as usual.
   - When you navigate away from the tab, the tab title and favicon will randomly change to one of the spoofing options.


