export const FieldErrors = {
  firstName: {
    required: 'Please enter the contact’s first name.',
    pattern: 'Please enter a valid first name.',
    maxlength: 'First name must have less than 45 characters.',
    minlength: 'First name must have more than 2 characters.',
  },
  lastName: {
    required: 'Please enter the contact’s last name.',
    pattern: 'Please enter a valid last name.',
    maxlength: 'Last name must have less than 45 characters.',
    minlength: 'Last name must have more than 2 characters.',
  },
  email: {
    required: 'Please enter your email address.',
    email: 'Please use full email address with @ sign and domain.'
  },
  phone: {
    required: 'Please enter your mobile phone number.'
  }

};
