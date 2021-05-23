import 'animate.css';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { ArrowMedium } from '../assets/icons/ArrowMedium';
import { Container, Head, NavBar, SimpleInput } from '../components';
import { useCreateContactMutation } from '../generated/graphql';
import { useHover } from '../hooks';
import { withApollo } from '../utils';
import emailjs, { init } from 'emailjs-com';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

init('user_oyZbnUPFuBoCCXcacNsMz');
interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const [hoverRef, isHovered] = useHover() as any;
  const [createContact] = useCreateContactMutation();

  const router = useRouter();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  console.log(phoneRegExp.test('33315826878'));

  const contactSchema = Yup.object().shape({
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

  const playAudio = () => {
   let emailAudio = new Audio("/email-sent.mp3")
   emailAudio.play();
  }

  return (
    <>
      <Head
        title='AC - Contact'
        description='Hey here you can send me some cool message, I promise I will check my email ASAP.'
      />
      <NavBar />
      <Formik
        initialValues={{
          fullname: '',
          subject: '',
          phone: '',
          message: '',
        }}
        validationSchema={contactSchema}
        onSubmit={async (values) => {
          console.log(values);
          const { errors } = await createContact({
            variables: { input: values },
          });

          emailjs
            .send('service_c3e6wd9', 'template_gZNCIK0u', {
              to_name: 'Alvaro Castillo',
              fullname: values.fullname,
              subject: values.subject,
              phone: values.phone,
              message: values.message,
            })
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );

          if (!errors)
          playAudio()
          toast.success('🙌 Your message has been sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          setTimeout(() => {
            router.reload()
          }, 3000);
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Container>
            <div className='flex flex-col justify-center md:-mt-20  '>
              <Form className='mx-auto'>
                <SimpleInput
                  label='Hi My name is*:'
                  name='fullname'
                  id='fullname'
                  value={values.fullname}
                  onChange={handleChange}
                  inputError={errors.fullname}
                  errorMessage={errors.fullname}
                  touched={touched.fullname}
                />

                <SimpleInput
                  label='I´m contacting you regarding*:'
                  name='subject'
                  id='subject'
                  value={values.subject}
                  onChange={handleChange}
                  inputError={errors.subject}
                  errorMessage={errors.subject}
                  touched={touched.subject}
                />

                <SimpleInput
                  label='You can reach me at*:'
                  name='phone'
                  id='phone'
                  value={values.phone}
                  onChange={handleChange}
                  inputError={errors.phone}
                  errorMessage={errors.phone}
                  touched={touched.phone}
                />

                <SimpleInput
                  label='One more thing*:'
                  name='message'
                  id='message'
                  value={values.message}
                  onChange={handleChange}
                  inputError={errors.message}
                  errorMessage={errors.message}
                  touched={touched.message}
                />

                <div className='flex'>
                  <button
                    ref={hoverRef}
                    type="submit"
                    id=''
                    className='border-none text-5xl text-white tracking-tight text-left justify-start mt-2'
                  >
                    Send
                  </button>
                  {isHovered && (
                    <ArrowMedium
                      color='white'
                      size='12'
                      marginTop='2'
                      marginLeft='4'
                      animationIn='fadeIn animate__delay-0.5s'
                      animationOut='fadeOut'
                    />
                  )}
                </div>
              </Form>
            </div>
          </Container>
        )}
      </Formik>
    </>
  );
};

export default withApollo({ ssr: false })(Contact);
