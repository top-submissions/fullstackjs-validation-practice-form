import './css/styles.css';

// Validation patterns and rules
const validationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  postalCode: {
    patterns: {
      US: /^\d{5}(-\d{4})?$/,
      PH: /^\d{4}$/,
      UK: /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i,
      CA: /^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/i,
      AU: /^\d{4}$/,
      JP: /^\d{3}-?\d{4}$/,
      Other: /^.+$/,
    },
    messages: {
      US: 'Enter a valid US ZIP code (e.g., 12345 or 12345-6789)',
      PH: 'Enter a valid Philippine postal code (4 digits)',
      UK: 'Enter a valid UK postcode (e.g., SW1A 1AA)',
      CA: 'Enter a valid Canadian postal code (e.g., K1A 0B1)',
      AU: 'Enter a valid Australian postcode (4 digits)',
      JP: 'Enter a valid Japanese postal code (e.g., 123-4567)',
      Other: 'Please enter a postal code',
    },
  },
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    message:
      'Password must be at least 8 characters with uppercase, lowercase, and number',
  },
};
