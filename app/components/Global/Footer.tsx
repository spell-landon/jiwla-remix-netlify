import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { COMPANY_INFO } from '~/lib/const';
import map from '~/media/map.png';
import jiwla_logo_transparent from '~/media/jiwla_logo_transparent.png';
import PhoneButton from '../PhoneButton';

const Footer = () => {
  const { addressUrl, companyName } = COMPANY_INFO;
  return (
    <div
      className={clsx(
        'w-full py-4 text-primary border-t border-t-primary border-opacity-10'
      )}>
      <div
        className={clsx(
          'w-full max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16'
        )}>
        <div className='flex flex-col items-center md:items-start gap-4'>
          <img src={jiwla_logo_transparent} alt='' className='w-24' />
          <span className='w-full max-w-36 font-StardosStencil uppercase font-bold text-secondary leading-tight text-center md:text-left'>
            {companyName}
          </span>
          <PhoneButton />
        </div>

        <Link to={addressUrl}>
          <img
            key={map}
            className={clsx(
              'object-cover object-center rounded-2xl aspect-video h-full max-h-60 shadow'
            )}
            alt=''
            src={map}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
