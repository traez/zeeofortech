export interface DataType {
    name: string; 
    category: string; 
    sourceCode: string; 
    website: string;
    relevance: string;
    screenshot: string; 
}

const projectsArray: Array<DataType> = [
    {
        name: "movie-discovery-webapp",
        category: "Entertainment and Games",
        sourceCode: "https://github.com/traez/movie-discovery-webapp", // Replace with actual URL
        website: "https://movie-discovery-webapp-traez.vercel.app/", // Replace with actual URL
        relevance: "Responsive movie discovery app built using the TMDB API. Enables users to explore and view detailed movie info. Solves the problem of quickly finding and learning about movies. App showcases my skills in API integration, UI design, and creating an intuitive user experience.", 
        screenshot: "/ss-movie-discovery-webapp.png",
    },
    {
        name: "tic-tac-toe-game",
        category: "Entertainment and Games",
        sourceCode: "https://github.com/traez/tic-tac-toe-game", // Replace with actual URL
        website: "https://tic-tac-toe-game-traez.vercel.app/", // Replace with actual URL
        relevance: "Developed a responsive Tic-Tac-Toe game allowing players to compete against each other or an AI opponent. Implemented smart AI for a challenging experience and state persistence for seamless gameplay across sessions, enhancing engagement and usability across devices.", 
        screenshot: "/ss-tic-tac-toe-game.png",
    },
    {
        name: "multi-category-trivia-quiz",
        category: "Entertainment and Games",
        sourceCode: "https://github.com/traez/multi-category-trivia-quiz", 
        website: "https://multi-category-trivia-quiz-traez.vercel.app/", // Replace with actual URL
        relevance: "The Quiz App offers an engaging way for users to test their knowledge on various topics and difficulty levels, enhancing learning through interactivity. It provides randomized questions, tracks scores, and improves user engagement with an intuitive interface.", // Adjust relevance as needed
        screenshot: "/ss-multi-category-trivia-quiz.png",
    },
    {
        name: "rock-paper-scissors-game",
        category: "Entertainment and Games",
        sourceCode: "https://github.com/traez/rock-paper-scissors-game", // Replace with actual URL
        website: "https://rock-paper-scissors-game-traez.vercel.app/", // Replace with actual URL
        relevance: "The Rock, Paper, Scissors App provides a fun and responsive gaming experience against a computer opponent. It adapts to all screen sizes, retains scores across sessions, and offers various gameplay options, ensuring an engaging and entertaining experience for users.", // Adjust relevance as needed
        screenshot: "/ss-rock-paper-scissors-game.png",
    },
    {
        name: "number-guessing-game-project",
        category: "Entertainment and Games",
        sourceCode: "https://github.com/traez/number-guessing-game-project", 
        website: "https://number-guessing-game-project-traez.vercel.app/", 
        relevance: "The Number Guessing Game challenges users to guess a randomly generated number between 1 and 100. It offers a fun way to enhance critical thinking and logic skills while tracking previous guesses and turns, providing an engaging experience that encourages persistence and strategic thinking.", // Adjust relevance as needed
        screenshot: "/ss-number-guessing-game-project.png",
    },
    {
        name: "bettami-figma-conversion-xuaib",
        category: "Figma-to-Code Projects",
        sourceCode: "https://github.com/traez/bettami-figma-conversion-xuaib", 
        website: "https://bettami-figma-conversion-xuaib-trae-zeeofors-projects.vercel.app", 
        relevance: "This project showcases my ability to transform Figma UI designs into responsive HTML and CSS, demonstrating pixel-perfect accuracy and adherence to design standards. It highlights my skills in accessibility and cross-browser compatibility, inviting users to hire me for similar coding projects.", // Adjust relevance as needed
        screenshot: "/ss-bettami-figma-conversion-xuaib.png",
    },
    {
        name: "multiplication-practice",
        category: "Educational Resources",
        sourceCode: "https://github.com/traez/multiplication-practice", // Replace with actual URL
        website: "https://multiplication-practice-traez.vercel.app/", // Replace with actual URL
        relevance: "This Multiplication Mastery Game helps users improve their math skills by offering dynamic table ranges and close-range multiple choices for increased difficulty. It tracks wrong answers for review, promoting focused learning and mastery of multiplication tables.", // Adjust relevance as needed
        screenshot: "/ss-multiplication-practice.png",
    },
    {
        name: "dictionary-web-app",
        category: "Educational Resources",
        sourceCode: "https://github.com/traez/dictionary-web-app", // Replace with actual URL
        website: "https://dictionary-web-app-traez.vercel.app/", // Replace with actual URL
        relevance: "This Dictionary App enhances vocabulary learning by providing definitions, pronunciations, and word details using the Free Dictionary API. It features font and theme switching, responsive design, and clear form validation, offering an accessible and customizable user experience for word exploration.", // Adjust relevance as needed
        screenshot: "/ss-dictionary-web-app.png",
    },
    {
        name: "rest-countries-api-with-color-theme-switcher",
        category: "Educational Resources",
        sourceCode: "https://github.com/traez/rest-countries-api-with-color-theme-switcher", 
        website: "https://rest-countries-api-with-color-theme-switcher-traez.vercel.app/", 
        relevance: "This Country Explorer App helps users discover and learn about countries worldwide with search, filter, and detailed view features. It provides region-based filtering, border country navigation, and theme toggling, offering an interactive and informative way to explore global data.", // Adjust relevance as needed
        screenshot: "/ss-rest-countries-api-with-color-theme-switcher.png",
    },
    {
        name: "random-reasons-generator-app",
        category: "Educational Resources",
        sourceCode: "https://github.com/traez/random-reasons-generator-app", 
        website: "https://random-reasons-generator-app-traez.vercel.app/", 
        relevance: "The Random Reasons Generator App offers persuasive arguments for supporting Peter Obi and humorous counterpoints for opponents. Each click presents new reasons, unique visuals, and dynamic UI changes, making it a fun, interactive way to explore political perspectives.", 
        screenshot: "/ss-random-reasons-generator-app.png",
    },
    {
        name: "ecommerce-website",
        category: "Sports and Wellness Tools",
        sourceCode: "https://github.com/traez/ecommerce-website", // Replace with actual URL
        website: "https://ecommerce-website-traez.vercel.app/", // Replace with actual URL
        relevance: "The Football Jersey Store App offers a seamless shopping experience by allowing users to browse, add, and edit jerseys in their cart. It provides background details on each jersey and accurate order summaries, ensuring an engaging, informative, and user-friendly checkout process.", // Adjust relevance as needed
        screenshot: "/ss-ecommerce-website.png",
    },
    {
        name: "calisthenics-gallery",
        category: "Sports and Wellness Tools",
        sourceCode: "https://github.com/traez/calisthenics-gallery", // Replace with actual URL
        website: "https://calisthenics-gallery-traez.vercel.app/", // Replace with actual URL
        relevance: "The Calisthenics Exercise Gallery helps users find and learn fitness exercises grouped by purpose (upper body, lower body, core). With search, bookmarking, and instructional videos, it offers a comprehensive resource for improving fitness through targeted exercise routines.", // Adjust relevance as needed
        screenshot: "/ss-calisthenics-gallery.png",
    },
    {
        name: "password-generator-app",
        category: "Productivity Tools",
        sourceCode: "https://github.com/traez/password-generator-app", // Replace with actual URL
        website: "https://password-generator-app-traez.vercel.app/", // Replace with actual URL
        relevance: "The Password Generator App creates secure passwords based on selected criteria, provides strength ratings, and allows easy copying to the clipboard. It enhances online security by helping users generate strong, customizable passwords, ensuring safer account protection across devices.", // Adjust relevance as needed
        screenshot: "/ss-password-generator-app.png",
    },
    {
        name: "url-shortening-api-landing-page",
        category: "Productivity Tools",
        sourceCode: "https://github.com/traez/url-shortening-api-landing-page", 
        website: "https://url-shortening-api-landing-page-traez.vercel.app/", 
        relevance: "The URL Shortener App simplifies link management by converting long URLs into shorter ones for easier sharing. Users can copy links with a single click and access their shortened URLs even after refreshing. It streamlines link sharing, making it more convenient and organized.", // Adjust relevance as needed
        screenshot: "/ss-url-shortening-api-landing-page.png",
    },
    {
        name: "nigerian-inflation-tracker-2024",
        category: "Full Stack Apps",
        sourceCode: "https://github.com/traez/nigerian-inflation-tracker-2024", 
        website: "https://nigerian-inflation-tracker-2024.vercel.app/", 
        relevance: "The Crowdsourced Inflation Tracker offers real-time insights into Nigeria's inflation trends by category, state, and user. It enables citizens to contribute and analyze data, promoting transparency and informed decision-making with features like login, data management, and theme toggling.", // Adjust relevance as needed
        screenshot: "/ss-nigerian-inflation-tracker-2024.png",
    },
    {
        name: "mondaymotivationng",
        category: "Full Stack Apps",
        sourceCode: "https://github.com/traez/mondaymotivationng", // Replace with actual URL
        website: "https://mondaymotivationng.vercel.app/", // Replace with actual URL
        relevance: "This motivational quotes platform empowers users to share, manage, and engage with quotes through voting and commenting. By fostering community interaction and personalization with theme toggling, it enhances user experience and promotes a culture of inspiration and support.", // Adjust relevance as needed
        screenshot: "/ss-mondaymotivationng.png",
    },
    {
        name: "trams-africa-ride-booking-dashboard",
        category: "Productivity Tools",
        sourceCode: "https://github.com/traez/trams-africa-ride-booking-dashboard", 
        website: "https://trams-africa-ride-booking-dashboard.vercel.app/", 
        relevance: "This ride-booking dashboard simplifies travel planning, enabling users to book, edit, or cancel rides with real-time vehicle details and pricing. Featuring dynamic forms, responsive design, and API integrations, it delivers a seamless, user-friendly experience for managing trips.", 
        screenshot: "/ss-trams-africa-ride-booking-dashboard.png",
    },
    {
        name: "lendsqr-fe-test",
        category: "Figma-to-Code Projects",
        sourceCode: "https://github.com/traez/lendsqr-fe-test", 
        website: "https://tochukwu-ezeokafor-lendsqr-fe-test.vercel.app/", 
        relevance: "This app provides a user-friendly interface for account management, with responsive login, dashboard, user list, and detail pages. It offers smooth navigation, efficient data handling, and high-quality design, optimized for desktop and mobile devices", 
        screenshot: "/ss-lendsqr-fe-test.png",
    },
    {
        name: "naija-japa-postgresql-app",
        category: "Full Stack Apps",
        sourceCode: "https://github.com/traez/naija-japa-postgresql-app", 
        website: "https://naija-japa-postgresql-app.vercel.app",
        relevance: "The app enables users to explore and filter profiles of Nigerians abroad based on attributes like age, gender, and location, utilizing PostgreSQL and Supabase for dynamic data fetching and efficient filtering with an intuitive interface.", 
        screenshot: "/ss-naija-japa-postgresql-app.png",
    }
];

export default projectsArray;
