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

// Form elements
const form = document.getElementById('registrationForm');
const emailInput = document.getElementById('email');
const countrySelect = document.getElementById('country');
const postalCodeInput = document.getElementById('postalCode');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('passwordConfirm');
const successMessage = document.getElementById('successMessage');

// Validation functions
function showError(input, message) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector('.error-message');

  formGroup.classList.add('invalid');
  formGroup.classList.remove('valid');
  errorMessage.textContent = message;
  input.setAttribute('aria-invalid', 'true');
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector('.error-message');

  formGroup.classList.add('valid');
  formGroup.classList.remove('invalid');
  errorMessage.textContent = '';
  input.setAttribute('aria-invalid', 'false');
}

function validateEmail() {
  const value = emailInput.value.trim();

  if (value === '') {
    showError(emailInput, 'Email address is required');
    return false;
  }

  if (!validationRules.email.pattern.test(value)) {
    showError(emailInput, validationRules.email.message);
    return false;
  }

  showSuccess(emailInput);
  return true;
}

function validateCountry() {
  const value = countrySelect.value;

  if (value === '') {
    showError(countrySelect, 'Please select a country');
    return false;
  }

  showSuccess(countrySelect);
  return true;
}

function validatePostalCode() {
  const value = postalCodeInput.value.trim();
  const country = countrySelect.value;

  if (value === '') {
    showError(postalCodeInput, 'Postal code is required');
    return false;
  }

  if (country === '') {
    showError(postalCodeInput, 'Please select a country first');
    return false;
  }

  const pattern = validationRules.postalCode.patterns[country];
  const message = validationRules.postalCode.messages[country];

  if (!pattern.test(value)) {
    showError(postalCodeInput, message);
    return false;
  }

  showSuccess(postalCodeInput);
  return true;
}

function validatePassword() {
  const value = passwordInput.value;

  if (value === '') {
    showError(passwordInput, 'Password is required');
    return false;
  }

  if (value.length < validationRules.password.minLength) {
    showError(
      passwordInput,
      `Password must be at least ${validationRules.password.minLength} characters`
    );
    return false;
  }

  if (!validationRules.password.pattern.test(value)) {
    showError(passwordInput, validationRules.password.message);
    return false;
  }

  showSuccess(passwordInput);

  // Re-validate password confirmation if it has a value
  if (passwordConfirmInput.value !== '') {
    validatePasswordConfirm();
  }

  return true;
}

function validatePasswordConfirm() {
  const value = passwordConfirmInput.value;
  const passwordValue = passwordInput.value;

  if (value === '') {
    showError(passwordConfirmInput, 'Please confirm your password');
    return false;
  }

  if (value !== passwordValue) {
    showError(passwordConfirmInput, 'Passwords do not match');
    return false;
  }

  showSuccess(passwordConfirmInput);
  return true;
}

// Event listeners for live validation (blur event = when user leaves field)
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', () => {
  if (emailInput.parentElement.classList.contains('invalid')) {
    validateEmail();
  }
});

countrySelect.addEventListener('change', () => {
  validateCountry();
  // Re-validate postal code when country changes
  if (postalCodeInput.value !== '') {
    validatePostalCode();
  }
});

postalCodeInput.addEventListener('blur', validatePostalCode);
postalCodeInput.addEventListener('input', () => {
  if (postalCodeInput.parentElement.classList.contains('invalid')) {
    validatePostalCode();
  }
});

passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('input', () => {
  if (passwordInput.parentElement.classList.contains('invalid')) {
    validatePassword();
  }
});

passwordConfirmInput.addEventListener('blur', validatePasswordConfirm);
passwordConfirmInput.addEventListener('input', () => {
  if (passwordConfirmInput.parentElement.classList.contains('invalid')) {
    validatePasswordConfirm();
  }
});

// Form submission
form.addEventListener('submit', e => {
  e.preventDefault();

  // Validate all fields
  const isEmailValid = validateEmail();
  const isCountryValid = validateCountry();
  const isPostalCodeValid = validatePostalCode();
  const isPasswordValid = validatePassword();
  const isPasswordConfirmValid = validatePasswordConfirm();

  const isFormValid =
    isEmailValid &&
    isCountryValid &&
    isPostalCodeValid &&
    isPasswordValid &&
    isPasswordConfirmValid;

  if (isFormValid) {
    // Hide form and show success message
    form.style.display = 'none';
    successMessage.classList.remove('hidden');
  } else {
    // Find first invalid field and focus it
    const firstInvalidField = form.querySelector(
      '.invalid input, .invalid select'
    );
    if (firstInvalidField) {
      firstInvalidField.focus();
    }
  }
});
