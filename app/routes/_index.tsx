import type { MetaFunction } from '@remix-run/node';
import ContactBanner from '~/components/ContactBanner';
import { ImageCarousel } from '~/components/ImageCarousel';
import ImageGrid from '~/components/ImageGrid';
import Testimonial from '~/components/Testimonial';
import { useWindowDimensions } from '~/hooks/useWindowDimensions';
import { COMPANY_INFO } from '~/lib/const';

export const meta: MetaFunction = () => {
  const { companyName } = COMPANY_INFO;
  return [
    { title: `${companyName}` },
    { name: 'description', content: `${companyName}` },
  ];
};

export default function Index() {
  const { isMobile } = useWindowDimensions();
  return (
    <div className='h-full'>
      {isMobile && <ContactBanner />}
      <ImageCarousel />
      <Testimonial />
      <ImageGrid />
    </div>
  );
}
