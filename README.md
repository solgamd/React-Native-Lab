# React Native Lab

This is a lab within the Covalence curriculum to help learn and explore how to build a mobile app with React Native.

# Steps
Installing Expo CLI
- Use the video walkthrough and reference materials to get Expo CLI installed on your machine and reporting a version
expo --version should respond with 2.xx.x or higher in your terminal
Initializing Your First App
- Use expo init YourProjectName to initialize a new React Native project using expo
- Use npm start in your new project directory to get your local web development server running
- Use the Expo client app on your phone to successfully get your first app showing up!
Converting to TypeScript
- Close down your bundler, stop your terminal, and exit from the Expo client app on your phone
- Use the video walkthrough and reference material to get TypeScript support added into your project
- Get your app running on your device again after adding TypeScript
Let's Explore!
- Change the container background color to lightgreen
- Change the text within the container to say #crushingit
- Change the text color to red (Hint: Look at how the StyleSheet creates a new style object named "container" for the View component, use this to create your own object with styling properties for the text)
- Change the text background color to red and the text color to white
- Using this as some additional help, change the text font family to something safe for your device
- Change the text font size to 40
- Wrap your View component in another View component
- Give it the following properties:
    - flex of 1
    - backgroundColor of red
    - padding of 20

We've wrapped our light green view, with a red view. But notice it won't be "visible" until we add the padding. Try adding different values, and removing it entirely, to see what it does to our app. Change the padding back to 20 and let's finish this!

- Using your knowledge of View and basic styling, try to recreate this on your app: another View component with a black background color!
