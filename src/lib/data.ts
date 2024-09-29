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
        relevance: "Responsive movie discovery app was built using the TMDB API, that enabled users to explore and view detailed movie info. Solved the problem of quickly finding and learning about movies, showcased skills in API integration, UI design, and created an intuitive user experience.", 
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
        sourceCode: "https://github.com/traez/multi-category-trivia-quiz", // Replace with actual URL
        website: "https://multi-category-trivia-quiz-traez.vercel.app/", // Replace with actual URL
        relevance: "High", // Adjust relevance as needed
        screenshot: "/ss-multi-category-trivia-quiz.png",
    },
    {
        name: "rock-paper-scissors-game",
        category: "Entertainment and Games",
        sourceCode: "https://github.com/traez/rock-paper-scissors-game", // Replace with actual URL
        website: "https://rock-paper-scissors-game-traez.vercel.app/", // Replace with actual URL
        relevance: "Low", // Adjust relevance as needed
        screenshot: "/ss-rock-paper-scissors-game.png",
    },
    {
        name: "number-guessing-game-project",
        category: "Entertainment and Games",
        sourceCode: "https://github.com/traez/number-guessing-game-project", // Replace with actual URL
        website: "https://number-guessing-game-project-traez.vercel.app/", // Replace with actual URL
        relevance: "Medium", // Adjust relevance as needed
        screenshot: "/ss-number-guessing-game-project.png",
    },
    {
        name: "bettami-figma-conversion-xuaib",
        category: "Figma-to-Code Projects",
        sourceCode: "https://github.com/traez/bettami-figma-conversion-xuaib", // Replace with actual URL
        website: "https://bettami-figma-conversion-xuaib-trae-zeeofors-projects.vercel.app", // Replace with actual URL
        relevance: "High", // Adjust relevance as needed
        screenshot: "/ss-bettami-figma-conversion-xuaib.png",
    },
    {
        name: "multiplication-practice",
        category: "Educational Resources",
        sourceCode: "https://github.com/traez/multiplication-practice", // Replace with actual URL
        website: "https://multiplication-practice-traez.vercel.app/", // Replace with actual URL
        relevance: "High", // Adjust relevance as needed
        screenshot: "/ss-multiplication-practice.png",
    },
    {
        name: "dictionary-web-app",
        category: "Educational Resources",
        sourceCode: "https://github.com/traez/dictionary-web-app", // Replace with actual URL
        website: "https://dictionary-web-app-traez.vercel.app/", // Replace with actual URL
        relevance: "Medium", // Adjust relevance as needed
        screenshot: "/ss-dictionary-web-app.png",
    },
    {
        name: "rest-countries-api-with-color-theme-switcher",
        category: "Educational Resources",
        sourceCode: "https://github.com/traez/rest-countries-api-with-color-theme-switcher", // Replace with actual URL
        website: "https://rest-countries-api-with-color-theme-switcher-traez.vercel.app/", // Replace with actual URL
        relevance: "Medium", // Adjust relevance as needed
        screenshot: "/ss-rest-countries-api-with-color-theme-switcher.png",
    },
    {
        name: "random-reasons-generator-app",
        category: "Educational Resources",
        sourceCode: "https://github.com/traez/random-reasons-generator-app", 
        website: "https://random-reasons-generator-app-traez.vercel.app/", 
        relevance: "Medium", // Adjust relevance as needed
        screenshot: "/ss-random-reasons-generator-app.png",
    },
    {
        name: "ecommerce-website",
        category: "Sports and Wellness Tools",
        sourceCode: "https://github.com/traez/ecommerce-website", // Replace with actual URL
        website: "https://ecommerce-website-traez.vercel.app/", // Replace with actual URL
        relevance: "High", // Adjust relevance as needed
        screenshot: "/ss-ecommerce-website.png",
    },
    {
        name: "calisthenics-gallery",
        category: "Sports and Wellness Tools",
        sourceCode: "https://github.com/traez/calisthenics-gallery", // Replace with actual URL
        website: "https://calisthenics-gallery-traez.vercel.app/", // Replace with actual URL
        relevance: "Medium", // Adjust relevance as needed
        screenshot: "/ss-calisthenics-gallery.png",
    },
    {
        name: "password-generator-app",
        category: "Productivity Tools",
        sourceCode: "https://github.com/traez/password-generator-app", // Replace with actual URL
        website: "https://password-generator-app-traez.vercel.app/", // Replace with actual URL
        relevance: "High", // Adjust relevance as needed
        screenshot: "/ss-password-generator-app.png",
    },
    {
        name: "url-shortening-api-landing-page",
        category: "Productivity Tools",
        sourceCode: "https://github.com/traez/url-shortening-api-landing-page", 
        website: "https://url-shortening-api-landing-page-traez.vercel.app/", 
        relevance: "Medium", // Adjust relevance as needed
        screenshot: "/ss-url-shortening-api-landing-page.png",
    },
    {
        name: "nigerian-inflation-tracker-2024",
        category: "Full Stack Apps",
        sourceCode: "https://github.com/traez/nigerian-inflation-tracker-2024", 
        website: "https://nigerian-inflation-tracker-2024.vercel.app/", 
        relevance: "High", // Adjust relevance as needed
        screenshot: "/ss-nigerian-inflation-tracker-2024.png",
    },
    {
        name: "mondaymotivationng",
        category: "Full Stack Apps",
        sourceCode: "https://github.com/traez/mondaymotivationng", // Replace with actual URL
        website: "https://mondaymotivationng.vercel.app/", // Replace with actual URL
        relevance: "Medium", // Adjust relevance as needed
        screenshot: "/ss-mondaymotivationng.png",
    }
];

export default projectsArray;
