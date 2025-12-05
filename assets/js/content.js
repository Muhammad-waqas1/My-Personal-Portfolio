// ========================================
// PORTFOLIO CONTENT CONFIGURATION
// Edit this file to update your portfolio
// ========================================

const portfolioContent = {
    // Personal Information
    personal: {
        fullName: "Muhammad Waqas",
        role: "Software Engineer & Freelance Web Developer",
        tagline: "Building reliable, scalable software with Python, Django, and modern web technologies.",
        bio: "I'm a self-taught software developer specializing in Python, Django, and full-stack web applications. I build secure and practical solutions for real-world business needs. I'm also learning machine learning to integrate intelligent automation into web products.",
        email: "your.email@example.com",
        phone: "+92-XXX-XXXXXXX",
        location: "Multan, Punjab, Pakistan",
        profileImage: "assets/img/profile.png", // Update with your image path
    },

    // Social Links
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        instagram: "https://instagram.com/yourusername",
        whatsapp: "https://wa.me/92XXXXXXXXXX", // Format: https://wa.me/[country code][number]
        email: "mailto:your.email@example.com"
    },

    // Skills
    skills: [
        { name: "Python", icon: "fab fa-python", color: "#3776AB" },
        { name: "Django", icon: "fas fa-server", color: "#092E20" },
        { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
        { name: "Tailwind CSS", icon: "fas fa-wind", color: "#06B6D4" },
        { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
        { name: "Git & GitHub", icon: "fab fa-github", color: "#181717" },
        { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
        { name: "SQLite", icon: "fas fa-database", color: "#003B57" },
        { name: "Machine Learning", icon: "fas fa-brain", color: "#FF6F00" },
        { name: "REST APIs", icon: "fas fa-plug", color: "#009688" }
    ],

    // Education
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University Name",
            duration: "2021 - 2025",
            location: "Multan, Punjab",
            description: "Currently pursuing degree with focus on software engineering and web development."
        },
        {
            degree: "Intermediate in Computer Science",
            institution: "College Name",
            duration: "2019 - 2021",
            location: "Multan, Punjab",
            description: "Completed with distinction, foundation in programming and mathematics."
        }
    ],

    // Certifications
    certifications: [
        {
            title: "Python for Everybody Specialization",
            organization: "University of Michigan (Coursera)",
            date: "2023",
            icon: "fas fa-certificate",
            link: "#"
        },
        {
            title: "Django for Beginners",
            organization: "Udemy",
            date: "2023",
            icon: "fas fa-certificate",
            link: "#"
        },
        {
            title: "Web Development Bootcamp",
            organization: "Udemy",
            date: "2022",
            icon: "fas fa-certificate",
            link: "#"
        },
        {
            title: "Machine Learning Basics",
            organization: "Coursera",
            date: "2024",
            icon: "fas fa-certificate",
            link: "#"
        }
    ],

    // Freelancing Experience
    freelancing: [
        
        {
            platform: "Local Clients",
            role: "Freelance Software Developer",
            description: "Provided custom software solutions for local businesses including inventory management systems, appointment booking platforms, and automated reporting tools.",
            skills: ["Python", "Django", "SQLite", "Automation"],
            link: "#contact"
        },
        {
            platform: "University Projects",
            role: "Python & Django Web Developer",
            description: "Developed custom web applications for international clients including e-commerce platforms, content management systems, and business automation tools. Successfully completed 15+ projects with 5-star ratings.",
            skills: ["Python", "Django", "PostgreSQL", "REST APIs"],
            link: "#contact"
        },
    ],

    // Projects
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured online shopping platform with payment gateway integration, user authentication, cart management, and admin dashboard.",
            category: "Django",
            tags: ["Django", "Python", "PostgreSQL", "Stripe"],
            image: "assets/img/project1.jpg",
            github: "https://github.com/yourusername/ecommerce-platform",
            demo: "https://demo-ecommerce.example.com",
            featured: true
        },
        {
            id: 2,
            title: "Task Management System",
            description: "A collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
            category: "Django",
            tags: ["Django", "JavaScript", "WebSocket", "MySQL"],
            image: "assets/img/project2.jpg",
            github: "https://github.com/yourusername/task-manager",
            demo: "https://task-manager.example.com",
            featured: true
        },
        {
            id: 3,
            title: "Blog CMS",
            description: "A modern content management system for bloggers with markdown support, SEO optimization, and analytics dashboard.",
            category: "Django",
            tags: ["Django", "Bootstrap", "SQLite", "Markdown"],
            image: "assets/img/project3.jpg",
            github: "https://github.com/yourusername/blog-cms",
            demo: "https://blog-cms.example.com",
            featured: true
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "Real-time weather application with forecast data, interactive maps, and location-based weather alerts.",
            category: "Python Web",
            tags: ["Python", "Flask", "APIs", "JavaScript"],
            image: "https://via.placeholder.com/400x300/556B2F/FFFFFF?text=Weather+Dashboard",
            github: "https://github.com/yourusername/weather-dashboard",
            demo: "https://weather-app.example.com",
            featured: false
        },
        {
            id: 5,
            title: "Student Portal",
            description: "Academic management system for students and teachers with attendance tracking, grade management, and announcements.",
            category: "Django",
            tags: ["Django", "Python", "MySQL", "Bootstrap"],
            image: "https://via.placeholder.com/400x300/556B2F/FFFFFF?text=Student+Portal",
            github: "https://github.com/yourusername/student-portal",
            demo: "https://student-portal.example.com",
            featured: false
        },
        {
            id: 6,
            title: "ML Price Predictor",
            description: "Machine learning model to predict house prices based on various features using scikit-learn and Flask.",
            category: "AI",
            tags: ["Python", "Machine Learning", "Flask", "scikit-learn"],
            image: "https://via.placeholder.com/400x300/556B2F/FFFFFF?text=Price+Predictor",
            github: "https://github.com/yourusername/price-predictor",
            demo: "https://price-predictor.example.com",
            featured: false
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioContent;
}