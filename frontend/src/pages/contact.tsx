import { Head, NavBar } from '../components';
import { withApollo } from '../utils';

const Contact = () => {
  return (
    <>
      <Head
        title='AC - Contact'
        description='Hey here you can send me some cool message, I promise I will check my email ASAP.'
      />
      <NavBar />
      <div className='w-full mx-auto flex flex-col items-start container text-4xl mt-20 mb-10 gap-6 p-8'>
        <div className='flex flex-col xl:flex-row gap-2'>
          <span>Feel free to reach out to me directly at:{' '}</span>
          <a
            href='mailto:hey@alvarocastle.com' className='underline'>hey@alvarocastle.com</a> 
        </div>
        <div>
          or DM me on{' '}
          <a
            href='https://www.linkedin.com/in/alvarocastle/'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            Linkedin
          </a>
        </div>
      </div>
    </>
  );
};

export default withApollo({ ssr: false })(Contact);
