# Personal Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS, inspired by the design at [https://pganeshkrishnareddy.netlify.app/](https://pganeshkrishnareddy.netlify.app/).

## Features

- 🎨 Modern and clean design with dark theme
- 📱 Fully responsive across all devices
- ✨ Smooth animations using Framer Motion
- 🎯 Interactive navigation with active section highlighting
- 📧 Contact form with validation
- 🚀 Optimized performance and SEO
- 🎭 Customizable content and styling

## Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization Guide

### 1. Personal Information

Update your personal details in the following files:

#### Hero Section (`src/components/Hero.js`)
```javascript
// Update these values
const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/YOUR_USERNAME', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/YOUR_USERNAME', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:YOUR_EMAIL@example.com', label: 'Email' }
];

// Update the hero text
<h1 className="heading-primary">Your Name.</h1>
<h2>I build things for the web.</h2>
```

#### About Section (`src/components/About.js`)
```javascript
// Update the about text and skills
const skills = [
  'Your', 'Custom', 'Skills', 'Here'
];

// Update the about paragraphs
<p>Hello! I'm Your Name, a passionate software engineer...</p>
```

#### Experience Section (`src/components/Experience.js`)
```javascript
const experiences = [
  {
    company: 'Your Company',
    position: 'Your Position',
    duration: '2022 - Present',
    description: [
      'Your achievements and responsibilities'
    ],
    technologies: ['Your', 'Technologies']
  }
];
```

#### Projects Section (`src/components/Projects.js`)
```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/yourusername/project',
    live: 'https://your-project.com',
    featured: true
  }
];
```

#### Contact Section (`src/components/Contact.js`)
```javascript
const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  }
];
```

### 2. Styling Customization

#### Colors (`tailwind.config.js`)
```javascript
colors: {
  primary: "#0a192f",      // Main background
  secondary: "#64ffda",    // Accent color
  textPrimary: "#ccd6f6",  // Primary text
  textSecondary: "#8892b0", // Secondary text
  darkBlue: "#112240",     // Card backgrounds
  lightBlue: "#233554"     // Borders
}
```

#### Typography (`src/index.css`)
Update font families and custom styles in the CSS file.

### 3. Images and Assets

1. Replace placeholder images in the About section
2. Add your profile picture
3. Add project screenshots
4. Update favicon and other assets in the `public` folder

### 4. SEO and Meta Tags

Update the meta tags in `public/index.html`:
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your portfolio description" />
```

### 5. Deployment

#### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

#### GitHub Pages
1. Add homepage to package.json: `"homepage": "https://yourusername.github.io/repo-name"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
4. Deploy: `npm run deploy`

## File Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Experience.js      # Work experience
│   ├── Projects.js        # Projects showcase
│   ├── Skills.js          # Skills section
│   ├── Contact.js         # Contact form
│   └── Footer.js          # Footer component
├── App.js                 # Main app component
├── index.js               # App entry point
└── index.css              # Global styles
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from [P Ganesh Krishna Reddy's portfolio](https://pganeshkrishnareddy.netlify.app/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or contact me directly.

---

**Happy coding! 🚀**
