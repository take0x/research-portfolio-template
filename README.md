# Research Portfolio Website

A personal website for researchers built with Next.js, designed to showcase research work and publications. The site supports both English and Japanese languages.

## Features

- **Multilingual Support**: Switch between English and Japanese
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Academic Profile**: Sections for research areas, publications, and contact information
- **Modern UI**: Clean and professional design suitable for academic portfolios
- **GitHub Pages Ready**: Pre-configured for easy deployment to GitHub Pages

## Technologies Used

- Next.js 15
- TypeScript
- Tailwind CSS
- next-intl for internationalization

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/research-portfolio-template.git
cd research-portfolio-template
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

1. Update your name, research fields, and contact information in the components
2. Add your actual publications in `src/app/[locale]/publications/page.tsx`
3. Update your research areas in `src/app/[locale]/research/page.tsx`

### Language Support

The site supports English and Japanese by default. You can:
- Edit translations in the `messages/en.json` and `messages/ja.json` files
- Add more languages by:
  1. Adding a new language file (e.g., `messages/fr.json`)
  2. Adding the language to the `locales` array in `src/config/locales.ts`

## Deployment to GitHub Pages

The repository includes a GitHub Action workflow that automatically builds and deploys the site to GitHub Pages whenever you push to the main branch.

To enable GitHub Pages deployment:

1. Go to your repository settings on GitHub
2. Navigate to the "Pages" section
3. Under "Build and deployment" > "Source", select "GitHub Actions"
4. Push changes to the main branch to trigger a deployment
5. Your site will be available at `https://yourusername.github.io/repository-name/`

### Special Configuration for GitHub Pages

This repository has been configured with the following settings to work properly with GitHub Pages:

- Static HTML export in `next.config.js` using `output: 'export'`
- Trailing slash option enabled for proper path handling
- ESLint checks disabled during builds
- Client-side routing implementation for language switching

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the styling utilities
- next-intl for the internationalization support
