import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='w-full md:pt-4 md:pb-8'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
