# Form Validation with JavaScript

[![Issues](https://img.shields.io/github/issues/top-submissions/fullstackjs-validation-practice-form.svg)](https://github.com/top-submissions/fullstackjs-validation-practice-form/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/top-submissions/fullstackjs-validation-practice-form.svg)](https://github.com/top-submissions/fullstackjs-validation-practice-form/pulls)
[![Last Commit](https://img.shields.io/github/last-commit/top-submissions/fullstackjs-validation-practice-form.svg)](https://github.com/top-submissions/fullstackjs-validation-practice-form/commits)
[![Contributors](https://img.shields.io/github/contributors/top-submissions/fullstackjs-validation-practice-form.svg)](https://github.com/top-submissions/fullstackjs-validation-practice-form/graphs/contributors)

A practice project from [The Odin Project](https://www.theodinproject.com) - Full Stack JavaScript Path. This project demonstrates client-side form validation using the Constraint Validation API and custom JavaScript validation logic.

## 📝 Project Description

This browser form implements **live inline validation** to provide real-time feedback as users fill out registration fields. The form validates input as you type and when you leave each field, highlighting errors in red with helpful guidance messages.

### Form Fields

- **Email Address**: Validates proper email format
- **Country**: Required dropdown selection
- **Postal Code**: Country-specific format validation
- **Password**: Minimum 8 characters with uppercase, lowercase, and number requirements
- **Password Confirmation**: Must match the password field

## ✨ Features

- 🔴 **Live validation** - Validates as you type and on field blur
- 🎨 **Visual feedback** - Invalid fields highlighted in red, valid in green
- 💬 **Custom error messages** - Clear guidance for fixing validation errors
- 🌍 **Country-specific postal codes** - Different patterns for US, UK, CA, AU, JP, PH, and more
- 🔒 **Password strength validation** - Enforces strong password requirements
- ✅ **Form submission handling** - Prevents submission with errors, shows success message
- 📱 **Responsive design** - Works on all device sizes
- ♿ **Accessible** - ARIA attributes for screen readers

## 🚀 Technologies Used

- HTML5 (with `novalidate` attribute)
- CSS3 (with `:valid` and `:invalid` pseudo-classes)
- JavaScript (Constraint Validation API concepts)
- Webpack 5
- ESLint & Prettier

## 📋 Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)
- A modern web browser

## 🔧 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/top-submissions/fullstackjs-validation-practice-form.git
cd fullstackjs-validation-practice-form
```

1. **Install dependencies**

```bash
npm install
```

1. **Start development server**

```bash
npm run dev
```

The application will open automatically at `http://localhost:8080`

1. **Build for production**

```bash
npm run build
```

Production-optimized files will be generated in the `dist/` directory.

## 🎯 Learning Objectives

This project demonstrates:

- Using JavaScript's Constraint Validation API
- Implementing custom validation logic
- Real-time form validation (blur and input events)
- Managing form state and error messages
- Styling validation states with CSS pseudo-classes
- Creating accessible forms with ARIA attributes
- Preventing form submission with active errors

## 📚 Validation Rules

### Email

- Required field
- Must match email pattern: `user@example.com`

### Country

- Required selection from dropdown

### Postal Code

- Required field
- Format varies by country:
  - **US**: 12345 or 12345-6789
  - **Philippines**: 4 digits
  - **UK**: SW1A 1AA format
  - **Canada**: K1A 0B1 format
  - **Australia**: 4 digits
  - **Japan**: 123-4567 format

### Password

- Required field
- Minimum 8 characters
- Must contain at least one uppercase letter
- Must contain at least one lowercase letter
- Must contain at least one number

### Password Confirmation

- Required field
- Must exactly match the password field

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 🚀 Deployment

### GitHub Pages

Use the built-in deployment script:

```bash
npm run deploy
```

This will build the project and deploy to GitHub Pages automatically.

### Other Platforms

The `dist/` folder contains all files needed for deployment:

- **Netlify**: Drag and drop `dist/` folder or connect repository
- **Vercel**: Import repository or deploy `dist/`
- **Custom Server**: Upload contents of `dist/`

## 📖 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run watch` - Watch files and rebuild on changes
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🤝 Contributing

This is a learning project, but feedback and suggestions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Odin Project](https://www.theodinproject.com) - For the excellent curriculum and project guidelines
- [MDN Web Docs](https://developer.mozilla.org/) - For comprehensive documentation on form validation
- The open-source community for inspiration and learning resources

## 📬 Contact

Project Link: [https://github.com/top-submissions/fullstackjs-validation-practice-form](https://github.com/top-submissions/fullstackjs-validation-practice-form)

---

**Note**: This project uses `novalidate` on the form element to handle all validation through JavaScript, as required by The Odin Project curriculum.
