# Muhammad Food - Restaurant Website

A modern, responsive restaurant website for Muhammad Food, serving delicious pizzas, wraps, burgers, and more in DG Khan, Pakistan.

## Features

- **Clean Login Page** - Simple authentication interface with a beautiful food-themed background
- **Responsive Navigation** - Sticky navbar with smooth scrolling to different sections
- **Menu Showcase** - Grid-based menu display with hover animations featuring:
  - Pizza
  - Wraps
  - Burgers
  - Drinks
- **About Section** - Information about the restaurant's mission and values
- **Contact Form** - Interactive contact form with validation
- **Smooth Animations** - Fade-in effects and transitions throughout the site

## File Structure

```
muhammad-food/
│
├── index.html          # Login page
├── index2.html         # Main website (home, menu, about, contact)
├── style.css           # Styles for login page
├── style2.css          # Styles for main website
└── login.js            # JavaScript for interactions and form handling
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations, flexbox, and grid
- **JavaScript** - Interactive features and form validation
- **Unsplash** - High-quality food imagery

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/muhammad-food.git
   ```

2. Navigate to the project directory:
   ```bash
   cd muhammad-food
   ```

3. Open `index.html` in your browser to view the login page

4. After login, you'll be redirected to `index2.html` (the main website)

**Note:** Update the form action URL in `index.html` to match your local server configuration:
```html
<form action="http://127.0.0.1:5501/index2.html">
```

## Features Breakdown

### Login Page (index.html)
- Background food imagery
- Centered login form with username and password fields
- Smooth hover effects on buttons

### Main Website (index2.html)
- **Hero Section** - Eye-catching banner with tagline
- **Menu Section** - Card-based layout with images and descriptions
- **About Section** - Split layout with image and text
- **Contact Section** - Information display and working contact form
- **Footer** - Copyright and branding

### JavaScript Functionality (login.js)
- Smooth scroll navigation
- Menu card click interactions (cart demo)
- Contact form validation
- Alert notifications

## Customization

### Colors
The primary color scheme uses `#ff4d4d` (red). To change:
- Update color values in `style.css` and `style2.css`
- Search for `#ff4d4d`, `#ff4757`, and `#e84118`

### Images
Replace Unsplash URLs with your own images:
- Background images in both CSS files
- Menu item images in `index2.html`
- About section image in `index2.html`

### Contact Information
Update contact details in the contact section of `index2.html`:
- Location
- Phone number
- Email address
- Social media links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

**Muhammad Food**
- 📍 Location: DG Khan, Pakistan
- 📧 Email: sameer.sam.dgk19@gmail.com

## License

© 2025 Muhammad Food | DG Khan Special

---

*Made with ❤️ for the food lovers of DG Khan*
