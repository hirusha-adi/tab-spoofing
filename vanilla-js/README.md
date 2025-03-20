# [Tab Spoofer] Vanilla JS

The **Vanilla JS Tab Spoofer** is a simple script that changes the browser tab’s title and favicon when the tab is inactive. It switches them out with random selections from a list of predefined websites, which helps keep things looking normal and avoids suspicion.

### How to Use:

1. **Add the Script to Your HTML File:**
   - First, create a new `.js` file (e.g., `tabSpoofer.js`), and then copy the provided script into that file.
   - Next, in your HTML file, include the script right before the closing `</body>` tag:
     ```html
     <script src="tabSpoofer.js"></script>
     ```

2. **Set Up the Default Favicon:**
   - Make sure your HTML file has a default favicon set in the `<head>` section like this:
     ```html
     <link rel="icon" href="your-original-favicon.ico">
     ```

3. **Customize the Spoofing Options:**
   - Open the `tabSpoofer.js` file and find the `spoofOptions` array. This is where you can add or modify the list of websites that will be used for spoofing.
   - To add a new website, just add a new object to the array like this:
     ```js
     { title: "New Website", icon: "https://example.com/favicon.ico" }
     ```

4. **Use it on Your Website:**
   - Simply load your HTML page, and the tab spoofing will be active.
   - When the tab becomes inactive, the title and favicon will change randomly to one of the spoofing options. When you return to the tab, the original title and favicon will come back.
