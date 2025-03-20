# [Tab Spoofer] Vanilla JS

The Vanilla JS Tab Spoofer script manipulates the browser tab’s title and favicon when the tab is inactive. It changes them to a random selection of predefined websites, helping to avoid suspicion.

### How to Use?

1. Add the Script to Your HTML File:
    - Create a new `.js` file (e.g., `tabSpoofer.js`), then copy the provided script into that file.
    - In your HTML file, include the script before the closing `</body>` tag:
        ```html
        <script src="tabSpoofer.js"></script>
        ```

2. Set Up the Default Favicon:
    - Ensure you have a default favicon in your HTML <head> section:
        ```html
        <link rel="icon" href="your-original-favicon.ico">
        ```

3. Customize the Spoofing Options:
    - Open the tabSpoofer.js file and locate the spoofOptions array. This is where you can modify or add new spoofing options.
    - Add new spoofing sites as needed:
        ```js
        { title: "New Website", icon: "https://example.com/favicon.ico" }
        ```

4. Use it on Your Website:
    - Simply load the HTML page, and the tab spoofing functionality will be active. When the tab is inactive, the title and favicon will change randomly, and they will restore when the tab is active again.
