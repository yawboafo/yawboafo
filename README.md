# Yaw Koranteng Boafo - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing professional experience, skills, projects, and education.

## 🚀 Features

- **Modern Design**: Clean, minimalist Gen-Z aesthetic with premium UI/UX
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Smooth Animations**: Elegant fade-in effects and scroll animations
- **Interactive Elements**: Floating cards, hover effects, and smooth scrolling
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Performance Optimized**: Fast loading with efficient CSS and JavaScript
- **Accessibility**: Keyboard navigation support and ARIA labels

## 📂 Project Structure

```
yawboafo/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Variables, Grid, Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

## 🎨 Design Features

### Color Scheme
- **Light Mode**: Clean white background with blue/purple gradients
- **Dark Mode**: Dark slate background with vibrant accents
- **Accent Colors**: Blue (#3b82f6) and Purple (#8b5cf6) gradients

### Sections
1. **Hero**: Eye-catching introduction with animated floating cards
2. **About**: Professional summary with mission, philosophy, and leadership
3. **Experience**: Timeline of professional roles and achievements
4. **Skills**: Categorized technical and soft skills
5. **Projects**: Portfolio of major applications (Hubtel, iTagTip)
6. **Education**: Academic background and certifications
7. **Contact**: Contact form and social links
8. **Footer**: Quick links and social media

## 🚦 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for testing

### Installation

1. Clone or download the repository:
```bash
git clone <repository-url>
cd yawboafo
```

2. Open `index.html` in your web browser:
```bash
# Option 1: Direct open
open index.html

# Option 2: Using Python's built-in server
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Using Node's http-server
npx http-server
```

## 📱 Customization

### Update Personal Information
Edit `index.html` to update:
- Name and titles
- Professional summary
- Experience details
- Skills and technologies
- Project descriptions
- Education background
- Contact information

### Customize Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --accent-primary: #3b82f6;    /* Primary accent color */
    --accent-secondary: #8b5cf6;   /* Secondary accent color */
    /* ... more variables */
}
```

### Add Your Photo
Replace the placeholder in the hero section:
```html
<div class="image-placeholder">
    <!-- Replace with: -->
    <img src="your-photo.jpg" alt="Yaw Koranteng Boafo">
</div>
```

### Connect Contact Form
Update the form submission in `script.js`:
```javascript
// Replace the setTimeout simulation with actual API call
fetch('your-api-endpoint', {
    method: 'POST',
    body: JSON.stringify(formData)
})
```

## ⚡ Features in Detail

### Interactive Elements
- **Smooth Scroll**: Click navigation links for smooth scrolling
- **Active Nav Links**: Navigation highlights current section
- **Theme Toggle**: Press 'T' or click theme button
- **Mobile Menu**: Hamburger menu for mobile devices
- **Scroll Progress**: Visual progress bar at top
- **Floating Cards**: Animated cards in hero section
- **Form Validation**: Contact form with success notifications

### Performance
- Lazy loading ready for images
- Intersection Observer for scroll animations
- Optimized CSS with CSS Variables
- Minimal JavaScript dependencies
- Fast page load times

### Accessibility
- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Focus indicators for keyboard users
- Responsive text sizing

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Yaw Koranteng Boafo**
- Email: yaw.boafo@example.com
- LinkedIn: [linkedin.com/in/yawboafo](https://linkedin.com/in/yawboafo)
- GitHub: [github.com/yawboafo](https://github.com/yawboafo)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs

---

**Built with passion for mobile engineering excellence** 🚀

Last Updated: November 2025