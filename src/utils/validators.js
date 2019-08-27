export const required = value => (!!value);
export const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
export const maxLength15 = maxLength(15);
export const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
export const minLength8 = minLength(8);
export const length6 = minLength(6);
export const emailFormat = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined);
export const usernameValidation = value => (!(value && /[^a-zA-Z0-9_-]/i.test(value)));
export const passwordValidation = value => (!(value && /[^a-zA-Z0-9_-]/i.test(value)));
export const doBValidation = value => (!(value && /[^0-9]/i.test(value)));
export const phoneNumberValidation = value => (!(value && /[^0-9]/i.test(value)));
export const firstnameValidation = value => (!(value && /[^a-zA-Z0-9_-]/i.test(value)));
export const lastnameValidation = value => (!(value && /[^a-zA-Z0-9_-]/i.test(value)));
