# React Admin Dashboard

This project is a React-based admin dashboard built using modern JavaScript (ES6+), HTML5, and CSS3, utilizing Material-UI for UI components.

## Live Demo

You can view the live version of the application [here](https://adminx-dashboard.netlify.app/).

## Table of Contents

- Installation
- Running the Project Locally
- Design Decisions and challenges

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Raaghav-1824/admin-dashboard.git

2. Navigate to the project directory:
   ```bash
   cd admin-dashboard

4. Install the required dependencies:
   ```bash
   npm install

5. Start the development server:
   ```bash
   npm start

The application will be available at http://localhost:5000.

## Running the Project Locally
- Ensure you have Node.js installed. You can download it from Node.js official website.
- Follow the Installation steps above to clone the repository and install dependencies.
- Use the command npm start to run the project.

## Design Decisions and Challenges
### Design Decisions
- UI Library : I chose Material-UI for its flexibility and extensive component library, which allowed for rapid development of a clean and responsive user interface. 
- State Management : Implemented Redux Toolkit to manage the global state efficiently, making it easier to handle complex state updates across various components.

### Challenges Faced
<!-- - State Management Complexity  :  Initially, I faced challenges managing the state across multiple components due to the deep nesting of components. To resolve this, I refactored the state structure and utilized Redux Toolkit, which simplified the state management process and improved maintainability. -->

<!--  - Performance Optimization : There were performance issues when rendering a large number of components. I implemented React's React.memo and useCallback hooks to optimize rendering and prevent unnecessary re-renders, leading to a smoother user experience. -->

- Responsive Design  :  Ensuring the dashboard was responsive across various devices was challenging. I used CSS Flexbox and Grid layout techniques in combination with Material-UI's responsive design features to achieve a mobile-friendly layout without sacrificing functionality.

