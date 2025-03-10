# 3 Cards & 5 Cards Scroll Animation

An interactive project that brings dynamic scroll-based animations to life using GSAP and its ScrollTrigger plugin. This project demonstrates how to create smooth, multi-step animations where cards transition in position, scale, and z-index as you scroll. The animations are responsive and provide a visually engaging experience on larger screens while gracefully degrading on mobile devices.

## Overview

This project features:

- **Dynamic Scroll Animation:** As you scroll, the cards animate through multiple steps. Each step repositions the cards (center, near edge, far edge) with different scales and overlay effects.
- **Responsive Design:** On screens wider than 768px, a pinned scroll section with animated transitions is activated. On smaller devices, the cards stack vertically for optimal viewing.
- **GSAP Integration:** The animations are built using the GSAP library with its ScrollTrigger plugin, providing smooth transitions and easy control over scroll events.

## Project Structure

- **index.html:**  
  Contains the markup for the page, including sections for introductory content, the interactive cards, and additional information.

- **style.css:**  
  Provides styling for the layout, cards, and overlay effects. It also includes media queries to handle responsiveness on smaller devices.

- **script.js:**  
  Implements the primary scroll animation timeline that handles the 5-card animation sequence with multiple steps and active/inactive card states.

## How to Run

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Open the Project in Your Browser:**

   Simply open the `index.html` file in your browser or use a local development server (e.g., VS Code Live Server, http-server, etc.) to view the project in action.

## Demo Video

Watch a detailed walkthrough and demonstration of the project on Loom:  
[https://www.loom.com/share/e1a021a561d8403b911ff7f275247df4](https://www.loom.com/share/e1a021a561d8403b911ff7f275247df4)

## Technologies Used

- **GSAP (GreenSock Animation Platform):**  
  For creating timelines and complex animations with ease.

- **ScrollTrigger Plugin:**  
  To sync and control animations based on scroll position.

- **HTML5 & CSS3:**  
  For structuring and styling the webpage, including responsive design features.

- **JavaScript:**  
  Powers the interactive animations and handles DOM manipulations.

## Developer

Developed by [Favour Okoh](https://www.linkedin.com/in/favour-okoh/)  
Feel free to connect with me on LinkedIn to discuss this project or any other opportunities.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
