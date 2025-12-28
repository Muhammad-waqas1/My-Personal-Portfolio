// ========================================
// PORTFOLIO CONTENT CONFIGURATION
// Edit this file to update your portfolio
// ========================================

const portfolioContent = {

    // Personal Information
    personal: {
        fullName: "Muhammad Waqas",
        role: "Full Stack Web Developer & ML(Python) Engineer",
        tagline: "Building scalable, intelligent web applications using Python, Django, Flask & ML technologies.",
        bio: "I’m a freelance full stack web developer and machine learning engineer specializing in Python, Django, Flask and ML model deployment. I build production ready web applications, backend systems and AI-powered automation with real-world business impact.",
        email: "muhammadwaqaspriv@gmail.com",
        phone: "+92-328-6076658",
        location: "Layyah, Punjab, Pakistan",
        profileImage: "assets/img/profile.png",
    },

    // Social Links
    social: {
        github: "https://github.com/Muhammad-waqas1",
        linkedin: "https://www.linkedin.com/in/muhammad-waqas-834490377/",
        instagram: null,
        whatsapp: "https://wa.me/923286076658",
        email: "mailto:muhammadwaqaspriv@gmail.com"
    },

    // Skills
    skills: [
        { name: "Python", icon: "fab fa-python", color: "#3776AB" },
        { name: "Django", icon: "fas fa-server", color: "#092E20" },
        { name: "Flask", icon: "fas fa-fire", color: "#353535" },
        { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
        { name: "Tailwind CSS", icon: "fas fa-wind", color: "#06B6D4" },
        { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
        { name: "Machine Learning", icon: "fas fa-brain", color: "#FF6F00" },
        { name: "REST APIs", icon: "fas fa-plug", color: "#009688" },
        { name: "Git & GitHub", icon: "fab fa-github", color: "#181717" },
        { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
        { name: "DBMS", icon: "fas fa-database", color: "#607D8B" }
    ],

    // Education
    education: [
        {
            degree: "ADP Computer Science",
            institution: "GCUF Layyah Campus",
            duration: "Sep 2023 - Aug 2025",
            location: "Layyah, Punjab",
            description: "Currently studying, focusing on full stack web development and machine learning."
        },
        {
            degree: "Intermediate",
            institution: "Govt. Graduate College",
            duration: "May 2021 - May 2023",
            location: "Layyah, Punjab",
            description: "Completed intermediate education."
        },
        {
            degree: "Matriculation",
            institution: "Fazaia Inter College PAF Base Shahbaz",
            duration: "May 2019 - May 2021",
            location: "Jacobabad, Pakistan",
            description: "Science major with strong academic performance."
        }
    ],

    // Certifications
    certifications: [
        {
            title: "Intro to Machine Learning",
            organization: "Kaggle",
            date: "February 23, 2025",
            icon: "fas fa-certificate",
            link: "https://www.kaggle.com/learn/certification/waqas010/intro-to-machine-learning"
        },
        {
            title: "Crash Course on Python",
            organization: "Coursera",
            date: "December 9, 2023",
            icon: "fas fa-certificate",
            link: "https://coursera.org/share/161dac185d86719f7f34816e3d9b18c4"
        }
    ],

    // Freelancing Experience
    freelancing: [
        {
            platform: "Freelance",
            role: "Full Stack Web Developer",
            description: "Developed and deployed responsive, scalable web applications using Django, Flask, REST APIs, authentication, and database management.",
            skills: ["Python", "Django", "Flask", "APIs", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap & Tailwind CSS" ],
            link: "#contact"
        },
        {
            platform: "Freelance",
            role: "Python Developer",
            description: "Developed backend systems and utilities using Django, Flask and Tkinter. Created API-driven platforms and GUIs for credentialing, document generation, automation tools and bot creation.",
            skills: ["Python", "Tkinter", "Selenium", "BeautifulSoap", "APIs", "MySQL" ],
            link: "#contact"
        },
        {
            platform: "Freelance | Internship",
            role: "Machine Learning Engineer",
            description: "Delivered ML pipelines for detection, prediction, classification and real-time automation using YOLOv8 and scikit-learn.",
            skills: ["Python", "NumPy", "Pandas" ,"scikit-learn", "Supervised Learning" ,"Deep Learning", "Object Detection", "Model Evaluation", "GridSearchCV / Hyperparameter Tuning", "YOLOv8"],
            link: "#contact"
        },

    ],

    // Projects
    projects: [
        {
            id: 1,
            title: "MedBridge - Credentialing & Billing System",
            description: "Full Django platform with admin dashboard, credentialing automation, billing workflows, and database-driven backend.",
            category: "Django",
            tags: ["Hosting", "Admin Panel", "Python"],
            image: "assets/img/MedBridge.png",
            github: null,
            demo: null,
            featured: true
        },
        {
            id: 2,
            title: "3D-Based E-commerce Bazaar",
            description: "3D-integrated online shopping website based on Django framework with admin panel.",
            category: "Django",
            tags: ["Ecommerce", "Admin Panel", "Python"],
            image: "assets/img/bazaar.png",
            github: null,
            demo: null,
            featured: true
        },
        {
            id: 3,
            title: "Fish Counting System",
            description: "Machine Learning powered fish counting and detection system using YOLOv8 deployed in Flask.",
            category: "Machine Learning",
            tags: ["Flask", "YOLOv8", "Python", "ML"],
            image: "assets/img/Fish_Counting_System.png",
            github: "https://github.com/Muhammad-waqas1/Fish_Counting_System--Image_Based_Fish_Detection",
            demo: null,
            featured: true
        },
        {
            id: 4,
            title: "Leaf Disease Detection System",
            description: "ML Flask web app trained to detect plant leaf diseases from uploaded images.",
            category: "Machine Learning",
            tags: ["Flask", "Python", "CNN", "ML"],
            image: "assets/img/Leaf_Disease_Detection.png",
            github: null,
            demo: null,
            featured: false
        },
        {
            id: 5,
            title: "Documentation Generation",
            description: "Web application using Flask and APIs to auto-generate formatted documents.",
            category: "Flask",
            tags: ["Web App", "API", "Python"],
            image: "assets/img/DocuGenAI.png",
            github: null,
            demo: null,
            featured: false
        },
        {
            id: 6,
            title: "Human Organ Donation System",
            description: "Organ donor registration & database management platform built in Django.",
            category: "Django",
            tags: ["Web", "Python", "DBMS"],
            image: "assets/img/Organ_Donation.png",
            github: null,
            demo: null,
            featured: false
        },
        {
            id: 7,
            title: "ExamiGo – Educational Platform",
            description: "Learning management web platform built for quiz attempts, academic resources, and student accounts.",
            category: "Web",
            tags: ["HTML", "CSS", "Python", "Web"],
            image: "assets/img/ExamiGo.png",
            github: null,
            demo: null,
            featured: false
        },
        {
            id: 8,
            title: "History Vault – History Website",
            description: "A history education website displaying categorized timeline content.",
            category: "Web",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "assets/img/History_Vault.png",
            github: "https://github.com/Muhammad-waqas1/History-Learning-Website",
            demo: "https://muhammad-waqas1.github.io/History-Learning-Website/",
            featured: false
        },
        {
            id: 9,
            title: "Premium IPTV Hub",
            description: "Product landing site for IPTV live streaming subscriptions.",
            category: "Web",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "assets/img/Premium_IPTV_Hub.png",
            github: null,
            demo: null,
            featured: false
        },
        {
            id: 10,
            title: "Techastegy – Rainwater Harvesting",
            description: "Informational engineering company website for harvesting project.",
            category: "Frontend",
            tags: ["HTML", "CSS", "Bootstrap"],
            image: "assets/img/Techastegy.png",
            github: "https://github.com/Muhammad-waqas1/Rainwater-Harvesting-Website",
            demo: "https://muhammad-waqas1.github.io/Rainwater-Harvesting-Website/",
            featured: false
        },
        {
            id: 11,
            title: "Bird Clicker Game",
            description: "Browser based game clicking birds for points.",
            category: "JavaScript Game",
            tags: ["HTML", "CSS"],
            image: "assets/img/Bird_Clicker.png",
            github: "https://github.com/Muhammad-waqas1/bird-clicker-game",
            demo: "https://muhammad-waqas1.github.io/Bird-Clicker-Game",
            featured: false
        },
        // {
        //     id: 12,
        //     title: "2D & 3D E-commerce Bazaar",
        //     description: "Multilayer shopping website supporting 2D and 3D style UI.",
        //     category: "Django",
        //     tags: ["Django", "Ecommerce", "Python", "Admin Panel"],
        //     image: "assets/img/bazaar.png",
        //     github: null,
        //     demo: null,
        //     featured: false
        // },
        {
            id: 13,
            title: "YouTube Downloader & Converter",
            description: "Tkinter Python desktop app to download YouTube videos & convert formats.",
            category: "Desktop App",
            tags: ["Python", "Tkinter"],
            image: "assets/img/YouTube_Downloader_Converter.png",
            github: "https://github.com/Muhammad-waqas1/YouTube-Downloader-and-Converter",
            demo: null,
            featured: false
        },
        {
            id: 14,
            title: "PDF Merger & XML Generator Tool",
            description: "Python utility desktop app to merge PDFs and auto-generate XML.",
            category: "Desktop App",
            tags: ["Python", "Tkinter"],
            image: "assets/img/PDF_Merger.png",
            github: null,
            demo: null,
            featured: false
        }
    ]

};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioContent;
}
