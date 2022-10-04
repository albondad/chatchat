# Description

This repository contains the source code for the web application ChatChat, which is my solution for Arrive Logistic's coding problem.

# How to Run the Project

`cd packages/website && yarn dev`

# About the Process

I started by reading the requirements provided and going to Figma to design a simple layout for the UI to fulfill the requirements. Then I broke down the project into a series of small steps that I could slow progress through, where each step would be something like adding a componenent, setting up state management for data, bug fixes, and cleaning up code. Once I finished up the MVP, I went ahead and deployed the project on the web for accessibility.

# Completed Requirements

[x] consume Arrive Logistics' web socket
[x] display messages live
[x] display words and word counts live
[x] display tabular results of each user and their accumalted words sorted by most words sent

# Things I wanted to Demonstrate

- I can work with React and React related libraries (eg. Next.js, styled-components, classnames, etc.)
- I can work with React hooks.
- I can build my own custom React components.
- I can work with version control systems like Git and GitHub.
- I'm aware and can develop applications to be responsive.
- I can consume web sockets.
- I can work with Typescript.
- I can build my own CSS and work with existing CSS conventions like BEM CSS.
- I have experience working with Node.js and Node Modules.

# Things That Could Have Been Improved

- I would have wanted to spend more time in the UI design just to make the web application look a little less bland.
- I would have wanted to add extra UI to toggle starting and stopping the connection to the web socket.
- I would have wanted to add extra error handling on the web socket to catch any errors.
- I would have wanted to add extra statisitcs to display to fill up the web page and engage with the user more.
- I would have split the sections into their own components, just to reduce the code that was being returned in the index.tsx page component.
- I would have wanted to set up the logic for the web socket in it's own specific hook, just to split up the code better, and share state when I split the sections into their components.
- I would have wanted to make sure the web application was at least WCAG A compliant. I know this might be a bit overkill for this project, but moving onto more future, production-level products, I think it would be nice to make sure these applications are more aware accessible to a of users.

# Final Note

- There's definitely a lot that could have been added and improved, but I am satisfied with the result. I hope to hear from you soon!
