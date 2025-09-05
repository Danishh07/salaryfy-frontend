# Salaryfy.io - Financial Awareness & Empowerment Platform

A modern, responsive web application built with Next.js that helps users understand their salary breakdown, taxation, and improve their financial literacy.

## 🌟 Features

### Core Functionality
- **Salary Breakdown Calculator**: Detailed analysis of salary components including basic pay, HRA, PF, and tax deductions
- **Tax Information Hub**: Comprehensive information about income tax slabs and tax planning strategies
- **Financial Education Center**: Curated articles and resources for financial literacy
- **Contact System**: Professional contact form with multiple inquiry categories

### Technical Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Modern UI/UX**: Clean, professional interface using TailwindCSS
- **Performance Optimized**: Built with Next.js 15 and App Router for optimal performance
- **Type Safety**: Full TypeScript implementation for robust development
- **Accessibility**: WCAG compliant design patterns

## 🛠 Tech Stack

### Frontend Framework
- **Next.js 15.5.2** - React framework with App Router
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript

### Styling & UI
- **TailwindCSS 3.4.14** - Utility-first CSS framework
- **Framer Motion 11.15.0** - Animation and transitions
- **Lucide React 0.456.0** - Modern icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Utilities
- **clsx & tailwind-merge** - Conditional className management
- **next-themes** - Theme management system

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd salaryfy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
salaryfy/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── contact/               # Contact page
│   │   ├── financial-education/   # Educational resources
│   │   ├── salary-calculator/     # Salary calculator tool
│   │   ├── tax-info/             # Tax information
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/                # Reusable components
│   │   ├── calculators/          # Calculator components
│   │   ├── contact/              # Contact form components
│   │   ├── education/            # Educational components
│   │   ├── layout/               # Layout components (navbar, footer)
│   │   ├── providers/            # Context providers
│   │   ├── sections/             # Page sections
│   │   ├── tax/                  # Tax-related components
│   │   └── ui/                   # Base UI components
│   ├── data/                     # Static data and content
│   └── lib/                      # Utility functions
├── public/                       # Static assets
├── .github/                      # GitHub configuration
├── package.json                  # Dependencies and scripts
├── tailwind.config.js           # TailwindCSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## 🧮 Salary Calculator Features

- **Comprehensive Breakdown**: Basic pay, HRA, special allowance calculations
- **Tax Calculations**: Income tax estimation using latest tax slabs
- **Deduction Analysis**: PF, professional tax, and other deductions
- **Real-time Updates**: Instant calculations as you type
- **Mobile Responsive**: Works seamlessly on all devices

## 💰 Tax Information

- **Current Tax Slabs**: Updated for FY 2023-24
- **Tax Planning Tips**: Strategies for legal tax optimization
- **Deduction Guide**: Section 80C, 80D, and other deductions
- **Regime Comparison**: Old vs New tax regime information

## 📚 Financial Education

- **Curated Articles**: Expert-written financial content
- **Category Filtering**: Organized by topics (salary planning, investments, etc.)
- **Resource Center**: Tools and calculators for financial planning
- **Regular Updates**: Fresh content added regularly

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones for trust and professionalism
- **Secondary**: Gray scale for content and backgrounds
- **Accent**: Success green, warning orange, error red

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive Sizing**: Optimized for all screen sizes
- **Accessibility**: High contrast ratios for readability

### Components
- **Consistent Spacing**: 4px grid system
- **Rounded Corners**: Modern, friendly appearance
- **Hover States**: Interactive feedback on all clickable elements

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Responsive Design

- **Mobile First**: Designed primarily for mobile users
- **Breakpoints**:
  - sm: 640px (tablets)
  - md: 768px (small laptops)
  - lg: 1024px (desktops)
  - xl: 1280px (large desktops)

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Semantic HTML and ARIA labels
- **Color Contrast**: Meets minimum contrast requirements
- **Focus Management**: Clear focus indicators

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- UI inspiration from modern financial platforms
- Built with [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/)

## 📞 Support

For support, email contact@salaryfy.io or create an issue in this repository.

## 🔗 Links

- **Live Demo**: [Deployment Link Placeholder]
- **Documentation**: [Documentation Link Placeholder]
- **API Reference**: [API Reference Link Placeholder]

---

**Note**: This project is designed for educational and informational purposes. For personalized financial advice, please consult with qualified financial advisors.

## 📸 Screenshots

### Home Page
<!-- ![Home Page](./screenshots/home.png) -->

### Salary Calculator
<!-- ![Salary Calculator](./screenshots/calculator.png) -->

### Tax Information
<!-- ![Tax Information](./screenshots/tax-info.png) -->

### Financial Education
<!-- ![Financial Education](./screenshots/education.png) -->

### Contact Page
<!-- ![Contact Page](./screenshots/contact.png) -->

### Dark Mode
<!-- ![Dark Mode](./screenshots/dark-mode.png) -->

*Screenshots to be added after deployment*
