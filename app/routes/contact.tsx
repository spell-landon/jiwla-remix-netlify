import { MailOutline, Phone } from '@mui/icons-material';
import { MetaFunction } from '@remix-run/node';
import clsx from 'clsx';
import { useWindowDimensions } from '~/hooks/useWindowDimensions';
import { COMPANY_INFO } from '~/lib/const';

export const meta: MetaFunction = () => {
  const { companyName } = COMPANY_INFO;
  return [
    { title: `${companyName} - Contact` },
    { name: 'description', content: `${companyName} - Contact` },
  ];
};

export default function Contact() {
  const { phoneNumber, emailAddress, address, addressUrl } = COMPANY_INFO;
  const { isMobile } = useWindowDimensions();
  return (
    <div className='w-full flex flex-col'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.9291406074235!2d-117.6129213880474!3d34.02002977305734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c334cd039d3f17%3A0x9812e73bf0bab2f2!2s2949%20S%20Vineyard%20Ave%2C%20Ontario%2C%20CA%2091761!5e0!3m2!1sen!2sus!4v1706670308818!5m2!1sen!2sus'
        height='400'
        style={{ border: '0px', width: '100%' }}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'></iframe>
      <div className='w-full py-8 px-4'>
        <div className='w-full max-w-xl mx-auto flex flex-col sm:flex-row justify-between gap-8 sm:gap-4'>
          {/* Contact Info */}
          <div className='flex flex-col gap-4'>
            <span className='font-medium'>Contact Info</span>
            <div className='flex flex-col text-primay/80 gap-2'>
              <div className={clsx('flex items-center gap-1 font-Sono')}>
                <Phone fontSize='small' className='text-primary/80' />
                {isMobile ? (
                  <a href={`tel:${phoneNumber}`} className='font-light'>
                    {phoneNumber}
                  </a>
                ) : (
                  <p className='font-light'>{phoneNumber}</p>
                )}
              </div>
              <div className={clsx('flex items-center gap-1')}>
                <MailOutline fontSize='small' className='text-primary/80' />
                <a
                  href={`mailto:${emailAddress}`}
                  className='font-Sono font-light text-[#6484A0]'>
                  {emailAddress}
                </a>
              </div>
            </div>
          </div>
          {/* Address */}
          <div className='flex flex-col gap-4'>
            <span className='font-medium'>Address</span>
            <a
              href={addressUrl}
              className='font-Sono font-light text-[#6484A0]'
              dangerouslySetInnerHTML={{ __html: address }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
