# Bloop Museum Website

[![Deploy Status](https://img.shields.io/badge/deploy-manual-blue)](https://github.com/aftongauntlett/bloop-demo)
[![CI/CD Pipeline](https://img.shields.io/badge/pipeline-ready-success?logo=github-actions)](https://github.com/aftongauntlett/bloop-demo/actions)
[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel)](https://bloop-demo.vercel.app)
[![Commit Activity](https://img.shields.io/github/commit-activity/m/aftongauntlett/bloop-demo?logo=git)](https://github.com/aftongauntlett/bloop-demo/commits)
[![Live Site](https://img.shields.io/badge/live%20site-bloop--demo.vercel.app-blue?logo=web)](https://bloop-demo.vercel.app)

A retro-inspired website for the Bloop Museum - an electronic entertainment museum dedicated to computers, games, media, and gadgets! **Optimized for vintage browsers including Netscape 4.0/Pentium 90 and ProtoWeb.org emulation.**

## Project Goals

This project serves as a **vintage-compatible museum website**:

- **Netscape 4.0/Pentium 90 Compatible** - Renders perfectly on vintage hardware and emulators
- **ProtoWeb.org Optimized** - Accessible to the global retro web browsing community
- **Progressive Enhancement** - Modern browsers get enhanced features, vintage browsers get core functionality
- **Retro Aesthetic** - Authentic 90s web design with table-based layouts and period-appropriate styling
- **Museum Showcase** - Display the amazing 25,000+ artifact collection
- **Educational Platform** - Perfect for school groups and tech enthusiasts

## Tech Stack

![Eleventy](https://img.shields.io/badge/Eleventy_3.1-000000?style=flat&logo=eleventy&logoColor=white)
![Nunjucks](https://img.shields.io/badge/Nunjucks-1C4913?style=flat&logo=nunjucks&logoColor=white)
![HTML4](https://img.shields.io/badge/HTML_4.0_Transitional-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS_1.0-1572B6?style=flat&logo=css3&logoColor=white)
![Netscape](https://img.shields.io/badge/Netscape_4.0_Compatible-0066CC?style=flat&logo=netscape&logoColor=white)
![ProtoWeb](https://img.shields.io/badge/ProtoWeb.org_Ready-663399?style=flat&logo=web&logoColor=white)

- **Eleventy 3.1.2** - Static site generator optimized for vintage compatibility
- **Nunjucks Templating** - Component-based templates for maintainable retro design
- **HTML 4.0 Transitional** - Maximum vintage browser compatibility
- **Progressive CSS** - Modern browsers get enhancements, vintage browsers get core styling
- **Table-based Layout** - 760px fixed width for CRT displays and browser emulation
- **Optimized Assets** - Images compressed to <80KB for Pentium 90 performance
- **Component System** - Reusable components that work across all browser generations

## Development

### Quick Start

```bash
# Clone the repository
git clone https://github.com/aftongauntlett/bloop-demo.git

cd bloop-demo

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy (builds and shows instructions)
npm run deploy
```

The site will be available at `http://localhost:8080/`

## Deployment

Built files in `_site/` can be deployed to any static web host. The site uses:

- Relative paths for portability
- Standard HTML/CSS that works everywhere
- No server-side requirements
- Optimized for slow connections

## Browser Testing

**Vintage Browser Compatibility:**

- ✅ **Netscape 4.0+** (primary target platform)
- ✅ **Internet Explorer 4.0+** (1997+ compatibility)
- ✅ **ProtoWeb.org emulation** (global retro web community)

**Modern Browser Support:**

- ✅ **Progressive enhancement** - full responsive design and modern features
- ✅ **All modern browsers** with backward-compatible fallbacks

**Optimizations for Vintage Hardware:**

- 760px fixed width for CRT displays
- Images optimized to <80KB for fast loading on Pentium 90
- No JavaScript dependencies
- Fallback content for unsupported features (iframe video, etc.)

## About the Museum

The Bloop Museum successfully moved from Baltimore, MD to Penn Hills, near Monroeville, PA! Features include:

- **25,000+ artifacts** in their collection
- **17+ years** as a pop-up museum, 7 years brick-and-mortar
- **Interactive exhibits** - visitors can use vintage computers
- **Educational tours** for schools and groups
- **Three museums in one** - Bloop, System Source Computer Museum, and National Electronics Museum

## License

MIT License - Feel free to explore, learn from, and adapt the code for educational purposes.

---

_Built with ❤️ for retro computing enthusiasts and the amazing Bloop Museum community!_
