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
            description: "Completed ADP Computer Science."
        },
        {
            degree: "Intermediate",
            institution: "Govt. Graduate College",
            duration: "May 2021 - May 2023",
            location: "Layyah, Punjab",
            description: "Completed intermediate Computer Science education."
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
            skills: ["Python", "Django", "Flask", "APIs", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap & Tailwind CSS"],
            link: "#contact"
        },
        {
            platform: "Freelance",
            role: "Python Developer",
            description: "Developed backend systems and utilities using Django, Flask and Tkinter. Created API-driven platforms and GUIs for credentialing, document generation, automation tools and bot creation.",
            skills: ["Python", "Tkinter", "Selenium", "BeautifulSoap", "APIs", "MySQL"],
            link: "#contact"
        },
        {
            platform: "Freelance | Internship",
            role: "Machine Learning Engineer",
            description: "Delivered ML pipelines for detection, prediction, classification and real-time automation using YOLOv8 and scikit-learn.",
            skills: ["Python", "NumPy", "Pandas", "scikit-learn", "Supervised Learning", "Deep Learning", "Object Detection", "Model Evaluation", "GridSearchCV / Hyperparameter Tuning", "YOLOv8"],
            link: "#contact"
        },

    ],

    // Projects
    projects: [
        {
            id: 1,
            title: "MedBridge",
            shortDescription: "Credentialing & Billing System - Full Django platform with admin dashboard, credentialing automation, billing workflows, and database-driven backend.",
            description: "A full-stack Django-based healthcare credentialing and billing system designed to streamline provider onboarding, document tracking, and state-ready application generation.",

            longDescription: `
        MedBridge is a secure, role-aware web application built to solve real-world challenges faced by healthcare organizations during provider credentialing and billing processes.

        The platform centralizes provider data, automates credentialing progress tracking, manages document lifecycles, and generates structured PDF applications ready for external agency submission.
            `,

            keyFeatures: [
                "Secure provider registration and authentication",
                "Role-based access using Django authentication",
                "Dynamic dashboard with profile completion percentage",
                "Section-wise credentialing progress tracking",
                "Document upload, validation, expiration & alerts",
                "Automated PDF generation for state applications",
                "Exportable credentialing data summaries"
            ],

            techStack: {
                frontend: ["HTML5", "CSS3", "Bootstrap 5", "Font Awesome", "Django Templates"],
                backend: ["Python", "Django", "Django ORM", "Authentication System"],
                database: ["SQLite (dev)", "PostgreSQL/MySQL (production-ready)"],
                other: ["ReportLab (PDF Generation)"]
            },

            // authenticationSecurity: [
            //     "Django built-in authentication system",
            //     "Session-based authentication",
            //     "@login_required route protection",
            //     "Server-side form validation",
            //     "Secure login/logout with flash messaging"
            // ],

            userFlow: [
                "User registration with personal and provider details",
                "Automatic profile creation linked to Django User",
                "Secure login and dashboard access",
                "Step-by-step credentialing data completion",
                "Document upload and status tracking",
                "PDF application download for external submission"
            ],

            challengesSolved: "Designing a transparent completion logic system and managing document expiration workflows while maintaining secure access to sensitive healthcare data.",

            main_image: "assets/img/MedBridge.png",

            images: [
                "assets/img/bazaar.png",
                "assets/img/MedBridge.png",
                "assets/img/Bird_Clicker.png",
                "assets/img/bazaar.png"
            ],

            category: "Django",
            tags: ["Healthcare", "Admin Panel", "PDF Automation", "Secure Auth"],

            github: null,
            demo: null,

            notes: "Source code is private due to client confidentiality. Architecture, features, and workflows are demonstrated visually.",

            featured: true
        },
        {
            id: 2,
            title: "3D-Based E-commerce Bazaar",
            shortDescription: "Django-based eCommerce platform with authentication, order management, email workflows, and 3D product visualization.",
            description: "A feature-rich eCommerce web application built using Django, offering standard shopping functionality enhanced with optional 3D product previews for an improved user experience.",

            longDescription: `
Bazaar is a full-stack Django eCommerce application designed to replicate real-world online shopping workflows while introducing advanced features such as optional 3D product visualization.

The platform supports complete user account management, product browsing, order tracking, reviews, and secure admin operations with enhanced protection mechanisms.
    `,

            keyFeatures: [
                "User registration, login, and email-based activation",
                "User dashboard with order history",
                "Product browsing and category-based search",
                "Product reviews and ratings",
                "Order confirmation via email",
                "Admin panel with honeypot protection",
                "Optional 3D product model support",
                "Mandatory image fallback when 3D model is not provided"
            ],

            techStack: {
                frontend: ["HTML", "CSS", "Bootstrap", "JavaScript"],
                backend: ["Python", "Django"],
                database: ["SQLite"],
                security: ["admin_honeypot"],
                versionControl: ["Git", "GitHub"]
            },

            userFlow: [
                "User registers and activates account via email",
                "User logs in and browses products",
                "Search and filter products by category",
                "View product details (image or 3D model)",
                "Place order and receive confirmation email",
                "Track previous orders from dashboard"
            ],

            challengesSolved: "Integrating conditional 3D product rendering while maintaining standard eCommerce workflows and enforcing content validation from the admin panel.",

            main_image: "assets/img/bazaar.png",

            images: [
                "assets/img/bazaar/home.png",
                "assets/img/bazaar/product_2d.png",
                "assets/img/bazaar/product_3d.png",
                "assets/img/bazaar/admin_panel.png"
            ],

            category: "Django",
            tags: ["Ecommerce", "3D Products", "Authentication", "Admin Panel"],

            notes: "Source code is private due to client confidentiality. Architecture, features, and workflows are demonstrated visually.",

            github: null,
            demo: null,

            featured: true
        },
        {
            id: 3,
            title: "Fish Counting System",
            shortDescription: "Machine learning powered web application for detecting and counting multiple fish species in underwater images using a custom-trained YOLOv8 model.",
            description: "Machine learning powered web application for detecting and counting multiple fish species in underwater images using a custom-trained YOLOv8 model.",

            longDescription: `
This project is a professional computer vision web application built using Flask and YOLOv8 for underwater fish detection and counting.

A custom-trained YOLOv8 model was fine-tuned to accurately detect and count 13 different fish species. The system supports marine research, underwater monitoring, and computer vision prototyping for aquatic environments.
    `,

            keyFeatures: [
                "Custom-trained YOLOv8 model for underwater object detection",
                "Detection and counting of 13 different fish species",
                "Image upload and prediction visualization",
                "Annotated output images with bounding boxes",
                "Species-wise fish count display",
                "User-friendly web interface with Flask and Bootstrap"
            ],

            techStack: {
                frontend: ["HTML5", "CSS3", "Bootstrap"],
                backend: ["Python", "Flask"],
                machineLearning: ["YOLOv8", "PyTorch"],
                tools: ["Kaggle (model training)", "OpenCV"]
            },

            userFlow: [
                "User uploads an underwater image",
                "Image is processed by the YOLOv8 model",
                "Fish species are detected and counted",
                "Annotated image with bounding boxes is generated",
                "Results are displayed on the web interface"
            ],

            challengesSolved: "Improving detection accuracy in underwater environments and integrating a custom-trained YOLOv8 model into a real-time Flask web application.",

            main_image: "assets/img/Fish_Counting_System.png",

            images: [
                "assets/img/Fish_Counting_System/upload.png",
                "assets/img/Fish_Counting_System/result.png",
                "assets/img/Fish_Counting_System/species_count.png"
            ],

            category: "Machine Learning",
            tags: ["YOLOv8", "Flask", "Fine-Tune", "Kaggle"],

            github: "https://github.com/Muhammad-waqas1/Fish_Counting_System--Image_Based_Fish_Detection",
            demo: null,

            notes: "This project was developed as a Final Year Project. The YOLOv8 model was fine-tuned on Kaggle and fully integrated into a Flask-based web application.",

            featured: true
        },
        {
            id: 4,
            title: "DocuGenAI",
            shortDescription: "AI-Powered Documentation Generator - Web application using Flask and APIs to generate structured documentation or Readme suitable for developers.",
            description: "AI-powered SaaS platform that transforms minimal project inputs into complete, well-structured technical documentation with web preview and DOCX export.",

            longDescription: `
DocuGenAI is a SaaS-style web application designed to automate the creation of professional project documentation using artificial intelligence.

The platform allows users to input basic project details and instantly generate comprehensive, structured documentation suitable for developers, startups, and project managers.
    `,

            keyFeatures: [
                "AI-powered documentation generation from minimal inputs",
                "Context-aware content creation based on tech stack",
                "Live documentation preview",
                "One-click DOCX file download",
                "Clipboard integration for quick copying",
                "Real-time form validation with visual feedback",
                "Responsive and modern glassmorphism UI"
            ],

            techStack: {
                frontend: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript (ES6+)", "Font Awesome", "Google Fonts"],
                backend: ["Python", "Flask", "Jinja2"],
                ai: ["OpenAI API"],
                documents: ["python-docx"]
            },

            userFlow: [
                "User enters basic project information",
                "Form validates inputs in real-time",
                "AI generates structured documentation",
                "User previews generated content live",
                "Documentation can be copied or downloaded as DOCX"
            ],

            challengesSolved: "Designing an intuitive AI-driven workflow that generates meaningful documentation while maintaining real-time UI responsiveness and clean formatting.",

            main_image: "assets/img/DocuGenAI.png",

            images: [
                "assets/img/DocuGenAI/form.png",
                "assets/img/DocuGenAI/preview.png",
                "assets/img/DocuGenAI/download.png"
            ],

            category: "Flask",
            tags: ["API", "Documentation", "Automation"],

            github: null,
            demo: null,

            notes: "Source code is private. This project demonstrates AI integration, SaaS-style architecture, and document automation workflows.",

            featured: false
        },
        {
            id: 5,
            title: "LifeLink",
            shortDescription: "Django-based platform connecting organ donors, recipients, and medical institutions with real-time availability tracking.",
            description: "A comprehensive web platform built with Django to facilitate organ donation and transplantation by managing donors, recipients, and organ availability.",

            longDescription: `
LifeLink is a Django-powered web application designed to streamline and digitize the organ donation and transplantation process.

The platform enables donors to register their willingness to donate organs, recipients to submit organ requests, and administrators to manage organ availability. It focuses on secure data handling, real-time updates, and ease of communication between stakeholders.
    `,

            keyFeatures: [
                "Secure user registration and authentication",
                "Donor registration with organ and blood group details",
                "Recipient organ request submission",
                "Real-time organ availability listing",
                "Filterable organ availability by type and location",
                "Direct communication via WhatsApp links",
                "Admin panel for managing users, donors, and requests"
            ],

            techStack: {
                frontend: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
                backend: ["Python", "Django"],
                database: ["SQLite (development)", "PostgreSQL/MySQL (production-ready)"],
                tools: ["Django Admin", "Bootstrap Icons"]
            },

            userFlow: [
                "User registers and logs in securely",
                "Donor submits organ donation details",
                "Recipient submits an organ request",
                "Organ availability is updated dynamically",
                "Users contact relevant parties via WhatsApp links",
                "Admins manage records through Django Admin"
            ],

            challengesSolved: "Designing a clear workflow for sensitive medical data while ensuring real-time organ availability updates and secure access control.",

            main_image: "assets/img/Organ_Donation.png",

            images: [
                "assets/img/Organ_Donation/home.png",
                "assets/img/Organ_Donation/donor_form.png",
                "assets/img/Organ_Donation/availability.png",
                "assets/img/Organ_Donation/admin.png"
            ],

            category: "Django",
            tags: ["Healthcare", "DBMS", "Authentication", "Admin Panel"],

            github: null,
            demo: null,

            notes: "This project demonstrates backend data modeling, authentication workflows, and admin-driven content management for healthcare-related applications.",

            featured: false
        },
        {
            id: 6,
            title: "ExamiGo - Educational Platform",
            shortDescription: "Django-based educational platform providing categorized past exam papers for students across Punjab boards.",
            description: "An educational web application built with Django that allows students to access and explore past examination papers from multiple educational boards.",

            longDescription: `
ExamiGo is a Django-based educational resource platform designed to help students prepare for exams by providing easy access to past papers from various educational boards in Punjab, Pakistan.

The application organizes past papers by board and category, offering a simple and structured navigation experience. It also includes a contact system for user inquiries via email.
    `,

            keyFeatures: [
                "Categorized past papers by educational board",
                "Board-specific pages for easy navigation",
                "Static and dynamic content rendering using Django templates",
                "Contact form with backend email integration",
                "Simple and clean UI for student-focused usability"
            ],

            techStack: {
                frontend: ["HTML5", "CSS3", "Bootstrap"],
                backend: ["Python", "Django"],
                templates: ["Django Template Language (DTL)"],
                utilities: ["Django Email Backend"]
            },

            userFlow: [
                "User visits the platform homepage",
                "Navigates to past papers section",
                "Selects an educational board",
                "Views available past papers",
                "Contacts administrator via contact form if needed"
            ],

            challengesSolved: "Organizing large amounts of educational content in a structured manner while keeping navigation simple and accessible for students.",

            main_image: "assets/img/ExamiGo.png",

            images: [
                "assets/img/ExamiGo/home.png",
                "assets/img/ExamiGo/boards.png",
                "assets/img/ExamiGo/past_papers.png",
                "assets/img/ExamiGo/contact.png"
            ],

            category: "Django",
            tags: ["Education", "Web", "UI/UX", "Backend"],

            github: null,
            demo: null,

            notes: "This project focuses on backend routing, template rendering, and content organization using Django rather than complex business logic.",

            featured: false
        },
        {
            id: 7,
            title: "YouTube Downloader & Converter",
            shortDescription: "Python desktop application for downloading YouTube videos and extracting audio using Tkinter.",
            description: "A Python-based desktop utility built with Tkinter to download YouTube videos and convert them to MP3 using yt-dlp and FFmpeg.",

            longDescription: `
This project is a lightweight yet practical Python desktop application that allows users to download YouTube videos or extract audio in MP3 format.

The application provides a modern graphical interface, real-time progress tracking, and proper handling of different YouTube formats, including Shorts.
    `,

            keyFeatures: [
                "Download YouTube videos in MP4 format",
                "Extract and convert audio to MP3",
                "Special handling for YouTube Shorts",
                "Real-time download progress indicator",
                "Modern GUI built with Tkinter and ttkbootstrap",
                "Downloaded files list with quick folder access"
            ],

            techStack: {
                frontend: ["Tkinter", "ttkbootstrap"],
                backend: ["Python"],
                tools: ["yt-dlp", "FFmpeg"]
            },

            userFlow: [
                "User pastes a YouTube video URL",
                "Selects download format (MP4 or MP3)",
                "Download starts with live progress feedback",
                "File is saved locally and listed in the app",
                "User can open the download folder directly"
            ],

            challengesSolved: "Handling different YouTube stream formats reliably and integrating yt-dlp and FFmpeg into a responsive desktop GUI.",

            main_image: "assets/img/YouTube_Downloader_Converter.png",

            images: [
                "assets/img/YouTube_Downloader_Converter/home.png",
                "assets/img/YouTube_Downloader_Converter/progress.png",
                "assets/img/YouTube_Downloader_Converter/files.png"
            ],

            category: "Python",
            tags: ["GUI App", "Tkinter", "Automation", "Desktop App"],

            github: "https://github.com/Muhammad-waqas1/YouTube-Downloader-and-Converter",
            demo: null,

            notes: "This project demonstrates Python automation, third-party tool integration, and desktop GUI development.",

            featured: false
        },
        {
            id: 8,
            title: "PDF Merger & XML Generator Tool",
            shortDescription: "Python desktop utility for merging multiple PDF files and generating structured XML output.",
            description: "A user-friendly Python desktop application that allows users to merge multiple PDF documents into a single file with clear feedback and error handling.",

            longDescription: `
This project is a simple yet practical Python desktop utility designed to help users merge multiple PDF files into a single document through an intuitive graphical interface.

The application focuses on usability, clear feedback, and reliability, making it suitable for small office or document management tasks.
    `,

            keyFeatures: [
                "Select and merge multiple PDF files",
                "User-defined output filename",
                "Simple and intuitive GUI",
                "Clear error handling and status messages",
                "Optional structured XML generation for metadata"
            ],

            techStack: {
                frontend: ["Tkinter"],
                backend: ["Python"],
                documents: ["PyPDF2"]
            },

            userFlow: [
                "User selects multiple PDF files",
                "User specifies output filename",
                "Application merges PDFs into a single document",
                "Success or error message is displayed"
            ],

            challengesSolved: "Ensuring reliable PDF merging while providing clear user feedback and error handling in a desktop environment.",

            main_image: "assets/img/PDF_Merger.png",

            images: [
                "assets/img/PDF_Merger/home.png",
                "assets/img/PDF_Merger/select_files.png",
                "assets/img/PDF_Merger/success.png"
            ],

            category: "Python",
            tags: ["GUI App", "Tkinter", "PDF Processing", "Utilities"],

            github: null,
            demo: null,

            notes: "This project highlights Python-based file processing, GUI design, and basic document automation.",

            featured: false
        }


        // {
        //     id: NO_IDEA###,
        //     title: "Leaf Disease Detection System",
        //     description: "ML Flask web app trained to detect plant leaf diseases from uploaded images.",
        //     category: "Machine Learning",
        //     tags: ["Flask", "Python", "CNN", "ML"],
        //     image: "assets/img/Leaf_Disease_Detection.png",
        //     github: null,
        //     demo: null,
        //     featured: false
        // },

        // {
        //     id: NO_IDEA###,
        //     title: "History Vault – History Website",
        //     description: "A history education website displaying categorized timeline content.",
        //     category: "Web",
        //     tags: ["HTML", "CSS", "JavaScript"],
        //     image: "assets/img/History_Vault.png",
        //     github: "https://github.com/Muhammad-waqas1/History-Learning-Website",
        //     demo: "https://muhammad-waqas1.github.io/History-Learning-Website/",
        //     featured: false
        // },
        // {
        //     id: NO_IDEA###,
        //     title: "Premium IPTV Hub",
        //     description: "Product landing site for IPTV live streaming subscriptions.",
        //     category: "Web",
        //     tags: ["HTML", "CSS", "JavaScript"],
        //     image: "assets/img/Premium_IPTV_Hub.png",
        //     github: null,
        //     demo: null,
        //     featured: false
        // },
        // {
        //     id: NO_IDEA###,
        //     title: "Techastegy – Rainwater Harvesting",
        //     description: "Informational engineering company website for harvesting project.",
        //     category: "Frontend",
        //     tags: ["HTML", "CSS", "Bootstrap"],
        //     image: "assets/img/Techastegy.png",
        //     github: "https://github.com/Muhammad-waqas1/Rainwater-Harvesting-Website",
        //     demo: "https://muhammad-waqas1.github.io/Rainwater-Harvesting-Website/",
        //     featured: false
        // },
        // {
        //     id: NO_IDEA###,
        //     title: "Bird Clicker Game",
        //     description: "Browser based game clicking birds for points.",
        //     category: "JavaScript Game",
        //     tags: ["HTML", "CSS"],
        //     image: "assets/img/Bird_Clicker.png",
        //     github: "https://github.com/Muhammad-waqas1/bird-clicker-game",
        //     demo: "https://muhammad-waqas1.github.io/Bird-Clicker-Game",
        //     featured: false
        // },
        // {
        //     id: NO_IDEA###,
        //     title: "2D & 3D E-commerce Bazaar",
        //     description: "Multilayer shopping website supporting 2D and 3D style UI.",
        //     category: "Django",
        //     tags: ["Django", "Ecommerce", "Python", "Admin Panel"],
        //     image: "assets/img/bazaar.png",
        //     github: null,
        //     demo: null,
        //     featured: false
        // },

    ]

};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioContent;
}
