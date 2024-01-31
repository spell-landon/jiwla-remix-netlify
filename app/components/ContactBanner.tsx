import PhoneButton from './PhoneButton';

const ContactBanner = () => {
  return (
    <div className='w-full max-w-sm sm:max-w-7xl mx-auto py-4 px-4'>
      <div className='flex flex-col gap-0 items-center justify-center'>
        <span className='text-center font-normal'>Call us today!</span>
        <PhoneButton size='large' />
      </div>
    </div>
  );
};

export default ContactBanner;
