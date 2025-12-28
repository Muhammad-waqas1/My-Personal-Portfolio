// ========================================
// PORTFOLIO INTERACTIONS & ANIMATIONS
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS Animation
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Populate content from content.js
    populateContent();

    // Initialize scroll effects
    initScrollEffects();

    // Initialize contact form
    initContactForm();

    // Initialize smooth scrolling
    initSmoothScroll();
});

// ========================================
// POPULATE CONTENT
// ========================================
function populateContent() {
    const content = portfolioContent;

    // Personal Info
    document.getElementById('heroName').textContent = content.personal.fullName;
    document.getElementById('heroRole').textContent = content.personal.role;
    document.getElementById('heroTagline').textContent = content.personal.tagline;
    document.getElementById('aboutText').textContent = content.personal.bio;

    // Profile Image
    if (content.personal.profileImage) {
        document.getElementById('profileImage').src = content.personal.profileImage;
    }

    // Social Links
    populateSocialLinks();

    // Skills
    populateSkills();

    // Projects
    populateProjects();

    // Education
    populateEducation();

    // Certifications
    populateCertifications();

    // Freelancing
    populateFreelancing();

    // Footer
    document.getElementById('footerText').textContent = `© ${new Date().getFullYear()} ${content.personal.fullName}. All Rights Reserved.`;

    // WhatsApp Button
    // document.getElementById('whatsappBtn').href = content.social.whatsapp;
}

// ========================================
// SOCIAL LINKS
// ========================================
function populateSocialLinks() {
    const social = portfolioContent.social;
    const socialLinksContainer = document.getElementById('socialLinks');
    const footerSocialsContainer = document.getElementById('footerSocials');

    const socialHTML = `
        <a href="${social.github}" target="_blank" class="social-icon" title="GitHub">
            <i class="fab fa-github fa-xl"></i>
        </a>
        <a href="${social.linkedin}" target="_blank" class="social-icon" title="LinkedIn">
            <i class="fab fa-linkedin fa-xl"></i>
        </a>
        ${social.instagram ? `
            <a href="${social.instagram}" target="_blank" class="social-icon" title="Instagram">
                <i class="fab fa-instagram fa-xl"></i>
            </a>
        ` : ''}
        <a href="${social.whatsapp}" target="_blank" class="social-icon" title="WhatsApp">
            <i class="fab fa-whatsapp fa-xl"></i>
        </a>
        <a href="${social.email}" class="social-icon" title="Email">
            <i class="fas fa-envelope fa-xl"></i>
        </a>
    `;

    socialLinksContainer.innerHTML = socialHTML;
    footerSocialsContainer.innerHTML = socialHTML;
}

// ========================================
// SKILLS
// ========================================
function populateSkills() {
    const skills = portfolioContent.skills;
    const skillsGrid = document.getElementById('skillsGrid');

    let skillsHTML = '';
    skills.forEach((skill, index) => {
        skillsHTML += `
            <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="${index * 50}">
                <div class="skill-item">
                    <i class="${skill.icon} skill-icon"></i>
                    <h5 style="color: var(--text-primary); font-size: 1rem; margin: 0;">${skill.name}</h5>
                </div>
            </div>
        `;
    });

    skillsGrid.innerHTML = skillsHTML;
}

// ========================================
// PROJECTS
// ========================================
function populateProjects() {
    const projects = portfolioContent.projects;
    const projectsGrid = document.getElementById('projectsGrid');

    // Featured projects first
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    let projectsHTML = '';

    featuredProjects.forEach((project, index) => {
        projectsHTML += createProjectCard(project, index, true);
    });

    otherProjects.forEach((project, index) => {
        projectsHTML += createProjectCard(project, index + featuredProjects.length, false);
    });

    projectsGrid.innerHTML = projectsHTML;
}

function createProjectCard(project, index, isFeatured) {
    const colClass = isFeatured ? 'col-md-6 col-lg-4 ' : 'col-md-6 col-lg-4';
    const Project_Class = isFeatured ? 'project-card border-4 border border-danger border-opacity-50 ' : 'project-card';

    return `
        <div class="${colClass}" data-aos="fade-up" data-aos-delay="${index * 50}">
            <div class="${Project_Class}">
                <div style="overflow: hidden;">
                    <img src="${project.image}" alt="${project.title}" class="project-img">
                </div>
                <div style="padding: 1.5rem;">
                    <div class="mb-3">
                        <span class="project-tag">${project.category}</span>
                        ${project.tags.slice(0, 2).map(tag => `<span class="project-tag" style="background: rgba(154, 230, 110, 0.2); color: var(--accent-glow);">${tag}</span>`).join('')}
                    </div>
                    <h4 style="color: var(--text-primary); margin-bottom: 1rem;">${project.title}</h4>
                    <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">${project.description}</p>
                    <div class="d-flex gap-2 flex-wrap">
                        ${project.github ? `
                            <a href="${project.github}" target="_blank" class="btn btn-custom-secondary btn-sm">
                                <i class="fab fa-github me-1"></i>Code
                            </a>
                        ` : ''}
                        ${project.demo ? `
                            <a href="${project.demo}" target="_blank" class="btn btn-custom-primary btn-sm">
                                <i class="fas fa-external-link-alt me-1"></i>Live Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// EDUCATION
// ========================================
function populateEducation() {
    const education = portfolioContent.education;
    const educationTimeline = document.getElementById('educationTimeline');

    let educationHTML = '';
    education.forEach((edu, index) => {
        educationHTML += `
            <div class="timeline-item" data-aos="fade-right" data-aos-delay="${index * 100}">
                <div class="timeline-dot"></div>
                <div class="card-custom">
                    <h4 style="color: var(--accent-glow); margin-bottom: 0.5rem;">${edu.degree}</h4>
                    <h5 style="color: var(--text-primary); margin-bottom: 0.5rem;">${edu.institution}</h5>
                    <p style="color: var(--accent-beige); margin-bottom: 0.5rem;">
                        <i class="fas fa-calendar-alt me-2"></i>${edu.duration}
                        ${edu.location ? `<i class="fas fa-map-marker-alt ms-3 me-2"></i>${edu.location}` : ''}
                    </p>
                    <p style="color: var(--text-secondary);">${edu.description}</p>
                </div>
            </div>
        `;
    });

    educationTimeline.innerHTML = educationHTML;
}

// ========================================
// CERTIFICATIONS
// ========================================
function populateCertifications() {
    const certifications = portfolioContent.certifications;
    const certificationsGrid = document.getElementById('certificationsGrid');

    let certificationsHTML = '';
    certifications.forEach((cert, index) => {
        certificationsHTML += `
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="card-custom text-center">
                    <div class="cert-badge">
                        <i class="${cert.icon}"></i>
                    </div>
                    <h5 style="color: var(--text-primary); margin-bottom: 1rem;">${cert.title}</h5>
                    <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">${cert.organization}</p>
                    <p style="color: var(--accent-beige); font-size: 0.9rem;">
                        <i class="fas fa-calendar-check me-1"></i>${cert.date}
                    </p>
                    ${cert.link && cert.link !== '#' ? `
                        <a href="${cert.link}" target="_blank" class="btn btn-custom-secondary btn-sm mt-2">
                            <i class="fas fa-external-link-alt me-1"></i>View
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
    });

    certificationsGrid.innerHTML = certificationsHTML;
}

// ========================================
// FREELANCING
// ========================================
function populateFreelancing() {
    const freelancing = portfolioContent.freelancing;
    const freelancingGrid = document.getElementById('freelancingGrid');

    let freelancingHTML = '';
    freelancing.forEach((work, index) => {
        freelancingHTML += `
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="card-custom">
                    <div class="mb-3">
                        <span class="project-tag">${work.platform}</span>
                    </div>
                    <h4 style="color: var(--accent-glow); margin-bottom: 1rem;">${work.role}</h4>
                    <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${work.description}</p>
                    <div class="mb-3">
                        ${work.skills.map(skill => `<span class="badge" style="background: rgba(154, 230, 110, 0.2); color: var(--accent-glow); margin-right: 0.5rem; margin-bottom: 0.5rem;">${skill}</span>`).join('')}
                    </div>
                    ${work.link && work.link !== '#contact' ? `
                        <a href="${work.link}" target="_blank" class="btn btn-custom-primary btn-sm">
                            <i class="fas fa-external-link-alt me-1"></i>View Profile
                        </a>
                    ` : `
                        <a href="#contact" class="btn btn-custom-primary btn-sm">
                            <i class="fas fa-envelope me-1"></i>Hire Me
                        </a>
                    `}
                </div>
            </div>
        `;
    });

    freelancingGrid.innerHTML = freelancingHTML;
}

// ========================================
// SCROLL EFFECTS
// ========================================
function initScrollEffects() {
    const navbar = document.querySelector('.navbar-custom');
    const scrollTop = document.getElementById('scrollTop');

    window.addEventListener('scroll', function () {
        // Navbar scroll effect
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll to top button
        if (window.scrollY > 500) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    });

    // Scroll to top functionality
    scrollTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// CONTACT FORM
// ========================================
function initContactForm() {
    // const contactForm = document.getElementById('contactForm');

    // contactForm.addEventListener('submit', async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(contactForm);

    //     const response = await fetch(contactForm.action, {
    //         method: "POST",
    //         body: formData,
    //         headers: {
    //             'Accept': 'application/json'
    //         }
    //     });

    //     if (response.ok) {
    //         alert('Message sent successfully!');
    //         contactForm.reset();
    //     } else {
    //         alert('Failed to send message');
    //     }
    // });

}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
}

// ========================================
// TYPING EFFECT (Optional Enhancement)
// ========================================
function typingEffect() {
    const roles = [
        "Fullstack Web Developer",
        "Python Developer",
        "Software Engineer",
        "Django Developer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const roleElement = document.getElementById('heroRole');

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let timeout = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            timeout = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(type, timeout);
    }

    // Uncomment to enable typing effect
    type();
}
typingEffect();