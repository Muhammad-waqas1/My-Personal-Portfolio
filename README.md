# Muhammad Waqas - Portfolio Website

A professional, fully responsive portfolio website built with HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap.

## Demo
[Click here](https://Muhammad-waqas1.github.io/My-Personal-Portfolio)

## 🚀 Features

- Fully responsive design
- Dark theme with nature-inspired accents
- Smooth animations and transitions
- Dynamic content management
- Project showcase
- Skills and certifications display
- Contact form
- Social media integration

## 📁 File Structure
```
portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── content.js
│   │   └── app.js
│   └── img/
│       ├── profile.jpg
│       └── project-images/
└── README.md
```

## 🔧 Setup Instructions

### 1. **Clone or Download**
Download all files maintaining the folder structure above.

### 2. **Add Your Images**
- Place your profile photo in `assets/img/profile.jpg`
- Add project screenshots in `assets/img/`
- Update image paths in `content.js`

### 3. **Update Content**
Edit `assets/js/content.js` to add your:
- Personal information
- Social links
- Skills
- Projects
- Education
- Certifications
- Freelancing experience

### 4. **Test Locally**
Open `index.html` in your browser to preview the website.

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it: `your-username.github.io` (replace with your actual username)
4. Make it **Public**
5. Click "Create repository"

### Step 2: Upload Files
**Option A: Using GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop all your files (maintaining folder structure)
3. Commit changes

**Option B: Using Git Command Line**
```bash
cd path/to/your/portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Muhammad-waqas1/My-Personal-Portfolio.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Navigate to "Pages" (left sidebar)
3. Under "Source", select branch: `main`
4. Select folder: `/ (root)`
5. Click "Save"

### Step 4: Access Your Website
Your site will be live at: `https://your-username.github.io`

Wait 2-5 minutes for initial deployment.

<!-- ## 📧 Contact Form Setup

### Option 1: Mailto (Default)
The contact form uses `mailto:` which opens the user's email client. No setup needed.

### Option 2: FormSubmit.co (Recommended)
1. Open `assets/js/app.js`
2. Find the `initContactForm()` function
3. Comment out the mailto code
4. Uncomment the FormSubmit.co lines
5. Replace `your-email@example.com` with your email
6. Save and redeploy
```javascript
// In app.js - initContactForm function
contactForm.action = "https://formsubmit.co/your-email@example.com";
contactForm.method = "POST";
contactForm.submit();
``` -->

## 🎨 Customization

### Colors
Edit CSS variables in `index.html` `<style>` section:
```css
:root {
    --bg-dark: #0B0B12;
    --accent-olive: #556B2F;
    --accent-glow: #9AE66E;
    /* etc. */
}
```

### Content
All content is in `assets/js/content.js` - simply edit the values.

## 🔄 Updates
After making changes:
1. Edit files locally
2. Test in browser
3. Push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License
Free to use for personal portfolios.

## 👨‍💻 Author
**Muhammad Waqas**
- GitHub: [link](https://github.com/Muhammad-waqas1)
- LinkedIn: [Link](https://www.linkedin.com/in/muhammad-waqas-834490377/)

---

⭐ Give this repo a star if you found it useful!