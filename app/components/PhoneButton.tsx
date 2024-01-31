import { Phone } from '@mui/icons-material';
import clsx from 'clsx';
import { COMPANY_INFO } from '~/lib/const';

type PhoneButtonProps = { size?: 'small' | 'base' | 'large' };
const PhoneButton = ({ size = 'base' }: PhoneButtonProps) => {
  const sizes = {
    small: 'text-sm',
    base: 'text-base',
    large: 'text-lg',
  };
  const { phoneNumber } = COMPANY_INFO;
  return (
    <div
      className={clsx(
        'flex items-center gap-1 px-4 py-2 rounded border border-primary border-opacity-10 active:bg-primary/10 focus:bg-primary/10'
      )}>
      <Phone fontSize='small' className='text-primary' />
      <a
        href={`tel:${phoneNumber}`}
        className={clsx('font-light -mb-1', sizes[size])}>
        {phoneNumber}
      </a>
    </div>
  );
};

export default PhoneButton;
