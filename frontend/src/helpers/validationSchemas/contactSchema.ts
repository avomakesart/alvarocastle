import * as Yup from 'yup';
import { phoneRegExp } from '../../utils/regex';

export const contactSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(4, 'The min lenght for the full name is 4 characters!')
    .max(200, 'Wow you full is too long!')
    .required('This field required'),
  subject: Yup.string()
    .min(4, 'The min lenght for the subject is 4 characters!')
    .max(50, 'The subject message is too long!')
    .required('This field is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid!')
    .required('This field is required'),
  message: Yup.string()
    .min(10, 'The min lenght for the message is 10 characters!')
    .max(1000, 'The message is too long!')
    .required('This field is required'),
});
