import clsx from 'clsx';
import { Phone } from '@mui/icons-material';
import { COMPANY_INFO } from '~/lib/const';
import { useWindowDimensions } from '~/hooks/useWindowDimensions';
import jiwla_logo_transparent from '~/media/jiwla_logo_transparent.png';
import { Link } from '@remix-run/react';
import PhoneButton from '../PhoneButton';

const Header = () => {
  const { companyName, companyNameShort } = COMPANY_INFO;
  const { isMobile } = useWindowDimensions();
  return (
    <div className={clsx('w-full py-4 text-primary')}>
      <div
        className={clsx(
          'w-full max-w-7xl mx-auto px-4 flex justify-between items-center'
        )}>
        {/* Logo */}
        <Link to='/'>
          <div className='w-fit flex gap-2 items-center'>
            <img src={jiwla_logo_transparent} alt='' className='w-16 md:w-20' />
            <h1 className='w-fit md:w-[45%] font-StardosStencil uppercase font-bold text-secondary leading-tight'>
              {isMobile ? companyNameShort : companyName}
            </h1>
          </div>
        </Link>

        {/* Contact */}
        <div className='flex gap-4 sm:gap-6 items-center'>
          <Link
            to='/contact'
            className='text-primary/80 font-normal hover:text-primary cursor-pointer -mb-1'>
            Contact
          </Link>

          {!isMobile && <PhoneButton size='small' />}
        </div>
      </div>
    </div>
  );
};

export default Header;
