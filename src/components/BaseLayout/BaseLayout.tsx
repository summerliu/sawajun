import Footer from '@/components/BaseLayout/Footer/Footer';
import Header from '@/components/BaseLayout/Header/Header';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen min-w-full grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="mx-auto my-0 h-full w-full min-w-[20rem] max-w-[80rem] px-6 pb-14 pt-8 md:pt-10 lg:pb-20 xl:px-8 xl:pt-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
